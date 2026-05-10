"use client";

import { useEffect, useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const navLinks = [
  { href: "#kickstart", label: "Kickstart" },
  { href: "#what", label: "What Is a COS" },
  { href: "#arc", label: "Wellbeing Arc" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#founder", label: "Founder" },
  {
    href: "https://www.culturequestsoftware.net",
    label: "Software",
    external: true,
  },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1023) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="cia-nav" aria-label="Primary">
      <div className="cia-shell cia-nav__inner">
        <a className="cia-nav__brand" href="#top" onClick={close}>
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

        <button
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="cia-nav__hamburger"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`cia-nav__mobile-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        {navLinks.map((link) => (
          <a
            className="cia-nav__mobile-link"
            href={link.href}
            key={link.href}
            onClick={close}
            rel={link.external ? "noreferrer" : undefined}
            target={link.external ? "_blank" : undefined}
          >
            {link.label}
          </a>
        ))}
        <a
          className="cia-nav__mobile-link cia-nav__mobile-link--cta"
          href="#action"
          onClick={close}
        >
          Get Started
        </a>
      </div>

      {open && (
        <div
          aria-hidden="true"
          className="cia-nav__backdrop"
          onClick={close}
        />
      )}
    </nav>
  );
}
