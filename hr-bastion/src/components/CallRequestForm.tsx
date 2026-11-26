"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { insertRow } from "@/lib/supabase";

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", maxLength: 120 },
  { name: "company", label: "Company name", type: "text", autoComplete: "organization", maxLength: 160 },
  { name: "email", label: "Work email", type: "email", autoComplete: "email", maxLength: 254 },
  { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", maxLength: 40, minLength: 5 },
];

const inputClass =
  "w-full rounded-xl border bg-white px-4 py-3 text-base outline-none focus:border-[var(--cobalt)] focus:ring-2 focus:ring-[var(--cobalt)]/20";

const cardClass = "max-w-2xl mx-auto rounded-2xl border bg-white p-6 md:p-10";
const cardStyle = {
  borderColor: "var(--line)",
  borderTop: "3px solid var(--gold)",
  boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
};

function Label({ htmlFor, children, optional }: { htmlFor: string; children: string; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>
      {children}
      {optional && (
        <span className="font-normal" style={{ color: "#64748B" }}> (optional)</span>
      )}
    </label>
  );
}

function SuccessMessage() {
  const ref = useRef<HTMLDivElement>(null);

  // The form is taller than this message, so bring it into view and announce it.
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
    ref.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, []);

  return (
    <div
      ref={ref}
      role="status"
      tabIndex={-1}
      className={`${cardClass} flex flex-col items-center justify-center text-center outline-none min-h-[360px]`}
      style={cardStyle}
    >
      <svg className="success-check w-24 h-24 mb-6" viewBox="0 0 80 80" aria-hidden="true">
        <circle className="success-fill" cx="40" cy="40" r="36" />
        <circle className="success-ring" cx="40" cy="40" r="36" pathLength="1" />
        <path className="success-tick" d="M24 41.5l11 11L57 30" pathLength="1" />
      </svg>
      <div className="success-text">
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--navy)" }}>
          Request received
        </h2>
        <p className="text-base leading-relaxed max-w-sm" style={{ color: "#475569" }}>
          Thank you. We&apos;ve got your details and we&apos;ll be in touch to arrange your call.
        </p>
      </div>
    </div>
  );
}

export default function CallRequestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const data = new FormData(e.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    // Hidden spam trap: people never see this field, but simple bots fill it in.
    if (value("hp_check")) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await insertRow(
        "website_leads",
        {
          name: value("name"),
          company: value("company"),
          email: value("email"),
          phone: value("phone"),
          best_time: value("best_time"),
          message: value("message") || null,
        },
        { signal: AbortSignal.timeout(15000) },
      );
      // Only show the success check once the database has confirmed the save.
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") return <SuccessMessage />;

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className={cardClass} style={cardStyle}>
      <div className="grid md:grid-cols-2 gap-5">
        {fields.map((f) => (
          <div key={f.name}>
            <Label htmlFor={f.name}>{f.label}</Label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              maxLength={f.maxLength}
              minLength={f.minLength}
              required
              className={inputClass}
              style={{ borderColor: "var(--line)" }}
            />
          </div>
        ))}

        <div className="md:col-span-2">
          <Label htmlFor="best_time" optional>Best time to call</Label>
          <select id="best_time" name="best_time" className={inputClass} style={{ borderColor: "var(--line)" }}>
            <option>Any time</option>
            <option>Morning</option>
            <option>Afternoon</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="message" optional>What do you need help with?</Label>
          <textarea id="message" name="message" rows={4} maxLength={2000} className={inputClass} style={{ borderColor: "var(--line)" }} />
        </div>
      </div>

      <input type="text" name="hp_check" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={sending}
        className="gold-cta w-full mt-7 px-7 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2.5 cursor-pointer disabled:cursor-wait"
      >
        {sending && <span className="send-spinner" aria-hidden="true"></span>}
        {sending ? "Sending…" : "Request a call"}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-center font-semibold" style={{ color: "#B91C1C" }}>
          Sorry, something went wrong and we couldn&apos;t confirm your request. Please try again.
        </p>
      )}

      <p className="mt-4 text-xs text-center" style={{ color: "#64748B" }}>
        Free to get matched, no obligation. Read our{" "}
        <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </form>
  );
}
