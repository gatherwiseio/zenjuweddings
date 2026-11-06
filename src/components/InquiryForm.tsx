"use client";

import { useId, useState } from "react";
import { buttonClass } from "@/components/Button";
import { contactPage } from "@/content/contact";
import { contact } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

// The inquiry form (Contact page and the pop-up): name, email, message, send. Posts to
// /api/inquiry; if sending isn't possible it says so and offers the email address instead.
export function InquiryForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-3 py-6">
        <p className="text-2xl leading-heading font-light">Thank you</p>
        <p className="text-body leading-prose text-pretty text-ink/75">{contactPage.success}</p>
      </div>
    );
  }

  const field =
    "w-full border-b border-ink/25 bg-transparent py-3 text-body text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none";
  const labelClass = "label text-xs font-medium text-ink/70";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <label htmlFor={`${id}-name`} className={labelClass}>Name</label>
        <input id={`${id}-name`} name="name" required maxLength={120} autoComplete="name" className={field} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={`${id}-email`} className={labelClass}>Email</label>
        <input id={`${id}-email`} name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={`${id}-message`} className={labelClass}>Message</label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          maxLength={5000}
          rows={3}
          placeholder="Your date, venue or island, guest count, and anything you’re dreaming of."
          className={`${field} resize-y`}
        />
      </div>
      {/* Honeypot for bots: hidden from people and screen readers. */}
      <div aria-hidden="true" className="hidden">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {status === "error" && (
        <p role="alert" className="text-meta leading-prose text-pretty text-ink/80">
          Sorry, your message couldn’t be sent just now. Please email us at{" "}
          <a href={`mailto:${contact.email}`} className="link-draw font-medium text-gold-deep">{contact.email}</a>.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`${buttonClass("primary")} w-full disabled:cursor-default disabled:opacity-60 sm:w-fit sm:self-end`}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
