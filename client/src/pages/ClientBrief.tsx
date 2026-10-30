import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BRIEF_NEXT_STEPS,
  BRIEF_SECTIONS,
  OTHER,
  type BriefField,
  type BriefSection,
  type ChoiceField,
  type LongTextField,
  type TextField,
} from "@/content/brief";
import { CONTACT } from "@/content/offer";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  CheckCircle2,
  Clock,
  Loader2,
  MessageCircle,
  Save,
  Send,
  SkipForward,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
  type RefObject,
} from "react";
import { Link } from "wouter";

// Sent through FormSubmit like the contact form, so it arrives as an email.
const ENDPOINT = `https://formsubmit.co/ajax/${CONTACT.email}`;
const STORAGE_KEY = "mrsobhani-client-brief";
const REVIEW = BRIEF_SECTIONS.length; // step index of the final check
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Answer = string | string[];
type Answers = Record<string, Answer>;
type Errors = Partial<Record<"name" | "email", string>>;
type Status = "idle" | "sending" | "sent" | "error";

const text = (a: Answers, id: string) =>
  typeof a[id] === "string" ? (a[id] as string).trim() : "";

const isAnswered = (v: Answer | undefined) =>
  Array.isArray(v) ? v.length > 0 : !!v?.trim();

const answeredIn = (s: BriefSection, a: Answers) =>
  s.fields.filter(f => isAnswered(a[f.id])).length;

function validate(a: Answers): Errors {
  const errors: Errors = {};
  if (!text(a, "name")) errors.name = "Please add your name.";
  const email = text(a, "email");
  if (email && !EMAIL_RE.test(email))
    errors.email = "This email address doesn't look right.";
  else if (!email && !text(a, "phone"))
    errors.email = "Add an email or a phone number so I can reach you.";
  return errors;
}

/** The answer as it appears in the review and the email, or "" if skipped. */
function displayValue(f: BriefField, a: Answers): string {
  if (f.kind === "choice") {
    const v = a[f.id];
    const list = Array.isArray(v) ? v : v ? [v] : [];
    const other = text(a, `${f.id}Other`);
    return list
      .map(x => (x === OTHER && other ? `Other: ${other}` : x))
      .join(", ");
  }
  let value = text(a, f.id);
  if (!value || f.kind === "textarea") return value;
  if (f.prefix && !value.startsWith(f.prefix)) value = f.prefix + value;
  if (f.suffix && !value.endsWith(f.suffix)) value += f.suffix;
  return value;
}

function buildEmail(a: Answers) {
  const name = text(a, "name");
  const business = text(a, "business");
  const email = text(a, "email");
  const body: Record<string, string> = {
    _subject: `Client brief: ${business ? `${business} (${name})` : name}`,
    _template: "table",
  };
  if (email) body._replyto = email;
  BRIEF_SECTIONS.forEach((s, i) => {
    const rows = s.fields
      .map(f => [f.label, displayValue(f, a)] as const)
      .filter(([, v]) => v);
    if (!rows.length) return;
    body[`— ${i + 1}. ${s.title} —`] =
      `${rows.length} of ${s.fields.length} answered`;
    for (const [label, v] of rows) body[label] = v;
  });
  return body;
}

export default function ClientBrief() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sendError, setSendError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [restored, setRestored] = useState(false);
  const cardRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const honeyRef = useRef<HTMLInputElement>(null);
  const moved = useRef(false);

  // Answers are kept in the browser until they're sent, so people can stop
  // and come back later.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
      if (saved?.answers && Object.keys(saved.answers).length) {
        setAnswers(saved.answers);
        setStep(Math.min(Number(saved.step) || 0, REVIEW));
        setRestored(true);
      }
    } catch {
      // Storage unavailable: the form still works, it just isn't saved.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded || status === "sent") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, step }));
    } catch {
      // Ignore: saving is a convenience only.
    }
  }, [answers, step, loaded, status]);

  // After changing step, bring the card into view and move focus to the
  // new heading (or the first field that needs fixing).
  useEffect(() => {
    if (!moved.current) return;
    moved.current = false;
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const firstError = step === 0 && Object.keys(errors)[0];
    const target = firstError
      ? document.getElementById(`brief-${firstError}`)
      : headingRef.current;
    target?.focus({ preventScroll: true });
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  function goTo(next: number) {
    moved.current = true;
    setStep(next);
  }

  function update(id: string, value: Answer) {
    const next = { ...answers, [id]: value };
    setAnswers(next);
    if (Object.keys(errors).length) setErrors(validate(next));
  }

  function startOver() {
    if (!window.confirm("Clear all your answers and start again?")) return;
    setAnswers({});
    setErrors({});
    setRestored(false);
    goTo(0);
  }

  async function send() {
    const found = validate(answers);
    if (Object.keys(found).length) {
      setErrors(found);
      goTo(0);
      return;
    }
    if (honeyRef.current?.value) return; // bot filled the hidden field

    setStatus("sending");
    setSendError("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(buildEmail(answers)),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) !== "true") {
        throw new Error(json.message || "Your brief could not be sent.");
      }
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Ignore.
      }
      setStatus("sent");
      window.scrollTo({ top: 0 });
    } catch (err) {
      setSendError(
        err instanceof Error ? err.message : "Your brief could not be sent."
      );
      setStatus("error");
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step === REVIEW) return void send();
    if (step === 0) {
      const found = validate(answers);
      setErrors(found);
      const first = Object.keys(found)[0];
      if (first) {
        document.getElementById(`brief-${first}`)?.focus();
        return;
      }
    }
    goTo(step + 1);
  }

  if (status === "sent") {
    return (
      <Page>
        <Thanks name={text(answers, "name").split(" ")[0]} />
      </Page>
    );
  }

  const section = BRIEF_SECTIONS[step];
  const percent = Math.round(((step + 1) / (REVIEW + 1)) * 100);
  const missing = validate(answers);

  return (
    <Page>
      <header className="mb-8 space-y-5 text-center">
        <div className="inline-flex items-center rounded-full border border-secondary/10 bg-white/80 px-4 py-1.5 text-sm font-bold text-secondary">
          Client project brief
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-secondary md:text-5xl">
          Tell me about your business
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Thanks for getting in touch. This helps me prepare for our free
          strategy call, so we spend the 30 minutes on your goals rather than
          the basics.
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-secondary">
          <li className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-secondary/60" aria-hidden="true" />
            About 10 minutes
          </li>
          <li className="flex items-center gap-2">
            <SkipForward
              className="h-4 w-4 text-secondary/60"
              aria-hidden="true"
            />
            Skip anything you're not sure about
          </li>
          <li className="flex items-center gap-2">
            <Save className="h-4 w-4 text-secondary/60" aria-hidden="true" />
            Saved as you go
          </li>
        </ul>
      </header>

      {restored && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/50 bg-primary/15 px-5 py-3 text-sm text-secondary">
          <span>Welcome back. Your earlier answers are still here.</span>
          <button
            type="button"
            onClick={startOver}
            className="font-bold underline underline-offset-2"
          >
            Start again
          </button>
        </div>
      )}

      <form
        ref={cardRef}
        onSubmit={handleSubmit}
        noValidate={step !== REVIEW}
        className="scroll-mt-28 rounded-3xl border border-gray-100 bg-white shadow-sm"
        aria-labelledby="brief-step-heading"
      >
        {/* Progress */}
        <div className="border-b border-gray-100 px-5 pb-5 pt-6 md:px-10">
          <div className="flex items-center justify-between text-sm">
            <span className="font-bold text-secondary">
              {step < REVIEW ? `Step ${step + 1} of ${REVIEW}` : "Final check"}
            </span>
            <span className="text-muted-foreground">{percent}% done</span>
          </div>
          <div
            className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100"
            role="progressbar"
            aria-label="Progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent}
          >
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <ol className="mt-5 hidden grid-cols-7 gap-1 md:grid">
            {[...BRIEF_SECTIONS.map(s => s.short), "Send"].map((label, i) => {
              const current = i === step;
              const done =
                !current &&
                (i < REVIEW
                  ? answeredIn(BRIEF_SECTIONS[i], answers) > 0
                  : false);
              return (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={current ? "step" : undefined}
                    className="group flex w-full flex-col items-center gap-1.5 rounded-xl px-1 py-1.5 text-center outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors",
                        current &&
                          "border-primary bg-primary text-primary-foreground",
                        done && "border-secondary bg-secondary text-white",
                        !current &&
                          !done &&
                          "border-gray-200 bg-white text-muted-foreground group-hover:border-secondary/40"
                      )}
                    >
                      {done ? (
                        <Check className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        i + 1
                      )}
                    </span>
                    <span
                      className={cn(
                        "text-xs leading-tight",
                        current
                          ? "font-bold text-secondary"
                          : "text-muted-foreground group-hover:text-secondary"
                      )}
                    >
                      {label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Step content */}
        <div className="px-5 py-8 md:px-10">
          {section ? (
            <>
              <h2
                id="brief-step-heading"
                ref={headingRef}
                tabIndex={-1}
                className="text-2xl font-bold text-secondary outline-none md:text-3xl"
              >
                {section.title}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {step === 0
                  ? "Only your name and an email or phone number are needed. Everything else is optional."
                  : section.intro}
              </p>
              {section.note && (
                <p className="mt-4 rounded-xl border-l-4 border-primary bg-primary/10 px-4 py-3 text-sm font-medium text-secondary">
                  {section.note}
                </p>
              )}
              <div className="mt-8 grid gap-x-5 gap-y-7 sm:grid-cols-2">
                {section.fields.map(f =>
                  f.kind === "choice" ? (
                    <ChoiceQuestion
                      key={f.id}
                      field={f}
                      value={answers[f.id]}
                      other={text(answers, `${f.id}Other`)}
                      onChange={v => update(f.id, v)}
                      onOther={v => update(`${f.id}Other`, v)}
                    />
                  ) : (
                    <TextQuestion
                      key={f.id}
                      field={f}
                      value={(answers[f.id] as string) ?? ""}
                      required={f.id === "name"}
                      error={errors[f.id as keyof Errors]}
                      onChange={v => update(f.id, v)}
                    />
                  )
                )}
              </div>
            </>
          ) : (
            <Review
              answers={answers}
              missing={Object.keys(missing).length > 0}
              onEdit={goTo}
              headingRef={headingRef}
            />
          )}

          {/* Honeypot: hidden from people, filled in by spam bots. */}
          <input
            ref={honeyRef}
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {step === REVIEW && status === "error" && (
            <p
              className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700"
              role="alert"
            >
              {sendError} Your answers are still saved. Please try again, or
              email me at{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-semibold underline"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3 rounded-b-3xl border-t border-gray-100 bg-gray-50/70 px-5 py-5 md:px-10">
          {step > 0 ? (
            <Button
              type="button"
              variant="ghost"
              onClick={() => goTo(step - 1)}
              className="h-12 rounded-full px-4 text-base font-bold text-secondary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
            </Button>
          ) : (
            <span />
          )}
          {step < REVIEW ? (
            <Button
              type="submit"
              className="h-12 rounded-full px-6 text-base font-bold shadow-lg shadow-primary/20"
            >
              {step === REVIEW - 1
                ? "Check and send"
                : `Next: ${BRIEF_SECTIONS[step + 1].short}`}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={status === "sending"}
              className="h-12 rounded-full px-7 text-base font-bold shadow-lg shadow-primary/20"
            >
              {status === "sending" ? (
                <>
                  Sending
                  <Loader2
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <>
                  Send my brief
                  <Send className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>

      <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
        Your answers stay on this device until you send them. They're sent to me
        by email through FormSubmit and used only to prepare for our call and
        plan your campaigns. I don't share them with anyone else. See my{" "}
        <a
          href="/privacy-policy/"
          className="font-semibold text-secondary underline"
        >
          privacy policy
        </a>
        .
      </p>
    </Page>
  );
}

function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 md:pt-32">
        <div className="container max-w-3xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

function TextQuestion({
  field,
  value,
  required,
  error,
  onChange,
}: {
  field: TextField | LongTextField;
  value: string;
  required?: boolean;
  error?: string;
  onChange: (v: string) => void;
}) {
  const id = `brief-${field.id}`;
  const described =
    [field.hint && `${id}-hint`, error && `${id}-error`]
      .filter(Boolean)
      .join(" ") || undefined;
  const shared = {
    id,
    name: field.id,
    value,
    placeholder: field.placeholder,
    required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": described,
  };

  return (
    <div className={cn("space-y-2", !field.half && "sm:col-span-2")}>
      <Label
        htmlFor={id}
        className="text-[15px] font-bold leading-snug text-secondary"
      >
        {field.label}
        {required && (
          <span className="text-red-600" aria-hidden="true">
            *
          </span>
        )}
      </Label>
      {field.hint && (
        <p id={`${id}-hint`} className="-mt-1 text-sm text-muted-foreground">
          {field.hint}
        </p>
      )}
      {field.kind === "textarea" ? (
        <Textarea
          {...shared}
          rows={field.rows ?? 3}
          onChange={e => onChange(e.target.value)}
          className={cn(
            "bg-white text-base md:text-base",
            (field.rows ?? 3) > 2 ? "min-h-24" : "min-h-16"
          )}
        />
      ) : (
        <div className="relative">
          {field.prefix && (
            <span
              className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-muted-foreground"
              aria-hidden="true"
            >
              {field.prefix}
            </span>
          )}
          <Input
            {...shared}
            type={field.type ?? "text"}
            inputMode={field.inputMode}
            autoComplete={field.autoComplete ?? "off"}
            onChange={e => onChange(e.target.value)}
            className={cn(
              "h-12 bg-white text-base md:text-base",
              field.prefix && "pl-8",
              field.suffix && "pr-9"
            )}
          />
          {field.suffix && (
            <span
              className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-muted-foreground"
              aria-hidden="true"
            >
              {field.suffix}
            </span>
          )}
        </div>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function ChoiceQuestion({
  field,
  value,
  other,
  onChange,
  onOther,
}: {
  field: ChoiceField;
  value: Answer | undefined;
  other: string;
  onChange: (v: Answer) => void;
  onOther: (v: string) => void;
}) {
  const selected = Array.isArray(value) ? value : value ? [value] : [];

  function toggle(option: string) {
    if (!field.multiple) return onChange(option);
    if (selected.includes(option))
      return onChange(selected.filter(v => v !== option));
    if (option === field.exclusive) return onChange([option]);
    onChange([...selected.filter(v => v !== field.exclusive), option]);
  }

  return (
    <fieldset className="sm:col-span-2">
      <legend className="text-[15px] font-bold text-secondary">
        {field.label}
      </legend>
      {field.hint && (
        <p className="mt-1 text-sm text-muted-foreground">{field.hint}</p>
      )}
      <div
        className={cn(
          "mt-3",
          field.cards ? "grid gap-3 sm:grid-cols-2" : "flex flex-wrap gap-2.5"
        )}
      >
        {field.options.map(o => {
          const checked = selected.includes(o.value);
          return (
            <label
              key={o.value}
              className={cn(
                "flex cursor-pointer select-none items-center gap-3 border-2 transition-all has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50",
                field.cards
                  ? "rounded-2xl px-4 py-4"
                  : "min-h-11 rounded-full px-4 py-2",
                checked
                  ? "border-secondary bg-secondary text-white shadow-md shadow-secondary/15"
                  : "border-gray-200 bg-white text-secondary hover:border-secondary/40 hover:bg-secondary/[0.03]"
              )}
            >
              <input
                type={field.multiple ? "checkbox" : "radio"}
                name={field.id}
                value={o.value}
                checked={checked}
                onChange={() => toggle(o.value)}
                className="sr-only"
              />
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center border-2 transition-colors",
                  field.multiple ? "rounded-md" : "rounded-full",
                  checked
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-gray-300"
                )}
                aria-hidden="true"
              >
                {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
              </span>
              <span className="leading-tight">
                <span className="font-semibold">{o.value}</span>
                {o.detail && (
                  <span
                    className={cn(
                      field.cards ? "mt-0.5 block text-sm" : "ml-1.5 text-sm",
                      checked ? "text-blue-100" : "text-muted-foreground"
                    )}
                  >
                    {o.detail}
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </div>
      {field.other && selected.includes(OTHER) && (
        <Input
          aria-label={`${field.label} Other, which one?`}
          placeholder="Which one?"
          value={other}
          onChange={e => onOther(e.target.value)}
          className="mt-3 h-12 max-w-sm bg-white text-base md:text-base"
          autoFocus
        />
      )}
    </fieldset>
  );
}

function Review({
  answers,
  missing,
  onEdit,
  headingRef,
}: {
  answers: Answers;
  missing: boolean;
  onEdit: (step: number) => void;
  headingRef: RefObject<HTMLHeadingElement | null>;
}) {
  return (
    <>
      <h2
        id="brief-step-heading"
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-bold text-secondary outline-none md:text-3xl"
      >
        Check and send
      </h2>
      <p className="mt-2 text-muted-foreground">
        Go back to any section, or send it as it is. Anything you skipped we'll
        cover on the call.
      </p>

      {missing && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <span>
            Please add your name and an email or phone number before sending.
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onEdit(0)}
            className="rounded-full border-red-200 bg-white font-bold text-red-700"
          >
            Add details
          </Button>
        </div>
      )}

      <ul className="mt-6 divide-y divide-gray-100 rounded-2xl border border-gray-100">
        {BRIEF_SECTIONS.map((s, i) => {
          const count = answeredIn(s, answers);
          const rows = s.fields
            .map(f => [f.label, displayValue(f, answers)] as const)
            .filter(([, v]) => v);
          return (
            <li key={s.id} className="p-4 md:px-5">
              <div className="flex items-center gap-4">
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                    count
                      ? "bg-secondary text-white"
                      : "border-2 border-gray-200 text-muted-foreground"
                  )}
                  aria-hidden="true"
                >
                  {count ? <Check className="h-4 w-4" /> : i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-secondary">{s.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {count
                      ? `${count} of ${s.fields.length} answered`
                      : "Skipped"}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(i)}
                  className="rounded-full px-4 font-bold text-secondary"
                  aria-label={`Edit ${s.title}`}
                >
                  Edit
                </Button>
              </div>
              {rows.length > 0 && (
                <details className="group mt-2 pl-12">
                  <summary className="cursor-pointer text-sm font-semibold text-secondary underline underline-offset-2">
                    <span className="group-open:hidden">Show answers</span>
                    <span className="hidden group-open:inline">
                      Hide answers
                    </span>
                  </summary>
                  <dl className="mt-3 space-y-3 text-sm">
                    {rows.map(([label, v]) => (
                      <div key={label}>
                        <dt className="text-muted-foreground">{label}</dt>
                        <dd className="whitespace-pre-line font-medium text-secondary">
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </details>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-8 rounded-2xl bg-secondary p-6 text-white md:p-7">
        <h3 className="text-lg font-bold">What happens next</h3>
        <NextSteps className="mt-4 text-blue-100" />
      </div>

      <label className="mt-8 flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="consent"
          value="yes"
          required
          className="mt-0.5 h-5 w-5 shrink-0 accent-[#1e3a8a]"
        />
        <span>
          I agree that my answers are used to prepare for our call and plan my
          campaigns, as described in the{" "}
          <a
            href="/privacy-policy/"
            className="font-semibold text-secondary underline"
          >
            privacy policy
          </a>
          . <span className="text-red-600">*</span>
        </span>
      </label>
    </>
  );
}

function NextSteps({ className }: { className?: string }) {
  return (
    <ol className={cn("space-y-3", className)}>
      {BRIEF_NEXT_STEPS.map((s, i) => (
        <li key={s} className="flex items-start gap-3">
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <span>{s}</span>
        </li>
      ))}
    </ol>
  );
}

function Thanks({ name }: { name: string }) {
  return (
    <div
      className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-12"
      role="status"
    >
      <div className="text-center">
        <CheckCircle2
          className="mx-auto mb-5 h-16 w-16 text-green-600"
          aria-hidden="true"
        />
        <h1 className="text-3xl font-extrabold text-secondary md:text-4xl">
          Thanks{name ? `, ${name}` : ""}! Your brief is on its way
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
          I'll read your answers and get back to you within 2 working days to
          arrange our free strategy call.
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-background/70 p-6">
        <h2 className="mb-4 text-lg font-bold text-secondary">
          What happens next
        </h2>
        <NextSteps className="text-secondary" />
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button
          asChild
          className="h-12 rounded-full px-6 text-base font-bold shadow-lg shadow-primary/20"
        >
          <Link href="/contact/">
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Pick a call time now
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-12 rounded-full px-6 text-base font-bold text-secondary"
        >
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Message me on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
