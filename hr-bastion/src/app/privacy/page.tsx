import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Shield from "@/components/Shield";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Privacy Policy. HR Bastion",
  description: "How HR Bastion collects, uses and protects your personal information.",
};

const CONTACT_EMAIL = "callum.sackett@fiscalfix.co.uk";

function Email() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="underline" style={{ color: "var(--cobalt)" }}>
      {CONTACT_EMAIL}
    </a>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-10 scroll-mt-24">
      <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "var(--navy)" }}>
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-5 space-y-2">{children}</ul>;
}

function Term({ children }: { children: ReactNode }) {
  return (
    <strong className="font-semibold" style={{ color: "var(--navy)" }}>
      {children}
    </strong>
  );
}

export default function PrivacyPage() {
  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Shield id="nav-privacy" className="w-9 h-9" />
            <span className="font-semibold text-lg" style={{ color: "var(--navy)" }}>
              HR Bastion
            </span>
          </Link>
          <Link href="/" className="text-sm font-semibold hover:opacity-70" style={{ color: "var(--navy)" }}>
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="py-16" style={{ background: "#FFFFFF" }}>
        <article className="max-w-3xl mx-auto px-6 text-base leading-relaxed" style={{ color: "#475569" }}>
          <h1 className="text-3xl md:text-5xl font-bold mb-3" style={{ color: "var(--navy)" }}>
            Privacy Policy
          </h1>
          <p className="text-sm mb-6" style={{ color: "#64748B" }}>
            Last updated: 26 November 2026
          </p>
          <p>
            This policy explains what personal information we collect through HR Bastion, why we collect it, who we
            share it with and what rights you have.
          </p>

          <Section title="1. Who we are">
            <p>
              HR Bastion is run by <Term>Fiscal Fix Limited</Term>, which decides how your personal information is used
              (the &ldquo;data controller&rdquo;). In this policy, &ldquo;we&rdquo; and &ldquo;us&rdquo; mean Fiscal
              Fix Limited.
            </p>
            <List>
              <li>Registered in England and Wales, company number 17312209</li>
              <li>Registered office: 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</li>
              <li>Information Commissioner&apos;s Office (ICO) registration reference: ZC186831</li>
              <li>
                Privacy contact: <Email />
              </li>
            </List>
          </Section>

          <Section title="2. Information we collect">
            <List>
              <li>
                <Term>Details you give us in our form:</Term> your name, company name, work email, phone number,
                preferred time to call and anything you write about the help you need.
              </li>
              <li>
                <Term>Details from our conversations:</Term> information you share by phone, email or message, such as
                your business sector, number of employees, budget and HR needs, and whether you agree to be introduced
                to an HR provider.
              </li>
              <li>
                <Term>Technical information:</Term> information your browser sends when you use the website, such as
                your IP address, browser and device type, and the time of your visit.
              </li>
              <li>
                <Term>Visitor identification information:</Term> only if you agree, as described in section 6.
              </li>
            </List>
            <p>
              Please don&apos;t include names, health information or other sensitive details about your employees or
              anyone else in our form. We don&apos;t need them to arrange your call.
            </p>
            <p>
              You don&apos;t have to give us your details. However, without your name, company name, email and phone
              number, you can&apos;t send a call request through our form. The other form fields are optional.
            </p>
          </Section>

          <Section title="3. How we use your information, and our legal reasons">
            <p>UK data protection law requires us to have a legal reason (a &ldquo;lawful basis&rdquo;) for each use.</p>
            <List>
              <li>
                <Term>To respond to your request, arrange and hold your call, understand your needs and choose a
                suitable HR provider.</Term>{" "}
                Our basis is legitimate interests: dealing with the enquiry you made and running our matching service.
              </li>
              <li>
                <Term>To pass your details to an HR provider and arrange an introduction.</Term> Our basis is your
                consent.
              </li>
              <li>
                <Term>To keep records of enquiries, introductions and your choices, and to deal with questions,
                complaints or disputes.</Term>{" "}
                Our basis is legitimate interests: running our business properly and being able to show what was agreed.
              </li>
              <li>
                <Term>To run and protect our website.</Term> Our basis is legitimate interests: keeping the website
                working, secure and displayed correctly.
              </li>
              <li>
                <Term>To identify website visitors.</Term> Our basis is your consent.
              </li>
              <li>
                <Term>To meet our legal duties,</Term> including responding to data protection requests. Our basis is
                legal obligation.
              </li>
            </List>
            <p>
              If we want to send you marketing, we will only do so where the law allows, and you can opt out at any time.
            </p>
          </Section>

          <Section title="4. Introductions to HR providers">
            <p>
              We will only pass your details to an outsourced HR provider if you expressly agree to be scheduled in with
              them. You can agree during a call, by email or by message. We will tell you who the provider is before you
              agree.
            </p>
            <p>
              We will share your details with <Term>only the one provider we choose for you and you agree to</Term>. We
              will share your contact and company details, and the information about your needs that is relevant to the
              introduction. The provider is responsible for how it then uses your information, and should give you its
              own privacy information.
            </p>
            <p>
              You can withdraw your agreement at any time by emailing <Email />. This won&apos;t affect anything already
              done before you withdrew it. If your details have already been shared, you can also contact the provider
              directly.
            </p>
            <p>
              We may use a scoring tool to help us compare providers. We don&apos;t make decisions with legal or
              similarly significant effects on you by automated means alone.
            </p>
          </Section>

          <Section title="5. Service providers that handle information for us">
            <p>
              Apart from the HR provider described above, we don&apos;t share your enquiry with other HR providers, and
              we don&apos;t sell your personal information. We do use companies that provide services to us, which may
              handle your information in order to provide them:
            </p>
            <List>
              <li>
                <Term>Supabase</Term>, which stores details sent through our form. Our database is hosted in London.
              </li>
              <li>
                <Term>Vercel</Term>, which hosts our website and may process technical information.
              </li>
              <li>
                <Term>Google Fonts</Term>. Your browser requests the website&apos;s fonts from Google, which means
                Google receives your IP address and other technical information.
              </li>
              <li>Providers of the email, phone and messaging services we use to contact you.</li>
              <li>
                <Term>Leadfeeder</Term>, our visitor identification tool, only if you agree. See section 6.
              </li>
            </List>
            <p>
              We may also disclose information if the law requires it, or to professional advisers where needed to
              protect our legal rights.
            </p>
          </Section>

          <Section id="cookies" title="6. Visitor identification and cookies">
            <p>
              We use <Term>Leadfeeder</Term>, a service from Dealfront Group GmbH, to find out which businesses visit our
              website. <Term>It only runs if you click &ldquo;Accept&rdquo; on our cookie banner.</Term>{" "}If you reject
              or ignore the banner, we don&apos;t load it, and you can still use the website and our form. Leadfeeder
              handles this information for us.
            </p>
            <p>
              <Term>What it collects:</Term> your IP address, a visitor ID held in a cookie, the pages you visit, when
              you visit and for how long, and activity such as clicks on links to other sites, file downloads, video
              plays and form submissions. It can also record how you reached our website, such as from a search or an
              advertising campaign.
            </p>
            <p>
              <Term>What it tells us:</Term>{" "}it compares your IP address with databases linking IP addresses to
              businesses, and adds business details such as company name and industry. It is designed to identify
              companies rather than the individual who visited. It may also offer business contact details for people
              connected with a company, drawn from public sources or data providers. This doesn&apos;t show that those
              people visited our website. If we contact someone using details obtained this way, we will tell them
              where we got them and give them this policy.
            </p>
            <p>
              Leadfeeder states that it hosts and processes its data on Amazon Web Services in Ireland. It uses a
              worldwide delivery network to send its script to your browser.
            </p>
            <p>
              <Term>Cookies and browser storage used by Leadfeeder, only after you accept:</Term>
            </p>
            <List>
              <li><Term>_lfa</Term> (cookie): a visitor ID that recognises return visits. Lasts 1 year.</li>
              <li><Term>_lfa_expiry</Term> (browser storage): relates to the expiry of the visitor ID. Lasts 1 year.</li>
              <li><Term>_lfa_consent</Term> (cookie): stores consent status, where used. Lasts 1 year and may be renewed.</li>
              <li><Term>_lfa_test_cookie_stored</Term> (cookie): tests whether cookies work. Expires immediately.</li>
            </List>
            <p>
              <Term>Remembering your choice:</Term>{" "}we save your answer in your browser (as
              &ldquo;hrb_cookie_choice&rdquo;) so we don&apos;t ask on every page. We ask again after about six months.
              We also keep a record of your choice in our Supabase database: a random reference, what you chose, the
              date and time, and the version of the banner you saw. We don&apos;t put your name or IP address in this
              record. We keep it to be able to show what was agreed, which is part of our legal duties.
            </p>
            <p>
              <Term>Changing your mind:</Term>{" "}select &ldquo;Cookie settings&rdquo; at the bottom of any page and choose
              &ldquo;Reject&rdquo;. The page will reload without Leadfeeder, and we will remove its cookies and browser
              storage that our website can access. This doesn&apos;t affect what happened before you withdrew consent.
              To ask us to delete information already collected, email <Email />.
            </p>
          </Section>

          <Section title="7. Transfers outside the UK">
            <p>
              Some of our service providers are based outside the UK, including in the United States, or may process
              information there. This can apply even where our database is hosted in the UK. Where information is
              transferred outside the UK, we rely on safeguards allowed by UK data protection law, such as UK adequacy
              regulations or approved contract terms. You can email us for more information about these safeguards.
            </p>
          </Section>

          <Section title="8. How long we keep your information">
            <List>
              <li>
                <Term>Enquiries that don&apos;t lead to an introduction:</Term> up to 12 months after our last contact
                with you.
              </li>
              <li>
                <Term>Enquiries where we introduce you to a provider:</Term> up to 36 months after our last contact with
                you, so we have a record of the introduction and your agreement to it.
              </li>
              <li>
                <Term>Visitor identification information:</Term> up to 12 months after the visit.
              </li>
              <li>
                <Term>Records of cookie choices:</Term> up to 36 months after the choice was made.
              </li>
            </List>
            <p>
              After that, we delete or anonymise the information. We may keep particular information for longer if the
              law requires it or we need it for an ongoing complaint or legal claim. If you ask us to stop contacting
              you for marketing, we may keep just enough information to respect your request.
            </p>
          </Section>

          <Section title="9. Your rights">
            <p>Depending on the circumstances, you have the right to:</p>
            <List>
              <li>ask for a copy of your personal information</li>
              <li>ask us to correct information that is wrong or incomplete</li>
              <li>ask us to delete your information</li>
              <li>ask us to limit how we use it</li>
              <li>receive certain information in a format you can transfer elsewhere</li>
              <li>withdraw your consent at any time</li>
            </List>
            <p>
              <Term>You also have the right to object to our use of your information where we rely on legitimate
              interests. You can object to direct marketing at any time, and we will stop.</Term>
            </p>
            <p>
              To use any of these rights, email <Email />. We will normally respond within one month. We may need to
              confirm your identity first, and the law allows more time in some cases.
            </p>
          </Section>

          <Section title="10. Complaints">
            <p>
              If you&apos;re unhappy with how we have used your information, email <Email />{" "}
              with{" "}
              &ldquo;Data protection complaint&rdquo; in the subject line. We will acknowledge your complaint within 30
              days, look into it without undue delay and tell you the outcome.
            </p>
            <p>
              You can also complain to the Information Commissioner&apos;s Office. Visit{" "}
              <a href="https://ico.org.uk/make-a-complaint/" className="underline" style={{ color: "var(--cobalt)" }}>
                ico.org.uk/make-a-complaint
              </a>{" "}
              or call 0303 123 1113.
            </p>
          </Section>

          <Section title="11. Changes to this policy">
            <p>
              We may update this policy when our services or the law change. The date at the top shows when it was last
              updated.
            </p>
          </Section>
        </article>
      </main>

      {/* FOOTER */}
      <footer className="py-10" style={{ background: "var(--navy)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield id="footer-privacy" className="w-7 h-7" />
            <span className="font-semibold text-white text-sm">HR Bastion</span>
          </div>
          <div className="flex items-center gap-6 text-xs" style={{ color: "#64748B" }}>
            <CookieSettingsButton />
            <span>© 2026 HR Bastion. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
