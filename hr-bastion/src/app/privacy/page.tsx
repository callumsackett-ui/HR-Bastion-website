import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy. HR Bastion",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6" style={{ background: "#F8FAFC" }}>
      <div className="text-center max-w-lg">
        <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#1E3A8A" }}>
          <span style={{ display: "inline-block", width: 28, height: 2, background: "#F5B700", marginRight: 10 }}></span>
          Privacy Policy
        </div>
        <h1 className="text-3xl font-bold mb-4" style={{ color: "#0F172A", fontFamily: "'Fraunces', serif" }}>
          Coming Soon
        </h1>
        <p className="text-sm" style={{ color: "#64748B" }}>
          Our full privacy policy is being finalised and will be published here shortly.
        </p>
        <Link href="/" className="inline-block mt-8 text-sm font-semibold" style={{ color: "#1E3A8A" }}>
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
