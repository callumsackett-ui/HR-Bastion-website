import Link from "next/link";
import Shield from "@/components/Shield";

const problems = [
  {
    quote: "I’m doing HR on top of my actual job, and I just don’t have the time.",
    detail: "Without a dedicated HR person, contracts, absences and HR admin quickly take up valuable time.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
      </>
    ),
  },
  {
    quote: "Are our contracts and policies still up to date? We haven’t updated them in years.",
    detail: "Employment law keeps changing, while handbooks and contracts often stay as they were.",
    icon: (
      <>
        <path d="M14 3H6v18h12V7z" />
        <path d="M14 3v4h4M9 12h6M9 16h6" />
      </>
    ),
  },
  {
    quote: "An issue’s come up with a staff member, and I’m not sure how to handle it.",
    detail: "Grievances, conduct and performance issues can arise without warning, and a flawed process can be costly.",
    icon: (
      <>
        <path d="M12 4L2.5 20h19z" />
        <path d="M12 10v4M12 17v.01" />
      </>
    ),
  },
];

export default function ProblemBubbles() {
  return (
    <div className="mt-10">
      <p className="display fade-up text-2xl font-semibold text-white mb-6">Sound familiar?</p>

      <div className="grid md:grid-cols-3 gap-10 md:gap-5">
        {problems.map((p, i) => (
          <div key={p.quote} className="fade-up flex flex-col items-center" style={{ transitionDelay: `${i * 0.25}s` }}>
            <div className="problem-bubble w-full md:min-h-[176px] flex items-center justify-center px-5 py-6">
              <p className="display text-lg font-semibold leading-snug text-white">&ldquo;{p.quote}&rdquo;</p>
            </div>
            <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center mt-7 mb-3.5" style={{ background: "rgba(245,183,0,0.15)" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {p.icon}
              </svg>
            </div>
            <p className="text-sm leading-relaxed px-2 max-w-sm md:min-h-[69px]" style={{ color: "#BFD0FF" }}>
              {p.detail}
            </p>
          </div>
        ))}
      </div>

      <svg className="problem-wires hidden md:block w-full h-20 mt-2" viewBox="0 0 960 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M153 4C153 55 480 25 480 80" />
        <path d="M480 4V80" />
        <path d="M807 4C807 55 480 25 480 80" />
      </svg>

      <div className="fade-up flex flex-col items-center mt-8 md:mt-0">
        <div className="problem-node w-[84px] h-[84px] rounded-full bg-white flex items-center justify-center mb-6">
          <Shield id="problem-node" className="w-11 h-11" />
        </div>
        <p className="display text-2xl font-semibold text-white mb-5">Hand it over to an outsourced HR expert.</p>
        <Link href="/book-a-call" className="gold-cta px-7 py-3.5 rounded-full font-semibold">
          Find My HR Match
        </Link>
      </div>
    </div>
  );
}
