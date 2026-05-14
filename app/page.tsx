import Image from "next/image";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Nav } from "@/components/nav";

const newsletterSpecs = [
  "Free, one-hour Zoom session.",
  "Capped at 10 participants per session.",
  "Participants drawn from different roles, industries, and experience levels.",
  "No keynotes, slide decks, vendor pitches, or recordings.",
  "Facilitated — not hosted — with a single opening question.",
  "Low-commitment participation, opt-out at any time.",
];

const kickstartSteps = [
  {
    number: "1.",
    body: "Choose your team and team leader.",
  },
  {
    number: "2.",
    body: "I email the team leader complete step by step details for managing the meeting(s).",
  },
  {
    number: "3.",
    body: "The team leader and I have a zoom meeting to go through the steps.",
  },
  {
    number: "4.",
    body: "The team meets and goes through the step-by-step process. I am available on Zoom for help as needed.",
  },
  {
    number: "5.",
    body: "One team member records the data decided upon by the team.",
  },
  {
    number: "6.",
    body: "What they collect is sent to me.",
  },
  {
    number: "7.",
    body: "I send the team leader the Culture Quest link to provide to all team members so they have access to the complete, online Culture Operating System they built.",
  },
  {
    number: "8.",
    body: "The team leader updates the COS contents for continuous improvements.",
  },
];

const teamFit = [
  "Any size, from a two-person project team to a large division.",
  "Any function, including operations, sales, clinical, engineering, and administrative.",
  "Any level, from front-line teams to middle management and executive leadership.",
  "Any starting point, regardless of prior culture work history.",
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
    featured: true,
  },
];

export default function Home() {
  return (
    <main className="cia-page">
      <Nav />

      <header className="cia-hero" id="top">
        <div className="cia-shell cia-hero__grid">
          <div className="cia-hero__content">
            <p className="cia-eyebrow cia-eyebrow--light">Cultures in Action</p>
            <h1>Culture Operating Systems</h1>
            <p className="cia-hero__lede">
              We help engineer cultures that work.
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

      <section className="cia-section cia-section--tint" id="mission">
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
          <figure
            aria-label="Team members collaborating around a table"
            className="cia-team-photo"
            role="img"
          />
        </div>
      </section>

      <section className="cia-section cia-section--tint" id="framework">
        <div className="cia-shell cia-framework">
          <div className="cia-section__intro cia-section__intro--narrow">
            <p className="cia-eyebrow">The Framework</p>
            <h2>What a Culture Operating System Is</h2>
            <p className="cia-body-lg">
              A Culture Operating System (COS) is the explicit, designed set of
              rules and mechanisms that determine how a team operates day to
              day.
            </p>
          </div>

          <figure className="cia-framework__figure">
            <Image
              alt="Culture Operating System framework diagram"
              height={1500}
              src="/framework.png"
              sizes="(max-width: 768px) 100vw, 1120px"
              width={2700}
            />
          </figure>
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

      <section className="cia-section" id="kickstart">
        <div className="cia-shell">
          <div className="cia-kickstart-program">
            <div className="cia-kickstart-main">
              <p className="cia-eyebrow">Kickstart Program</p>
              <h2>
                Launch Your Team&apos;s{" "}
                <span>Culture Operating System (COS)</span> in Just Three
                Hours
              </h2>
              <p className="cia-body-lg">
                The fastest, most affordable way to give your team the
                foundation they need — an operational COS, done in 3 hours for
                one meeting or 1.5 hours with two meeting times.
              </p>

              <div className="cia-kickstart-steps">
                <h3>Here&apos;s how it works</h3>
                <ol>
                  {kickstartSteps.map((step) => (
                    <li key={step.number}>
                      <span>{step.number}</span>
                      <p>{step.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="cia-kickstart-side">
              <div className="cia-kickstart-investment">
                <p>The Fee</p>
                <strong>$199</strong>
                <span>Culture Quest software included</span>
              </div>

              <div className="cia-panel cia-panel--kickstart">
                <p className="cia-panel__eyebrow">
                  For Every Team, No Exceptions
                </p>
                <div className="cia-kickstart-fit-list">
                  {teamFit.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <p className="cia-kickstart-tagline">
                <strong>One team. Three hours.</strong>{" "}
                <em>A culture that runs on purpose.</em>
              </p>
            </aside>
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
              <article
                className={`cia-timeline__row${
                  entry.featured ? " cia-timeline__row--featured" : ""
                }`}
                key={entry.years}
              >
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

      <section className="cia-section" id="newsletter">
        <div className="cia-shell">
          <div className="cia-newsletter">
            <div className="cia-stack">
              <p className="cia-eyebrow">Zoom: Culture Breaks</p>
              <h2>Real Talk With People Who Get It</h2>
              <p className="cia-body-lg">
                Our newsletter, <em>Zoom: Culture Breaks</em>, is a free,
                informal one-hour Zoom conversation with culture management
                professionals. These small-group sessions are designed to fill
                a gap that most conferences and webinars can&apos;t — genuine,
                candid peer conversation.
              </p>
              <p>
                A facilitator opens with a single question and lets themes
                emerge naturally. There are no keynotes, no slide decks, no
                vendor pitches, and no recordings. Most professional forums are
                too formal or too polished for real talk. This is a space where
                the goal isn&apos;t to impress anyone — it&apos;s to think out
                loud with people who get it.
              </p>

              <blockquote className="cia-newsletter__opening-q">
                <p className="cia-newsletter__opening-title">
                  Opening question, every session.
                </p>
                &ldquo;What&apos;s something you&apos;re seeing right now that
                surprised you, that you just learned, or that&apos;s
                challenging you?&rdquo;
              </blockquote>

              <LiquidButton
                asChild
                className="cia-liquid-button cia-liquid-button--nav cia-liquid-button--newsletter-cta"
              >
                <a href="mailto:jerry.wagner@culturesinaction.net?subject=Zoom%3A%20Culture%20Breaks%20%E2%80%94%20Request%20an%20Invitation">
                  Request an Invitation
                </a>
              </LiquidButton>
            </div>

            <aside className="cia-newsletter__specs">
              <p className="cia-card__eyebrow">Format &amp; Format Rules</p>
              <ul className="cia-newsletter__specs-list">
                {newsletterSpecs.map((spec) => (
                  <li className="cia-newsletter__spec-item" key={spec}>
                    {spec}
                  </li>
                ))}
              </ul>
            </aside>
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
              © 2026 Cultures in Action. Surgical Precision Consulting.
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
