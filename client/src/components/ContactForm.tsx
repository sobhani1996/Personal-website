import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { postToFormSubmit } from "@/lib/formsubmit";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

// Submissions are emailed by FormSubmit (see lib/formsubmit), which then
// sends the visitor back here with ?sent=1. The first submission triggers a
// one-time activation email to CONTACT.email.

const services = [
  "Google Ads",
  "Meta Ads (Facebook & Instagram)",
  "Both",
  "Not sure yet",
];
const budgets = [
  "Not sure yet",
  "Under £500",
  "£500 – £1,500",
  "£1,500 – £5,000",
  "Over £5,000",
];

const selectClass =
  "h-11 w-full rounded-md border border-input bg-transparent px-3 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm";

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const sentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("sent") === "1") {
      setStatus("sent");
      window.history.replaceState(null, "", window.location.pathname);
    }
    // Re-enable the button if someone comes back with the Back button.
    const reset = (e: PageTransitionEvent) => e.persisted && setStatus("idle");
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);

  useEffect(() => {
    if (status === "sent")
      sentRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [status]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { _honey, ...data } = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    ) as Record<string, string>;
    if (_honey) return; // bot filled the hidden field

    setStatus("sending");
    postToFormSubmit(
      {
        ...data,
        _subject: `New enquiry from ${data.name} (mrsobhani.uk)`,
        _replyto: data.email,
      },
      "/contact/?sent=1"
    );
  }

  if (status === "sent") {
    return (
      <div
        ref={sentRef}
        className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-sm"
        role="status"
      >
        <CheckCircle2
          className="mb-4 h-14 w-14 text-green-600"
          aria-hidden="true"
        />
        <h2 className="mb-2 text-2xl font-bold text-secondary">
          Thanks, your message is on its way
        </h2>
        <p className="mb-6 text-muted-foreground">
          I'll get back to you as soon as I can.
        </p>
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
      aria-labelledby="contact-form-heading"
    >
      <div>
        <h2
          id="contact-form-heading"
          className="text-2xl font-bold text-secondary"
        >
          Send me a message
        </h2>
        <p className="mt-1 text-muted-foreground">
          Tell me a little about your business and I'll get back to you.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cf-name">Name *</Label>
          <Input
            id="cf-name"
            name="name"
            autoComplete="name"
            required
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-email">Email *</Label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-phone">Phone</Label>
          <Input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-business">Business name</Label>
          <Input
            id="cf-business"
            name="business"
            autoComplete="organization"
            className="h-11"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="cf-website">Website</Label>
          <Input
            id="cf-website"
            name="website"
            type="text"
            inputMode="url"
            placeholder="yourbusiness.co.uk"
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-service">I'm interested in</Label>
          <select
            id="cf-service"
            name="service"
            className={selectClass}
            defaultValue={services[0]}
          >
            {services.map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-budget">Monthly ad budget</Label>
          <select
            id="cf-budget"
            name="budget"
            className={selectClass}
            defaultValue={budgets[0]}
          >
            {budgets.map(b => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="cf-message">Message *</Label>
          <Textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            placeholder="What do you sell, who are your customers, and what would you like more of?"
          />
        </div>
      </div>

      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="consent"
          value="yes"
          required
          className="mt-1 h-4 w-4 accent-[#1e3a8a]"
        />
        <span>
          I agree that my details are used to reply to my enquiry, as described
          in the{" "}
          <a
            href="/privacy-policy/"
            className="font-semibold text-secondary underline"
          >
            privacy policy
          </a>
          . *
        </span>
      </label>

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="h-12 w-full rounded-full bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-10"
      >
        {status === "sending" ? (
          <>
            Sending{" "}
            <Loader2 className="ml-2 h-4 w-4 animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Send message <Send className="ml-2 h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}
