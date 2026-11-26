"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { insertRow } from "@/lib/supabase";

const LEADFEEDER_ID = "YEgkB8ljKey4ep3Z";

// Change this whenever the banner wording or the tracking tools change.
// Everyone is then asked again.
const NOTICE_VERSION = "2026-11-26";

const STORAGE_KEY = "hrb_cookie_choice";
const ASK_AGAIN_AFTER_MS = 182 * 24 * 60 * 60 * 1000; // about 6 months
export const OPEN_SETTINGS_EVENT = "hrb:cookie-settings";

type Choice = "accepted" | "rejected";
type Saved = { choice: Choice; version: string; ref: string; at: number };

type LeadfeederQueue = { (...args: unknown[]): void; _q?: unknown[]; acceptCookie?: () => void };

declare global {
  interface Window {
    ldfdr?: LeadfeederQueue;
    hrbTrackerRequested?: boolean;
  }
}

function readSaved(): Saved | null {
  try {
    const saved: Saved | null = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    if (!saved || saved.version !== NOTICE_VERSION || Date.now() - saved.at > ASK_AGAIN_AFTER_MS) return null;
    return saved;
  } catch {
    return null;
  }
}

// Leadfeeder's own install snippet, only ever run after someone clicks Accept.
function loadLeadfeeder() {
  if (window.hrbTrackerRequested) return;
  window.hrbTrackerRequested = true;

  const src = `https://sc.lfeeder.com/lftracker_v1_${LEADFEEDER_ID}.js`;

  // Local previews must not send test visits to the Leadfeeder account.
  if (["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname)) {
    console.info("[cookies] Local preview, so Leadfeeder was not loaded. The live site would load:", src);
    return;
  }

  if (!window.ldfdr) {
    const queue: LeadfeederQueue = (...args: unknown[]) => {
      (queue._q = queue._q || []).push(args);
    };
    window.ldfdr = queue;
  }

  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  // Needed if "consent mode" is switched on in the Leadfeeder account.
  script.onload = () => window.ldfdr?.acceptCookie?.();
  document.head.appendChild(script);
}

function removeLeadfeederStorage() {
  const parts = window.location.hostname.split(".");
  // Cookies may have been set on the exact host or a parent domain, so clear each.
  const domains = ["", ...parts.map((_, i) => parts.slice(i).join(".")).flatMap((d) => [d, `.${d}`])];
  for (const name of ["_lfa", "_lfa_consent", "_lfa_test_cookie_stored"]) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
  try {
    localStorage.removeItem("_lfa");
    localStorage.removeItem("_lfa_expiry");
  } catch {}
}

const buttonClass =
  "flex-1 sm:flex-none sm:w-32 rounded-full border-2 px-5 py-2.5 text-sm font-semibold cursor-pointer hover:bg-slate-100";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Choice | null>(null);

  useEffect(() => {
    const saved = readSaved();
    if (saved?.choice === "accepted") {
      loadLeadfeeder();
    } else {
      removeLeadfeederStorage();
    }
    setCurrent(saved?.choice ?? null);
    setOpen(!saved);

    const openSettings = () => setOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
  }, []);

  function choose(choice: Choice) {
    setOpen(false);
    if (choice === current) return;

    const withdrawing = current === "accepted" && choice === "rejected";
    let ref: string = crypto.randomUUID();
    try {
      ref = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null")?.ref ?? ref;
      const saved: Saved = { choice, version: NOTICE_VERSION, ref, at: Date.now() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch {}
    setCurrent(choice);

    // Keep a record of the choice. keepalive lets it finish even if the page reloads.
    insertRow(
      "website_consent_log",
      { consent_ref: ref, choice: withdrawing ? "withdrawn" : choice, notice_version: NOTICE_VERSION },
      { keepalive: true },
    ).catch(() => {});

    if (choice === "accepted") {
      loadLeadfeeder();
    } else if (withdrawing) {
      // Reloading is the reliable way to stop a script that is already running.
      removeLeadfeederStorage();
      window.location.reload();
    }
  }

  if (!open) return null;

  return (
    <section
      aria-label="Cookie choices"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5"
    >
      <div
        className="max-w-4xl mx-auto max-h-[70vh] overflow-y-auto rounded-2xl border bg-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
        style={{ borderColor: "var(--line)", borderTop: "3px solid var(--gold)", boxShadow: "0 18px 50px rgba(15,23,42,0.22)" }}
      >
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-1.5" style={{ color: "var(--navy)" }}>
            Can we use cookies?
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
            With your permission, we and a third-party provider will use cookies to understand how our website is used
            and which businesses visit it.{" "}
            {/* The provider isn't named here, so this link must clearly say that it is named there. */}
            <Link href="/privacy#cookies" className="underline" style={{ color: "var(--cobalt)" }}>
              See who the provider is
            </Link>
          </p>
          {current && (
            <p className="text-xs mt-2 font-semibold" style={{ color: "var(--navy)" }}>
              Your current choice: {current === "accepted" ? "Accepted" : "Rejected"}
            </p>
          )}
        </div>
        {/* Both buttons look the same on purpose: refusing must be as easy as accepting. */}
        <div className="flex gap-3">
          <button type="button" onClick={() => choose("rejected")} className={buttonClass} style={{ borderColor: "var(--cobalt)", color: "var(--cobalt)" }}>
            Reject
          </button>
          <button type="button" onClick={() => choose("accepted")} className={buttonClass} style={{ borderColor: "var(--cobalt)", color: "var(--cobalt)" }}>
            Accept
          </button>
        </div>
      </div>
    </section>
  );
}
