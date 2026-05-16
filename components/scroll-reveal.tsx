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

    const processed = new Set<Element>();
    const allElements: HTMLElement[] = [];

    function setupElement(element: HTMLElement, index: number) {
      if (processed.has(element)) return;
      processed.add(element);

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
    }

    document.body.classList.add("cia-motion-ready");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );
    elements.forEach((el, i) => setupElement(el, i));
    allElements.push(...elements);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.07,
      },
    );

    elements.forEach((el) => intersectionObserver.observe(el));

    const mutationObserver = new MutationObserver(() => {
      const newElements = Array.from(
        document.querySelectorAll<HTMLElement>(revealSelectors),
      ).filter((el) => !processed.has(el));

      if (newElements.length === 0) return;

      newElements.forEach((el, i) => {
        setupElement(el, allElements.length + i);
        intersectionObserver.observe(el);
      });
      allElements.push(...newElements);
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const onReducedMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.remove("cia-motion-ready");
      }
    };
    prefersReducedMotion.addEventListener("change", onReducedMotionChange);

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
      prefersReducedMotion.removeEventListener(
        "change",
        onReducedMotionChange,
      );
      document.body.classList.remove("cia-motion-ready");
      allElements.forEach((element) => {
        element.classList.remove("cia-reveal", "in-view");
        element.removeAttribute("data-reveal-variant");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
