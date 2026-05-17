"use client";

import { useEffect, useRef, useState } from "react";

export type ContactSubject =
  | "Kickstart Inquiry"
  | "Newsletter — Request an Invitation"
  | "Send Jerry Wagner a Note";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState<ContactSubject>("Send Jerry Wagner a Note");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ContactSubject>).detail;
      setSubject(detail);
      setStatus("idle");
      setStatusMessage("");
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

  const close = () => {
    setOpen(false);
    setStatus("idle");
    setStatusMessage("");
  };

  const submitContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          topic: subject,
          name: formData.get("name"),
          email: formData.get("email"),
          organization: formData.get("organization"),
          position: formData.get("position"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Unable to send your message.");
      }

      setStatus("success");
      setStatusMessage("Message Sent");
      form.reset();
    } catch {
      setStatus("error");
      setStatusMessage(
        "We could not send your message right now. Please email jerry.wagner@culturequestsoftware.net directly.",
      );
    }
  };

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
          action="/send-mail.php"
          method="post"
          onSubmit={submitContact}
        >
          <input type="hidden" name="topic" value={subject} />
          <div className="cia-modal__honeypot" aria-hidden="true">
            <label htmlFor="m-website">Website</label>
            <input
              id="m-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              type="text"
            />
          </div>

          <div className="cia-modal__row">
            <div className="cia-modal__field">
              <label htmlFor="m-name">Name</label>
              <input id="m-name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="cia-modal__field">
              <label htmlFor="m-email">Email</label>
              <input id="m-email" name="email" type="email" placeholder="you@company.com" required />
            </div>
          </div>

          <div className="cia-modal__field">
            <label htmlFor="m-organization">Organization</label>
            <input
              id="m-organization"
              name="organization"
              type="text"
              placeholder="Your organization"
            />
          </div>

          <div className="cia-modal__row">
            <div className="cia-modal__field">
              <label htmlFor="m-position">Position</label>
              <input
                id="m-position"
                name="position"
                type="text"
                placeholder="Your role"
              />
            </div>
          </div>

          <div className="cia-modal__field">
            <label htmlFor="m-message">Message</label>
            <textarea
              id="m-message"
              name="message"
              rows={4}
              placeholder="What's on your mind?"
              required
            />
          </div>

          {statusMessage ? (
            <p
              className={`cia-modal__status cia-modal__status--${status}`}
              role={status === "error" ? "alert" : "status"}
            >
              {statusMessage}
            </p>
          ) : null}

          <button
            type="submit"
            className="cia-modal__submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </dialog>
  );
}
