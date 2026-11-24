import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatGBP } from "@/content/offer";
import { calculate, FLOOR_SAFETY_MARGIN, type Goal } from "@/lib/adsCalculator";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  ArrowDown,
  CalendarCheck,
  Check,
  Info,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Link } from "wouter";

const ROAS_MIN = 1;
const ROAS_MAX = 8;

/** "8,000" or "£8000" -> 8000; NaN when it isn't a number. */
const parse = (v: string) =>
  v.trim() ? Number(v.replace(/[£,\s]/g, "")) : NaN;

/** Whole pounds where possible, pence only when needed, minus sign for losses. */
function money(n: number) {
  const rounded = Math.round(n * 100) / 100;
  const text = formatGBP(Math.abs(rounded));
  return rounded < 0 ? `−${text}` : text;
}

const ratio = (n: number) => n.toFixed(2);

export default function AdsCalculator() {
  const [revenue, setRevenue] = useState("8000");
  const [aov, setAov] = useState("40");
  const [margin, setMargin] = useState(50);
  const [goal, setGoal] = useState<Goal>("profit");
  const [orders, setOrders] = useState("1.5");
  const [budget, setBudget] = useState("1000");
  const [roas, setRoas] = useState(3);

  const values = {
    revenue: parse(revenue),
    aov: parse(aov),
    orders: parse(orders),
    budget: parse(budget),
  };
  const errors = {
    revenue:
      !(values.revenue >= 0) && "Enter your monthly online revenue in pounds.",
    aov: !(values.aov > 0) && "Enter an average order value above £0.",
    orders:
      goal === "growth" &&
      !(values.orders >= 1 && values.orders <= 5) &&
      "Enter a number between 1.0 and 5.0.",
    budget: !(values.budget >= 0) && "Enter your monthly ad budget in pounds.",
  };
  const ready = !Object.values(errors).some(Boolean);

  // On phones the results sit below the inputs, so a summary bar follows the
  // visitor while the calculator is on screen but the results aren't.
  const wrapRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    const wrap = wrapRef.current;
    const results = resultsRef.current;
    if (!wrap || !results || !("IntersectionObserver" in window)) return;
    const seen = { wrap: false, results: false };
    const observer = new IntersectionObserver(entries => {
      for (const e of entries)
        seen[e.target === wrap ? "wrap" : "results"] = e.isIntersecting;
      setShowBar(seen.wrap && !seen.results);
    });
    observer.observe(wrap);
    observer.observe(results);
    return () => observer.disconnect();
  }, []);

  const r = ready
    ? calculate({
        revenue: values.revenue,
        aov: values.aov,
        margin: margin / 100,
        goal,
        ordersPerCustomer: values.orders,
        budget: values.budget,
        roas,
      })
    : null;

  return (
    <div
      ref={wrapRef}
      className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)]"
    >
      {/* Inputs */}
      <div className="space-y-6">
        <Step n={1} title="About your business">
          <MoneyField
            label="Current monthly online revenue"
            hint="Sets your commission rate."
            value={revenue}
            onChange={setRevenue}
            error={errors.revenue}
          />
          <MoneyField
            label="Average order value (AOV)"
            value={aov}
            onChange={setAov}
            error={errors.aov}
          />
          <SliderField
            label="Gross margin"
            hint="Your profit per order after product, packaging, delivery and payment fees, as a percentage of the sale price."
            min={10}
            max={90}
            step={1}
            value={margin}
            onChange={setMargin}
            display={`${margin}%`}
            minLabel="10%"
            maxLabel="90%"
          />
        </Step>

        <Step n={2} title="Your goal">
          <fieldset>
            <legend className="sr-only">What should your ads achieve?</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <GoalCard
                checked={goal === "profit"}
                onSelect={() => setGoal("profit")}
                title="Profit from the first order"
                text="Every sale from ads must be profitable on its own."
              />
              <GoalCard
                checked={goal === "growth"}
                onSelect={() => setGoal("growth")}
                title="Grow market share"
                text="I'm happy to break even on the first order, because customers come back and buy again."
              />
            </div>
          </fieldset>
          {goal === "growth" && (
            <NumberField
              label="Average orders per customer in 12 months"
              hint="Check this in Shopify: total orders ÷ number of customers over the last 12 months. If you're not sure, keep it low."
              value={orders}
              onChange={setOrders}
              error={errors.orders}
            />
          )}
        </Step>

        <Step n={3} title="Your ads">
          <MoneyField
            label="Monthly ad budget"
            value={budget}
            onChange={setBudget}
            error={errors.budget}
          />
          <SliderField
            label="Expected return per £1 spent (ROAS)"
            min={ROAS_MIN}
            max={ROAS_MAX}
            step={0.1}
            value={roas}
            onChange={setRoas}
            display={roas.toFixed(1)}
            minLabel="1.0"
            maxLabel="8.0"
          />
        </Step>
      </div>

      {/* Results */}
      <div
        id="calculator-results"
        ref={resultsRef}
        className="scroll-mt-24 space-y-4 lg:sticky lg:top-24"
        aria-live="polite"
      >
        <h2 className="sr-only">Your results</h2>
        {!r ? (
          <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center text-muted-foreground shadow-sm">
            Fill in the numbers on the left to see your results.
          </div>
        ) : (
          <>
            {r.marginTooLow && (
              <p
                className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 font-semibold text-red-700"
                role="alert"
              >
                <AlertTriangle
                  className="mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden="true"
                />
                Your margin is too low for paid ads to be profitable. Let's talk
                about pricing first.
              </p>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-muted-foreground">
                  Your commission rate
                </p>
                <p className="mt-1 text-5xl font-extrabold text-secondary">
                  {Math.round(r.rate * 100)}%
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  At {money(values.revenue)} a month in online revenue
                </p>
              </div>
              <div
                className={cn(
                  "rounded-3xl p-6 shadow-sm",
                  r.aboveFloor
                    ? "bg-secondary text-white"
                    : "border border-gray-200 bg-gray-100 text-gray-600"
                )}
              >
                <p
                  className={cn(
                    "text-sm font-bold",
                    r.aboveFloor ? "text-blue-100" : "text-gray-500"
                  )}
                >
                  Your estimated monthly fee
                </p>
                <p
                  className={cn(
                    "mt-1 text-5xl font-extrabold",
                    r.aboveFloor ? "text-primary" : "text-gray-500"
                  )}
                >
                  {money(r.fee)}
                </p>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    r.aboveFloor ? "text-blue-100" : "text-gray-600"
                  )}
                >
                  {r.aboveFloor
                    ? `${Math.round(r.rate * 100)}% of ${money(r.adRevenue)} ad revenue`
                    : "No fee. Below your profitability floor."}
                </p>
              </div>
            </div>

            <FloorCard
              floor={r.floor}
              breakEven={r.breakEvenRoas}
              roas={roas}
              aboveFloor={r.aboveFloor}
              customerValue={goal === "growth" ? r.customerValue : null}
            />

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                <Wallet className="h-4 w-4" aria-hidden="true" />
                Your profit each month
              </div>
              <div
                className={cn(
                  "mt-3 grid gap-4",
                  r.yearProfit !== null && "grid-cols-2"
                )}
              >
                <Profit label="From first orders" value={r.firstOrderProfit} />
                {r.yearProfit !== null && (
                  <Profit label="Over 12 months" value={r.yearProfit} />
                )}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                After your ad budget and my fee.
              </p>
              {goal === "growth" && r.firstOrderProfit < 0 && (
                <p className="mt-4 flex gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium text-amber-800">
                  <AlertTriangle
                    className="mt-0.5 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  You'll make a loss on first orders. Profit depends on
                  customers coming back.
                </p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <SmallStat label="Ad revenue" value={money(r.adRevenue)} />
              <SmallStat
                label="New customers"
                value={Math.round(r.newCustomers).toLocaleString("en-GB")}
              />
              <SmallStat
                label="Cost per new customer"
                value={r.cac === null ? "–" : money(r.cac)}
              />
            </div>
          </>
        )}

        <p className="flex gap-2 px-1 text-sm text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          This is an estimate. Your actual rate and floor are agreed in writing
          before launch, based on your real numbers.
        </p>
        <Button
          asChild
          className="h-auto min-h-12 w-full whitespace-normal rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
        >
          <Link href="/contact/">
            <CalendarCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
            Book a free strategy call to check these numbers together
          </Link>
        </Button>
      </div>

      {r && showBar && (
        <a
          href="#calculator-results"
          className="fixed bottom-4 left-4 right-24 z-40 flex items-center justify-between gap-3 rounded-2xl bg-secondary px-4 py-3 text-white shadow-xl lg:hidden"
        >
          <span className="text-sm leading-tight">
            <span className="block text-blue-100">
              Fee {r.aboveFloor ? money(r.fee) : "£0"} · Floor{" "}
              {r.floor === null ? "–" : ratio(r.floor)}
            </span>
            <span className="block font-bold">
              Profit {money(r.firstOrderProfit)}
              {r.yearProfit !== null && ` · 12 months ${money(r.yearProfit)}`}
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-1 text-sm font-bold text-primary">
            Results <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      )}
    </div>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-secondary">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-base font-extrabold text-primary-foreground"
          aria-hidden="true"
        >
          {n}
        </span>
        <span>
          <span className="sr-only">Step {n}: </span>
          {title}
        </span>
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function FieldShell({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string | false;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-[15px] font-bold text-secondary"
      >
        {label}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function describedBy(id: string, hint?: string, error?: string | false) {
  return (
    [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") ||
    undefined
  );
}

function MoneyField({
  label,
  hint,
  value,
  onChange,
  error,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | false;
}) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} hint={hint} error={error}>
      <div className="relative">
        <span
          className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-lg text-muted-foreground"
          aria-hidden="true"
        >
          £
        </span>
        <Input
          id={id}
          inputMode="decimal"
          value={value}
          onChange={e => onChange(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, hint, error)}
          className="h-12 bg-white pl-9 text-lg font-semibold md:text-lg"
        />
      </div>
    </FieldShell>
  );
}

function NumberField({
  label,
  hint,
  value,
  onChange,
  error,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | false;
}) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} hint={hint} error={error}>
      <Input
        id={id}
        type="number"
        inputMode="decimal"
        min={1}
        max={5}
        step={0.1}
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className="h-12 max-w-[10rem] bg-white text-lg font-semibold md:text-lg"
      />
    </FieldShell>
  );
}

function SliderField({
  label,
  hint,
  min,
  max,
  step,
  value,
  onChange,
  display,
  minLabel,
  maxLabel,
}: {
  label: string;
  hint?: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  display: string;
  minLabel: string;
  maxLabel: string;
}) {
  const id = useId();
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[15px] font-bold text-secondary">
          {label}
        </label>
        <output
          htmlFor={id}
          className="rounded-lg bg-primary/20 px-3 py-1 text-lg font-extrabold text-secondary"
        >
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        aria-describedby={hint ? `${id}-hint` : undefined}
        aria-valuetext={display}
        className="h-2 w-full cursor-pointer accent-secondary"
      />
      <div
        className="flex justify-between text-xs text-muted-foreground"
        aria-hidden="true"
      >
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
      {hint && (
        <p id={`${id}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      )}
    </div>
  );
}

function GoalCard({
  checked,
  onSelect,
  title,
  text,
}: {
  checked: boolean;
  onSelect: () => void;
  title: string;
  text: string;
}) {
  return (
    <label
      className={cn(
        "flex h-full cursor-pointer gap-3 rounded-2xl border-2 p-5 transition-colors has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50",
        checked
          ? "border-secondary bg-secondary text-white"
          : "border-gray-200 bg-white text-secondary hover:border-secondary/40"
      )}
    >
      <input
        type="radio"
        name="calculator-goal"
        checked={checked}
        onChange={onSelect}
        className="sr-only"
      />
      <span
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
          checked
            ? "border-primary bg-primary text-primary-foreground"
            : "border-gray-300"
        )}
        aria-hidden="true"
      >
        {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
      </span>
      <span>
        <span className="block font-bold">{title}</span>
        <span
          className={cn(
            "mt-1 block text-sm leading-relaxed",
            checked ? "text-blue-100" : "text-muted-foreground"
          )}
        >
          {text}
        </span>
      </span>
    </label>
  );
}

function FloorCard({
  floor,
  breakEven,
  roas,
  aboveFloor,
  customerValue,
}: {
  floor: number | null;
  breakEven: number | null;
  roas: number;
  aboveFloor: boolean;
  customerValue: number | null;
}) {
  // Position on the 1.0–8.0 ROAS scale, as a percentage of the bar.
  const pos = (v: number) =>
    Math.min(100, Math.max(0, ((v - ROAS_MIN) / (ROAS_MAX - ROAS_MIN)) * 100));
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
        <TrendingUp className="h-4 w-4" aria-hidden="true" />
        Your minimum ROAS (floor)
      </div>
      <p className="mt-1 text-4xl font-extrabold text-secondary">
        {floor === null ? "–" : ratio(floor)}
      </p>
      <p className="mt-1 font-semibold text-secondary">
        Below this, you pay me nothing.
      </p>

      {floor !== null && (
        <div className="mt-5" aria-hidden="true">
          <div className="relative h-3 rounded-full bg-gray-100">
            <div
              className="absolute inset-y-0 right-0 rounded-r-full bg-green-500/25"
              style={{ left: `${pos(floor)}%` }}
            />
            <div
              className="absolute -top-1.5 h-6 w-0.5 bg-secondary"
              style={{ left: `${pos(floor)}%` }}
            />
            <div
              className={cn(
                "absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow",
                aboveFloor ? "bg-green-600" : "bg-gray-400"
              )}
              style={{ left: `${pos(roas)}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>1.0</span>
            <span>
              Your ROAS {roas.toFixed(1)} ·{" "}
              {aboveFloor ? "fee applies" : "no fee"}
            </span>
            <span>8.0</span>
          </div>
        </div>
      )}

      <p className="mt-4 text-sm text-muted-foreground">
        {breakEven === null
          ? "No ROAS can break even at this margin and commission rate."
          : `Break-even ROAS ${ratio(breakEven)}${customerValue === null ? "" : `, based on ${money(customerValue)} of customer value over 12 months`}, plus a ${Math.round((FLOOR_SAFETY_MARGIN - 1) * 100)}% safety margin.`}
      </p>
    </div>
  );
}

function Profit({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p
        className={cn(
          "text-3xl font-extrabold",
          value < 0 ? "text-red-600" : "text-secondary"
        )}
      >
        {money(value)}
      </p>
    </div>
  );
}

function SmallStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <p className="text-xs font-bold leading-tight text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-xl font-extrabold text-secondary">{value}</p>
    </div>
  );
}
