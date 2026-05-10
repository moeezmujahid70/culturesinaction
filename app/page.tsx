import { LiquidButton } from "@/components/ui/liquid-glass-button";

const navLinks = [
  { href: "#kickstart", label: "Kickstart" },
  { href: "#what", label: "What Is a COS" },
  { href: "#arc", label: "Wellbeing Arc" },
  { href: "#founder", label: "Founder" },
  {
    href: "https://www.culturequestsoftware.net",
    label: "Software",
    external: true,
  },
];

const kickstartCards = [
  {
    number: "01",
    title: "Build It Together",
    body: "The team designs its own COS, including decision principles, behavioral expectations, and accountability structures, through a guided, facilitated process that surfaces real consensus.",
  },
  {
    number: "02",
    title: "Share It Openly",
    body: "The finished COS lives in Culture Quest Software, visible to every member, available to leadership, and ready to serve as a shared reference point.",
  },
  {
    number: "03",
    title: "Improve It Continuously",
    body: "The COS is not a document filed and forgotten. The Feedback & Improvement Loop built into every Kickstart keeps the system alive, updated, and owned by the team.",
  },
];

const teamFit = [
  "Any size, from a two-person project team to a large division",
  "Any function, including operations, sales, clinical, engineering, and administrative",
  "Any level, from front-line teams to middle management and executive leadership",
  "Any starting point, regardless of prior culture work history",
];

const cosQuestions = [
  "Who decides, and how are tradeoffs resolved?",
  "What behavior is expected under pressure?",
  "What is actually measured and held accountable?",
  "How does the team learn and improve over time?",
];

const cosComponents = [
  {
    number: "01",
    title: "Decision Principles",
    body: "Clarifying who decides and the logic used for resolutions.",
  },
  {
    number: "02",
    title: "Behavioral Principles",
    body: "Setting concrete expectations for how people act.",
  },
  {
    number: "03",
    title: "Actions with Owners",
    body: "Defined work with clear individual accountability.",
  },
  {
    number: "04",
    title: "Measurements",
    body: "Identifying what actually gets tracked and why.",
  },
  {
    number: "05",
    title: "Feedback & Improvement Loop",
    body: "How the system learns, adapts, and grows stronger.",
  },
];

const timeline = [
  {
    years: "2010",
    label: "Gallup Foundation",
    title: "The Wellbeing Research",
    body: "Landmark research identified five interconnected domains: Career, Social, Financial, Physical, and Community. Organizations began to see wellbeing as a design problem, not just an HR benefit.",
  },
  {
    years: "2013–2019",
    label: "Engagement as the Hinge",
    title: "Culture as the Container",
    body: "Engagement and wellbeing were deeply entangled. You could not optimize the person without attending to the culture. The question shifted to \"what experience are we designing?\"",
  },
  {
    years: "2020–2022",
    label: "The Pandemic Rupture",
    title: "When Culture Gets Tested",
    body: "COVID-19 exposed underdeveloped wellbeing models. The Great Resignation made cultural negligence visible. Culture either holds under pressure or it doesn't.",
    callout: {
      eyebrow: "The Cost of Negligence",
      body: "Organizations with weak cultures saw voluntary turnover spike 20–40% during 2021–2022.",
    },
  },
  {
    years: "2024–2026",
    label: "The Structural Answer",
    title: "The Culture Operating System",
    body: "Global employee engagement has stagnated at 23%. The diagnosis is clear: programs were layered on top of broken cultures. The COS is the structural, behavioral infrastructure required for the modern workplace.",
  },
];

export default function Home() {
  return (
    <main className="cia-page">
      <nav className="cia-nav" aria-label="Primary">
        <div className="cia-shell cia-nav__inner">
          <a className="cia-nav__brand" href="#top">
            Cultures in Action
          </a>
          <div className="cia-nav__links">
            {navLinks.map((link) => (
              <LiquidButton
                asChild
                className="cia-liquid-button cia-liquid-button--nav"
                key={link.href}
                size="sm"
              >
                <a
                  href={link.href}
                  rel={link.external ? "noreferrer" : undefined}
                  target={link.external ? "_blank" : undefined}
                >
                  {link.label}
                </a>
              </LiquidButton>
            ))}
            <LiquidButton
              asChild
              className="cia-liquid-button cia-liquid-button--nav cia-liquid-button--nav-strong"
              size="sm"
            >
              <a href="#action">Get Started</a>
            </LiquidButton>
          </div>
        </div>
      </nav>

      <header className="cia-hero" id="top">
        <div className="cia-shell cia-hero__grid">
          <div className="cia-hero__content">
            <p className="cia-eyebrow cia-eyebrow--light">Cultures in Action</p>
            <h1>Engineering Cultures That Work</h1>
            <p className="cia-hero__lede">
              Most organizations have values. Few have the systems to make
              those values a workplace reality.
            </p>
            <LiquidButton
              asChild
              className="cia-liquid-button cia-liquid-button--hero"
              size="xl"
            >
              <a href="#kickstart">Explore the Kickstart</a>
            </LiquidButton>
          </div>
          <div className="cia-hero__media" aria-hidden="true" />
        </div>
      </header>

      <section className="cia-section cia-section--founder" id="founder">
        <div className="cia-shell">
          <div className="cia-founder">
            <div className="cia-founder__bar" />
            <div>
              <blockquote>
                &ldquo;For decades, my work has been driven by a single
                conviction:
                it should be possible, even simple, to design a workplace
                culture that employees actually want to be part of.&rdquo;
              </blockquote>
              <p>
                I have approached this challenge from multiple vantage points,
                as a university department head, a corporate president, an
                entrepreneur, and a Senior Scientist at Gallup. Each role
                reinforced the same lesson: culture is not a vague concept. It
                is a system to be operated. The goal of this work is to make
                that system visible and actionable.
              </p>
              <p className="cia-founder__name">Jerry</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cia-section cia-section--tint">
        <div className="cia-shell cia-two-column">
          <div className="cia-stack">
            <p className="cia-eyebrow">Our Mission</p>
            <h2>A Culture Worth Belonging To</h2>
            <p className="cia-body-lg">
              At Cultures in Action, we believe that culture is not an
              invisible or unmanageable force. Instead, it is a system
              infrastructure to be designed, operated, and improved.
            </p>
            <p>
              Designing that infrastructure should be straightforward. By
              focusing on interlocking components of decision and behavioral
              principles, we replace soft intentions with a working set of
              rules that any team leader can implement.
            </p>
            <p>
              Our goal: every team should have its own Culture Operating System.
              Not values written in a planning retreat and forgotten by Friday.
              An explicit, owned blueprint for how the team actually intends to
              function: how decisions are made, how people are expected to
              behave, and how the team gets better over time.
            </p>
          </div>
          <aside className="cia-card cia-card--outline">
            <h3>The Operational Difference</h3>
            <ul className="cia-square-list">
              <li>Move from intent to implementation</li>
              <li>Empower team leaders with actionable rules</li>
              <li>Create a shared blueprint for daily function</li>
              <li>Foster long-term cultural resilience</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="cia-section" id="kickstart">
        <div className="cia-shell">
          <div className="cia-section__intro">
            <p className="cia-eyebrow">The Culture Quest Kickstart</p>
            <h2>Where Every Team Begins</h2>
            <p className="cia-body-lg cia-intro-copy">
              Most culture initiatives stall before they start because they
              belong to HR, not to the team. The Kickstart changes that. It is
              a structured, facilitated experience that puts every team in the
              designer&apos;s seat.
            </p>
          </div>

          <div className="cia-grid cia-grid--three">
            {kickstartCards.map((card) => (
              <article className="cia-card cia-card--numbered" key={card.number}>
                <p className="cia-card__number">{card.number}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <div className="cia-panel">
            <p className="cia-panel__eyebrow">
              Built for Every Team, No Exceptions
            </p>
            <div className="cia-grid cia-grid--four">
              {teamFit.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="cia-quote-band">
            <span />
            <p>
              &ldquo;The Kickstart is invigorating precisely because it is
              theirs. The team does not receive a culture. It builds
              one.&rdquo;
            </p>
            <span />
          </div>
        </div>
      </section>

      <section className="cia-section cia-section--tint" id="what">
        <div className="cia-shell cia-two-column">
          <div className="cia-stack">
            <p className="cia-eyebrow">The Framework</p>
            <h2>What a Culture Operating System Is</h2>
            <p className="cia-body-lg">
              A Culture Operating System (COS) is the explicit, designed set of
              rules and mechanisms that determine how a team operates day to
              day.
            </p>
            <div className="cia-panel">
              <p className="cia-panel__eyebrow">The COS Answers These Questions</p>
              <ul className="cia-square-list">
                {cosQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cia-stack">
            <p>
              A COS is not a mission statement or a list of values on a wall.
              It is a working set of interlocking components that together
              determine what actually happens when no one is watching.
            </p>
            <div className="cia-card cia-card--dark">
              <p className="cia-card__eyebrow">The Five Components of a COS</p>
              <div className="cia-component-list">
                {cosComponents.map((component) => (
                  <div className="cia-component" key={component.number}>
                    <p className="cia-component__number">{component.number}</p>
                    <div>
                      <h3>{component.title}</h3>
                      <p>{component.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cia-statement">
        <div className="cia-shell">
          <p>
            A culture that works is not a happy accident. It is a designed
            system.
          </p>
        </div>
      </div>

      <section className="cia-section cia-section--blue" id="arc">
        <div className="cia-shell">
          <div className="cia-section__intro cia-section__intro--narrow">
            <p className="cia-eyebrow">Context & Research</p>
            <h2>The Organizational Wellbeing Arc</h2>
            <p className="cia-body-lg">
              The path to the Culture Operating System runs through two decades
              of research, and the slow, expensive recognition that programs
              alone cannot fix a broken culture.
            </p>
          </div>

          <div className="cia-timeline">
            {timeline.map((entry) => (
              <article className="cia-timeline__row" key={entry.years}>
                <div className="cia-timeline__meta">
                  <p className="cia-timeline__year">{entry.years}</p>
                  <p className="cia-timeline__label">{entry.label}</p>
                </div>
                <div className="cia-timeline__content">
                  <h3>{entry.title}</h3>
                  <p>{entry.body}</p>
                  {entry.callout ? (
                    <div className="cia-callout">
                      <p className="cia-eyebrow">{entry.callout.eyebrow}</p>
                      <p>{entry.callout.body}</p>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cia-section cia-section--dark cia-section--center" id="action">
        <div className="cia-shell">
          <div className="cia-section__intro cia-section__intro--center">
            <p className="cia-eyebrow">Get Started</p>
            <h2>Ready to Build a Culture That Works?</h2>
            <p className="cia-body-lg cia-intro-copy">
              Whether you want to explore the software or talk through a
              Kickstart for your team, the next step is straightforward.
            </p>
          </div>
          <div className="cia-actions">
            <LiquidButton
              asChild
              className="cia-liquid-button cia-liquid-button--dark"
              size="xl"
            >
              <a
                href="https://www.culturequestsoftware.net"
                target="_blank"
                rel="noreferrer"
              >
                Explore Culture Quest Software
              </a>
            </LiquidButton>
            <LiquidButton
              asChild
              className="cia-liquid-button cia-liquid-button--dark cia-liquid-button--dark-secondary"
              size="xl"
            >
              <a href="mailto:jerry.wagner@culturesinaction.net">
                Contact Jerry Wagner
              </a>
            </LiquidButton>
          </div>
          <p className="cia-contact-line">
            JERRY.WAGNER@CULTURESINACTION.NET · CULTURESINACTION.NET
          </p>
        </div>
      </section>

      <footer className="cia-footer">
        <div className="cia-shell cia-footer__inner">
          <div>
            <p className="cia-footer__brand">Cultures in Action</p>
            <p className="cia-footer__copyright">
              © 2024 Cultures in Action. Surgical Precision Consulting.
            </p>
          </div>
          <div className="cia-footer__links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="mailto:jerry.wagner@culturesinaction.net">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
