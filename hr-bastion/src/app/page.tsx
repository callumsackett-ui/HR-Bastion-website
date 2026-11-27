import Link from "next/link";
import Shield from "@/components/Shield";
import HowItWorks from "@/components/HowItWorks";
import ScrollReveal from "@/components/ScrollReveal";
import ProblemBubbles from "@/components/ProblemBubbles";
import CookieSettingsButton from "@/components/CookieSettingsButton";

const trustItems = [
  { value: "100%", label: "Free to get matched" },
  { value: "5 mins", label: "Matched in as little as 5 minutes" },
  { value: "Vetted", label: "HR experts only" },
  { value: "No obligation", label: "Ever" },
];

const riskStats = [
  {
    value: "523,000",
    title: "Open employment tribunal cases",
    body: "The UK tribunal backlog is currently around 523,000 cases and still rising, with claims up 54% year-on-year.",
  },
  {
    value: "£37,607",
    title: "Average discrimination award",
    body: "Ministry of Justice data puts the average sex discrimination award at £37,607, with some claim types uncapped.",
  },
  {
    value: "£30,614",
    title: "Cost of a bad hire",
    body: "Oxford Economics puts the average cost of replacing an employee at £30,614, once lost productivity is included.",
  },
  {
    value: "Day 1",
    title: "Rights now apply immediately",
    body: "The Employment Rights Act 2025 introduced day-one statutory sick pay and paternity leave. Most small businesses haven't updated policies to match.",
  },
  {
    value: "6 months",
    title: "Extended tribunal window",
    body: "From October 2026, employees get six months (up from three) to bring a tribunal claim, doubling your exposure window.",
  },
  {
    value: "£10,000+",
    title: "Cost of an unfair dismissal claim",
    body: "Unfair dismissal claims alone can cost upwards of £10,000, before management time and reputational damage.",
  },
];

const faqs = [
  {
    q: "Is HR Bastion an HR provider?",
    a: "No. HR Bastion is not an HR provider ourselves, we're a matching service that connects you with a pre-vetted outsourced HR expert or company that's the right fit for your needs. We match to the best of our ability, based on the information you provide and the information provided by our HR partners. Any conversation or agreement you enter into with an HR partner is strictly between you and that HR provider, and does not involve HR Bastion in any way.",
  },
  {
    q: "How much does it cost to get matched?",
    a: "It costs nothing to get matched, we're paid by the HR partners in our network. The call and the match are both free. You only pay if you decide to work with the HR expert we match you with.",
  },
  {
    q: "How is this different from a big HR provider?",
    a: "Big HR providers are limited to the staff they have internally and will often just assign you the next person on 'rotation'. HR Bastion runs a full partner network across multiple providers, so we're able to look at your business first, then match you with the expert who fits your size, your sector, and your problem.",
  },
  {
    q: "What if the match is not right for my business?",
    a: "Just tell us. We will find you a new match at no extra cost. You are never stuck with someone who is not a good fit.",
  },
  {
    q: "How fast can I start?",
    a: "Just one 5-10 minute phone call with a HR Bastion expert and you're matched with the right HR person and scheduled in for an intro call with them. You can often start getting HR support as early as the same week.",
  },
  {
    q: "Is this only for certain company sizes?",
    a: "No. We work with small teams and larger teams too. Tell us your size on the call, and we will match you with someone who has helped businesses like yours before.",
  },
];

export default function Home() {
  return (
    <>
      <ScrollReveal />

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Shield id="nav" className="w-9 h-9" />
            <span className="font-semibold text-lg" style={{ color: "var(--navy)" }}>
              HR Bastion
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "var(--navy)" }}>
            <a href="#compare" className="hover:opacity-70">In-House vs Outsourced</a>
            <a href="#how" className="hover:opacity-70">How It Works</a>
            <a href="#risk" className="hover:opacity-70">The Risk of Going Without</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
          </nav>
          <Link href="/book-a-call" className="gold-cta px-5 py-2.5 rounded-full text-sm font-semibold">Find My HR Match</Link>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center" style={{ background: "#FFFFFF" }}>
        <div className="fade-up">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wide mb-5" style={{ color: "var(--cobalt)" }}>
            <span className="badge-line"></span>FOR UK SMES & GROWING BUSINESSES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6" style={{ color: "var(--navy)" }}>
            Find the right
            <br />
            <span style={{ color: "var(--cobalt)" }}>outsourced HR expert for your business.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#475569" }}>
            Every business&apos;s HR needs are different. HR Bastion matches you with an outsourced HR partner
            suited to your headcount, sector and your specific needs and requirements, without the upfront cost
            or risks of hiring in-house.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-a-call" className="gold-cta px-7 py-3.5 rounded-full font-semibold">Find My HR Match</Link>
            <a href="#compare" className="px-7 py-3.5 rounded-full font-semibold border" style={{ borderColor: "var(--line)", color: "var(--navy)" }}>
              See the cost comparison
            </a>
          </div>
        </div>

        <div className="fade-up">
          <div className="bg-white rounded-2xl border shadow-sm p-6" style={{ borderColor: "var(--line)" }}>
            <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#94A3B8" }}>Your Match</div>
            <div className="rounded-xl p-5 mb-4" style={{ background: "var(--bg)", border: "1px solid var(--line)" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2 py-1 rounded" style={{ background: "rgba(30,58,138,0.08)", color: "var(--cobalt)" }}>
                  BEST FIT
                </span>
                <span className="text-2xl font-bold" style={{ color: "var(--cobalt)" }}>
                  8.9<span className="text-sm font-medium" style={{ color: "#94A3B8" }}>/10</span>
                </span>
              </div>
              <div className="font-semibold text-lg mb-1" style={{ color: "var(--navy)" }}>Sarah M., Senior HR Consultant</div>
              <div className="text-sm mb-4" style={{ color: "#64748B" }}>12 yrs experience · SME &amp; growth-stage specialist</div>
              <div className="space-y-3">
                {[
                  { label: "Sector match", pct: 96 },
                  { label: "Headcount fit", pct: 91 },
                  { label: "Risk profile match", pct: 88 },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{m.label}</span>
                      <span className="font-semibold">{m.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200">
                      <div className="h-1.5 rounded-full" style={{ width: `${m.pct}%`, background: "var(--cobalt)" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-xs" style={{ color: "#94A3B8" }}>Matched from a vetted network, not the first available consultant.</div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y overflow-hidden" style={{ borderColor: "var(--line)", background: "white" }}>
        <div className="py-6 fade-up">
          <div className="marquee-track">
            {Array.from({ length: 6 }).map((_, g) => (
              <div key={g} className="marquee-group">
                {trustItems.map((item, i) => (
                  <div key={i} className="trust-item flex items-center gap-3 shrink-0">
                    <span className="text-2xl font-bold" style={{ color: "var(--cobalt)", fontFamily: "'Fraunces', serif" }}>
                      {item.value}
                    </span>
                    <span className="text-xs font-medium whitespace-nowrap" style={{ color: "#64748B" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="compare" className="py-20" style={{ background: "var(--navy)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--gold)" }}>
              <span className="badge-line"></span>Your options
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hire in-house, or outsource. Here&apos;s why small businesses choose HR Bastion.
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              When your business needs HR support, there are two options: hire someone in-house, or outsource it.
              Here&apos;s exactly what each path costs, and why so many growing businesses choose to outsource with
              HR Bastion instead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 fade-up">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-1">Option 1: Hire In-House</h3>
              <div className="text-sm text-slate-400 mb-6">e.g. one HR Manager on the UK average salary of £46,300*</div>
              <ul className="space-y-4 text-slate-200 text-sm">
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Base salary</span><span className="font-semibold text-white">£46,300</span></li>
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Employer NI (15% above £5,000 threshold)</span><span className="font-semibold text-white">≈ £6,195</span></li>
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Minimum employer pension (auto-enrolment)</span><span className="font-semibold text-white">≈ £1,200</span></li>
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Recruitment / agency fee (one-off)</span><span className="font-semibold text-white">£6,900–£9,300</span></li>
                <li className="flex justify-between pb-1"><span>Contract flexibility</span><span className="font-semibold text-white">Tied into contract</span></li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-slate-300 text-sm">Realistic Year 1 cost</span>
                <span className="text-2xl font-bold text-white">£60,000+</span>
              </div>
              <div className="mt-3 text-xs text-slate-400">
                Before ramp-up time, management overhead, or the cost of a bad hire. Averaging £30,614 per replacement
                once lost productivity is included.
              </div>
            </div>

            <div className="rounded-2xl p-8" style={{ background: "linear-gradient(160deg, var(--cobalt) 0%, #16296B 100%)" }}>
              <h3 className="text-xl font-bold text-white mb-1">Option 2: Outsource with HR Bastion</h3>
              <div className="text-sm mb-6" style={{ color: "#BFD0FF" }}>Matched consultant, sized to your business</div>
              <ul className="space-y-4 text-sm" style={{ color: "#E4EAFC" }}>
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Fixed monthly retainer</span><span className="font-semibold text-white">From £300/mo</span></li>
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Employer NI</span><span className="font-semibold text-white">£0</span></li>
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Pension contribution</span><span className="font-semibold text-white">£0</span></li>
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Recruitment / agency fee</span><span className="font-semibold text-white">£0</span></li>
                <li className="flex justify-between pb-1"><span>Contract flexibility</span><span className="font-semibold text-white">Switch or exit anytime</span></li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-sm" style={{ color: "#BFD0FF" }}>Realistic Year 1 cost</span>
                <span className="text-2xl font-bold text-white">£3,600–£10,800</span>
              </div>
              <div className="mt-3 text-xs" style={{ color: "#BFD0FF" }}>
                No ramp-up. No severance risk. If the fit isn&apos;t right, we re-match you. You&apos;re not stuck
                with a hiring decision.
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-slate-500 max-w-3xl mx-auto text-center fade-up">
            *£46,300 is the average of UK HR Manager salary data from PayScale (£40,800), Indeed (£44,973), Glassdoor
            (£51,942) and BritClock (£47,500), rounded to the nearest £100.
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* WHY WE EXIST */}
      <section className="py-24" style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--cobalt) 100%)" }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="fade-up">
            <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--gold)" }}>
              <span className="badge-line"></span>Why We Exist
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Problem We See In The Market</h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#BFD0FF" }}>
              Having spoken to thousands of small business owners, founders, directors, and even HR leaders, we
              repeatedly saw that companies are struggling to manage their people effectively. HR Bastion exists to
              give companies an easy way to solve these issues by finding the perfect outsourced HR professional for
              their needs.
            </p>
          </div>

          <ProblemBubbles />
        </div>
      </section>

      {/* RISK STATS */}
      <section id="risk" className="py-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--cobalt)" }}>
              <span className="badge-line"></span>The risk of going without
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>
              Going without HR support isn&apos;t neutral. It&apos;s a live risk
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              UK employment law is moving fast. Here&apos;s what&apos;s currently exposed if there&apos;s no one
              managing it properly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 fade-up">
            {riskStats.map((stat) => (
              <div key={stat.title} className="bg-white rounded-2xl border p-7" style={{ borderColor: "var(--line)" }}>
                <div className="text-4xl font-bold mb-2" style={{ color: "var(--cobalt)", fontFamily: "'Fraunces', serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold mb-2" style={{ color: "var(--navy)" }}>{stat.title}</div>
                <div className="text-sm" style={{ color: "#64748B" }}>{stat.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section id="cta" className="py-24" style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--cobalt) 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get matched with your HR expert, free.</h2>
          <p className="text-lg mb-9" style={{ color: "#BFD0FF" }}>
            Spare 10 minutes to tell us about your business and we&apos;ll match you with the right outsourced HR
            partner. No obligations and completely free to use.
          </p>
          <Link href="/book-a-call" className="gold-cta inline-block px-9 py-4 rounded-full font-semibold text-lg">Find My HR Match</Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 fade-up">
            <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--cobalt)" }}>
              <span className="badge-line"></span>FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--navy)" }}>Common questions</h2>
          </div>

          <div className="space-y-3 fade-up">
            {faqs.map((item) => (
              <details key={item.q} className="faq-item bg-white border rounded-2xl p-5 group" style={{ borderColor: "var(--line)" }}>
                <summary className="flex items-center justify-between cursor-pointer font-semibold" style={{ color: "var(--navy)" }}>
                  {item.q}
                  <span className="faq-icon" style={{ color: "var(--cobalt)" }}>+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#64748B" }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ background: "var(--navy)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield id="footer" className="w-7 h-7" />
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
