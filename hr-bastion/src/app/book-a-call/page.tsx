import type { Metadata } from "next";
import Link from "next/link";
import Shield from "@/components/Shield";
import HowItWorks from "@/components/HowItWorks";
import ScrollReveal from "@/components/ScrollReveal";
import CallRequestForm from "@/components/CallRequestForm";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Request a Call. HR Bastion",
  description:
    "Request a call to find the perfect outsourced HR expert for your business. Free to get matched, no obligation.",
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
            <span className="badge-line"></span>Request a Free Intro Call
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-[1.15] mb-6" style={{ color: "var(--navy)" }}>
            See if outsourced HR is right for your business
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#475569" }}>
            Leave your details and we&apos;ll be in touch to arrange your call. We&apos;ll assess your needs, then
            find you the perfect outsourced HR expert for your situation. Calls usually last no longer than 10
            minutes, and we handle the scheduling of next steps with the matched HR expert on your behalf.
          </p>
        </div>

        <div id="book" className="fade-up">
          <CallRequestForm />
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
            <CookieSettingsButton />
            <span>© 2026 HR Bastion. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
