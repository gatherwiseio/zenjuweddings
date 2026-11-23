"use client";

import { useId, useState } from "react";
import { buttonClass } from "@/components/Button";
import { contactPage } from "@/content/contact";
import { contact } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

// The inquiry form (Contact page and the site-wide Inquire pop-up): the same five questions her
// Gatherwise form asked, in the same look (beige box, "Work with us", tracked uppercase labels,
// underline-only inputs, dark pill button). Each inquiry is emailed through Web3Forms
// (https://web3forms.com): the browser posts it to their API with the site's access key, and they
// email it to the address the key belongs to, with Reply-To set to the person who wrote, so a
// reply goes straight back to them. No server code here. The key lives in
// NEXT_PUBLIC_WEB3FORMS_KEY (.env.local, and Vercel's environment variables); it is public by
// design, since it can only send to its own address.
const ENDPOINT = "https://api.web3forms.com/submit";
const KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function InquiryForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const { title, eventTypes, success } = contactPage.form;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (f.botcheck) return; // the hidden spam trap was filled in: a bot, so quietly do nothing
    setStatus("sending");
    const name = `${f.first_name} ${f.last_name}`.trim();
    try {
      if (!KEY) throw new Error("NEXT_PUBLIC_WEB3FORMS_KEY is not set");
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: KEY,
          subject: `New inquiry from ${name}: ${f.event_type}`,
          from_name: "Zenju Weddings website",
          replyto: f.email,
          "First name": f.first_name,
          "Last name": f.last_name,
          Email: f.email,
          "Type of event": f.event_type,
          Message: f.message || "(none)",
        }),
      });
      const json = await res.json().catch(() => null);
      setStatus(res.ok && json?.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-none border-0 border-b border-ink/25 bg-transparent py-1.5 text-[17px] leading-normal text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none";
  const label = "text-[13px] leading-[1.33] font-medium tracking-[.2em] text-ink/70 uppercase";
  const star = <span aria-hidden="true" className="text-gold"> *</span>;

  return (
    <div className="bg-cream p-7 sm:p-10">
      <h2 className="text-2xl leading-[1.22] font-light sm:text-[34px]">{title}</h2>
      {status === "sent" ? (
        <p role="status" className="mt-4 text-body leading-prose text-pretty text-ink/75">
          {success}
        </p>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-6 pt-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor={`${id}-first`} className={label}>First name{star}</label>
              <input id={`${id}-first`} name="first_name" required maxLength={80} autoComplete="given-name" className={field} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor={`${id}-last`} className={label}>Last name{star}</label>
              <input id={`${id}-last`} name="last_name" required maxLength={80} autoComplete="family-name" className={field} />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor={`${id}-email`} className={label}>Email{star}</label>
            <input id={`${id}-email`} name="email" type="email" required maxLength={200} autoComplete="email" spellCheck={false} className={field} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor={`${id}-type`} className={label}>Type of event{star}</label>
            <select
              id={`${id}-type`}
              name="event_type"
              required
              defaultValue=""
              className={`${field} cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='12'_height='8'_viewBox='0_0_12_8'%3E%3Cpath_d='M1_1l5_5_5-5'_fill='none'_stroke='%2327262A'_stroke-width='1.3'/%3E%3C/svg%3E")] bg-position-[right_4px_center] bg-no-repeat pr-7 invalid:text-ink/40`}
            >
              <option value="" disabled>Choose one</option>
              {eventTypes.map((t) => (
                <option key={t} value={t} className="text-ink">{t}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor={`${id}-message`} className={label}>Message</label>
            <textarea id={`${id}-message`} name="message" maxLength={5000} rows={4} className={`${field} min-h-25 resize-y`} />
          </div>
          {/* Spam trap: hidden from people and screen readers; bots fill it in. */}
          <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="hidden" />
          {status === "error" && (
            <p role="alert" className="text-meta leading-prose text-pretty text-ink/80">
              Sorry, your message couldn’t be sent just now. Please email us at{" "}
              <a href={`mailto:${contact.email}`} className="link-draw font-medium text-gold-deep">{contact.email}</a>.
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className={`${buttonClass("primary")} mt-2 w-full disabled:cursor-default disabled:opacity-60 sm:w-fit`}
          >
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
