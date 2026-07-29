import type { Metadata } from "next";
import Link from "next/link";
import Shield from "@/components/Shield";
import HowItWorks from "@/components/HowItWorks";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Book a Call. HR Bastion",
  description:
    "Book a call to find the perfect outsourced HR expert for your business. Free to get matched, no obligation.",
};

export default function BookACallPage() {
  return (
    <>
      <ScrollReveal />

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Shield id="nav-book" className="w-9 h-9" />
            <span className="font-semibold text-lg" style={{ color: "var(--navy)" }}>
              HR Bastion
            </span>
          </Link>
          <Link href="/" className="text-sm font-semibold hover:opacity-70" style={{ color: "var(--navy)" }}>
            ← Back to home
          </Link>
        </div>
      </header>

      {/* HERO + BOOKING WIDGET */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-24" style={{ background: "#FFFFFF" }}>
        <div className="fade-up text-center mb-14">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wide mb-5" style={{ color: "var(--cobalt)" }}>
            <span className="badge-line"></span>Book Your Free Match Call
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-[1.15] mb-6" style={{ color: "var(--navy)" }}>
            Book a Call To Find The Perfect Outsourced HR Expert For Your Business
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#475569" }}>
            We&apos;ll assess your needs, then run our internal HR matching tool to find the perfect outsourced HR
            expert for your situation. Calls usually last no longer than 10 minutes, and we handle the scheduling of
            next steps with the matched HR expert on your behalf.
          </p>
        </div>

        <div id="book" className="fade-up">
          {/* Cal.eu widget placeholder */}
          <div
            className="rounded-2xl border-2 border-dashed p-16 flex flex-col items-center justify-center gap-3 mx-auto"
            style={{ borderColor: "var(--line)", background: "var(--bg)", minHeight: 600 }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(30,58,138,0.08)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="16" rx="2" stroke="var(--cobalt)" strokeWidth="1.6" />
                <path d="M3 9H21" stroke="var(--cobalt)" strokeWidth="1.6" />
                <path d="M7 3V6" stroke="var(--cobalt)" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M17 3V6" stroke="var(--cobalt)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-sm font-semibold" style={{ color: "var(--navy)" }}>
              [ Cal.eu booking widget goes here ]
            </div>
            <div className="text-xs max-w-sm text-center" style={{ color: "#94A3B8" }}>
              The live scheduling calendar will be embedded in this space once the Cal.eu code is added.
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* FOOTER */}
      <footer className="py-10" style={{ background: "var(--navy)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield id="footer-book" className="w-7 h-7" />
            <span className="font-semibold text-white text-sm">HR Bastion</span>
          </div>
          <div className="flex items-center gap-6 text-xs" style={{ color: "#64748B" }}>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>© 2026 HR Bastion. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
