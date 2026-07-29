"use client";

import { useEffect, useRef } from "react";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLSpanElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const calHighlightRef = useRef<HTMLDivElement>(null);
  const bookCheckRef = useRef<HTMLDivElement>(null);
  const bookLabelRef = useRef<HTMLSpanElement>(null);
  const bookDetailsRef = useRef<HTMLDivElement>(null);
  const loopStarted = useRef(false);

  useEffect(() => {
    const messages = [
      "New client, 45 employees",
      "Sector: E-commerce",
      "Concern: Redundancy process",
      "No HR person in place",
      "Profile ready ✓",
    ];

    function fmtTime(s: number) {
      const m = Math.floor(s / 60).toString().padStart(2, "0");
      const sec = (s % 60).toString().padStart(2, "0");
      return `${m}:${sec}`;
    }

    let callSeconds = 0;
    let timerInterval: ReturnType<typeof setInterval> | null = null;
    let riseInterval: ReturnType<typeof setInterval> | null = null;
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function after(fn: () => void, delay: number) {
      const t = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
      timeouts.push(t);
    }

    function runStep1(onDone: () => void) {
      const feed = feedRef.current;
      const timerEl = timerRef.current;
      if (!feed || !timerEl) return;
      feed.innerHTML = "";
      callSeconds = 0;
      timerEl.textContent = "00:00";
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        callSeconds++;
        timerEl.textContent = fmtTime(callSeconds);
      }, 1000);

      messages.forEach((msg, i) => {
        after(() => {
          const b = document.createElement("div");
          b.className = "chat-bubble";
          b.textContent = msg;
          feed.appendChild(b);
          if (feed.children.length > 4) {
            feed.removeChild(feed.children[0]);
          }
        }, i * 1300 + 400);
      });

      const lastMessageAt = (messages.length - 1) * 1300 + 400;
      after(onDone, lastMessageAt + 1200);
    }

    function runStep2(onDone: () => void) {
      const ring = ringRef.current;
      const scoreNum = scoreRef.current;
      const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!ring || !scoreNum) return;

      rows.forEach((r) => {
        r.classList.remove("scanning", "matched");
        const tag = r.querySelector(".cand-tag");
        if (tag) tag.textContent = "";
      });
      ring.style.background = "conic-gradient(var(--cobalt) 0%, #E2E8F0 0%)";
      scoreNum.textContent = "0%";

      rows.forEach((row, i) => {
        after(() => {
          row.classList.add("scanning");
          const tag = row.querySelector(".cand-tag");
          if (tag) tag.textContent = ["62%", "96%", "78%"][i];
        }, i * 450 + 300);
      });

      let pct = 0;
      const target = 96;
      if (riseInterval) clearInterval(riseInterval);
      riseInterval = setInterval(() => {
        pct += 3;
        if (pct >= target) {
          pct = target;
          if (riseInterval) clearInterval(riseInterval);
        }
        ring.style.background = `conic-gradient(var(--cobalt) ${pct}%, #E2E8F0 0)`;
        scoreNum.textContent = pct + "%";
      }, 45);

      const matchedAt = 2400;
      after(() => {
        rows.forEach((r) => r.classList.remove("scanning"));
        const winner = rows.find((r) => r.dataset.name === "Sarah M.");
        if (winner) {
          winner.classList.add("matched");
          const tag = winner.querySelector(".cand-tag");
          if (tag) tag.textContent = "Matched";
        }
      }, matchedAt);

      after(onDone, matchedAt + 900);
    }

    function runStep3(onDone: () => void) {
      const bookCheck = bookCheckRef.current;
      const bookLabel = bookLabelRef.current;
      const bookDetails = bookDetailsRef.current;
      if (!bookCheck || !bookLabel || !bookDetails) return;

      bookCheck.classList.remove("checked");
      bookLabel.textContent = "Awaiting confirmation…";
      bookDetails.style.opacity = "0";

      const confirmedAt = 2600;
      after(() => {
        bookCheck.classList.add("checked");
        bookLabel.textContent = "Confirmed";
        bookDetails.style.opacity = "1";
      }, confirmedAt);

      after(onDone, confirmedAt + 1200);
    }

    function loop() {
      if (cancelled) return;
      runStep1(() => {
        if (cancelled) return;
        runStep2(() => {
          if (cancelled) return;
          runStep3(() => {
            if (cancelled) return;
            loop();
          });
        });
      });
    }

    const section = sectionRef.current;
    if (!section) return;

    const loopObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !loopStarted.current) {
            loopStarted.current = true;
            loop();
          }
        });
      },
      { threshold: 0.2 }
    );
    loopObs.observe(section);

    return () => {
      cancelled = true;
      loopObs.disconnect();
      if (timerInterval) clearInterval(timerInterval);
      if (riseInterval) clearInterval(riseInterval);
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <section id="how" ref={sectionRef} className="py-24 overflow-hidden" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--cobalt)" }}>
            <span className="badge-line"></span>How we work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>
            Matched in 3 simple steps
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#64748B" }}>
            Speak to one of our experts who will uncover your needs, find you the perfect outsourced HR partner, and
            schedule the intro call. No forms to fill in or admin for you to do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[3.1rem] left-[16.6%] right-[16.6%] h-[2px]" style={{ background: "var(--line)" }}></div>

          {/* STEP 1 */}
          <div className="fade-up relative">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm z-10 relative"
                style={{ background: "var(--cobalt)", color: "white", fontFamily: "'Fraunces', serif" }}
              >
                01
              </div>
              <h3 className="font-bold text-lg" style={{ color: "var(--navy)" }}>
                We call you
              </h3>
            </div>
            <p className="text-sm mb-5" style={{ color: "#64748B" }}>
              A short call with an HR Bastion expert. We ask the questions that actually matter, headcount, sector, and
              what&apos;s worrying you.
            </p>

            <div className="bg-white rounded-2xl border p-5 h-[280px] flex flex-col" style={{ borderColor: "var(--line)" }}>
              <div className="flex items-center justify-between mb-4 pb-3 border-b" style={{ borderColor: "var(--line)" }}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-semibold" style={{ color: "var(--navy)" }}>
                    Live call
                  </span>
                </div>
                <span ref={timerRef} className="text-xs font-mono" style={{ color: "#94A3B8" }}>
                  00:00
                </span>
              </div>
              <div ref={feedRef} className="flex-1 flex flex-col gap-2 justify-end overflow-hidden"></div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="fade-up relative">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm z-10 relative"
                style={{ background: "var(--cobalt)", color: "white", fontFamily: "'Fraunces', serif" }}
              >
                02
              </div>
              <h3 className="font-bold text-lg" style={{ color: "var(--navy)" }}>
                We match you
              </h3>
            </div>
            <p className="text-sm mb-5" style={{ color: "#64748B" }}>
              Our scoring model weighs sector fit, headcount, budget and risk profile against our vetted network, not
              just who&apos;s available first.
            </p>

            <div className="bg-white rounded-2xl border p-5 h-[280px] flex flex-col items-center" style={{ borderColor: "var(--line)" }}>
              <div className="relative w-28 h-28 mt-2 mb-4">
                <div
                  ref={ringRef}
                  className="w-28 h-28 rounded-full flex items-center justify-center"
                  style={{ background: "conic-gradient(var(--cobalt) 0%, #E2E8F0 0%)" }}
                >
                  <div className="w-[86px] h-[86px] rounded-full bg-white flex items-center justify-center">
                    <span ref={scoreRef} className="text-xl font-bold" style={{ color: "var(--cobalt)", fontFamily: "'Fraunces', serif" }}>
                      0%
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex-1 flex flex-col gap-1.5 justify-start text-xs">
                {[
                  { name: "James R.", label: "James R. — Generalist" },
                  { name: "Sarah M.", label: "Sarah M. — Senior Consultant" },
                  { name: "Priya K.", label: "Priya K. — ER Specialist" },
                ].map((c, i) => (
                  <div
                    key={c.name}
                    ref={(el) => {
                      rowRefs.current[i] = el;
                    }}
                    data-name={c.name}
                    className="candidate-row flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-all"
                  >
                    <span style={{ color: "#64748B" }}>{c.label}</span>
                    <span className="cand-tag text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ color: "#94A3B8" }}></span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="fade-up relative">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm z-10 relative"
                style={{ background: "var(--cobalt)", color: "white", fontFamily: "'Fraunces', serif" }}
              >
                03
              </div>
              <h3 className="font-bold text-lg" style={{ color: "var(--navy)" }}>
                We book it in
              </h3>
            </div>
            <p className="text-sm mb-5" style={{ color: "#64748B" }}>
              We handle the scheduling end to end. Your matched consultant lands in your calendar. You just show up.
            </p>

            <div className="bg-white rounded-2xl border p-5 h-[280px] flex flex-col" style={{ borderColor: "var(--line)" }}>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i} className="text-[9px] text-center font-semibold" style={{ color: "#94A3B8" }}>
                    {d}
                  </span>
                ))}
                {Array.from({ length: 21 }).map((_, i) => (
                  <div key={i} ref={i === 9 ? calHighlightRef : undefined} id={i === 9 ? "calHighlight" : undefined} className="cal-cell"></div>
                ))}
              </div>
              <div
                className="flex-1 rounded-xl p-4 flex flex-col justify-center transition-all duration-500"
                style={{ background: "var(--bg)", border: "1px solid var(--line)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div ref={bookCheckRef} className="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all" style={{ borderColor: "#CBD5E1" }}></div>
                  <span ref={bookLabelRef} className="text-xs font-semibold" style={{ color: "#94A3B8" }}>
                    Awaiting confirmation…
                  </span>
                </div>
                <div ref={bookDetailsRef} className="opacity-0 transition-opacity duration-500">
                  <div className="text-sm font-bold mb-0.5" style={{ color: "var(--navy)" }}>
                    Tue 14:00, Discovery Call
                  </div>
                  <div className="text-xs" style={{ color: "#64748B" }}>
                    with Sarah M., Senior HR Consultant
                  </div>
                  <div className="text-xs mt-1" style={{ color: "var(--cobalt)" }}>
                    📅 Added to your calendar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
