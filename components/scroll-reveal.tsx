"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".cia-founder",
  ".cia-section__intro",
  ".cia-statement .cia-shell",
  ".cia-two-column > *",
  ".cia-newsletter > *",
  ".cia-card",
  ".cia-panel",
  ".cia-quote-band",
  ".cia-timeline__row",
  ".cia-actions",
  ".cia-component",
  ".cia-square-list li",
  ".cia-callout",
  ".cia-contact-line",
  ".cia-footer__inner",
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );

    if (elements.length === 0) {
      return;
    }

    document.body.classList.add("cia-motion-ready");

    elements.forEach((element, index) => {
      element.classList.add("cia-reveal");

      if (
        element.matches(".cia-two-column > :first-child") ||
        element.matches(".cia-newsletter > :first-child")
      ) {
        element.dataset.revealVariant = "left";
      } else if (
        element.matches(".cia-two-column > :last-child") ||
        element.matches(".cia-newsletter > :last-child")
      ) {
        element.dataset.revealVariant = "right";
      }

      if (
        element.matches(
          ".cia-card, .cia-component, .cia-square-list li, .cia-timeline__row",
        )
      ) {
        element.style.setProperty("--reveal-delay", `${(index % 5) * 110}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.07,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.body.classList.remove("cia-motion-ready");
      elements.forEach((element) => {
        element.classList.remove("cia-reveal", "in-view");
        element.removeAttribute("data-reveal-variant");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
