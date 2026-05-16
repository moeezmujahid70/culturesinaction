"use client";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import type { ContactSubject } from "./contact-modal";

interface ContactButtonProps {
  subject: ContactSubject;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl" | "xxl" | "icon";
  children: React.ReactNode;
}

export function ContactButton({ subject, className, size, children }: ContactButtonProps) {
  const open = () => {
    window.dispatchEvent(new CustomEvent("openContactModal", { detail: subject }));
  };
  return (
    <LiquidButton type="button" size={size} className={className} onClick={open}>
      {children}
    </LiquidButton>
  );
}
