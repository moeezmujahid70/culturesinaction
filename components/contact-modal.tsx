"use client";

import { useEffect, useRef, useState } from "react";

export type ContactSubject =
  | "Kickstart Inquiry"
  | "Newsletter — Request an Invitation"
  | "Send Jerry Wagner a Note";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState<ContactSubject>("Send Jerry Wagner a Note");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ContactSubject>).detail;
      setSubject(detail);
      setOpen(true);
    };
    window.addEventListener("openContactModal", handler);
    return () => window.removeEventListener("openContactModal", handler);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <dialog
      ref={dialogRef}
      className="cia-modal"
      onClick={(e) => { if (e.target === dialogRef.current) close(); }}
      onClose={close}
    >
      <div className="cia-modal__panel">
        <button className="cia-modal__close" onClick={close} aria-label="Close">
          ✕
        </button>

        <p className="cia-eyebrow">Get in Touch</p>
        <h2 className="cia-modal__title">{subject}</h2>

        <form
          className="cia-modal__form"
          action="mailto:jerry.wagner@culturesinaction.net"
          method="post"
          encType="text/plain"
        >
          <input type="hidden" name="Subject" value={subject} />

          <div className="cia-modal__row">
            <div className="cia-modal__field">
              <label htmlFor="m-name">Name</label>
              <input id="m-name" name="Name" type="text" placeholder="Your name" required />
            </div>
            <div className="cia-modal__field">
              <label htmlFor="m-email">Email</label>
              <input id="m-email" name="Email" type="email" placeholder="you@company.com" required />
            </div>
          </div>

          <div className="cia-modal__field">
            <label htmlFor="m-company">Company</label>
            <input id="m-company" name="Company" type="text" placeholder="Your organization" />
          </div>

          <div className="cia-modal__row">
            <div className="cia-modal__field">
              <label htmlFor="m-city">City</label>
              <input id="m-city" name="City" type="text" placeholder="City" />
            </div>
            <div className="cia-modal__field">
              <label htmlFor="m-state">State</label>
              <input id="m-state" name="State" type="text" placeholder="State" />
            </div>
          </div>

          <div className="cia-modal__field">
            <label htmlFor="m-message">Message</label>
            <textarea id="m-message" name="Message" rows={4} placeholder="What's on your mind?" />
          </div>

          <button type="submit" className="cia-modal__submit">
            Send Message
          </button>
        </form>
      </div>
    </dialog>
  );
}
