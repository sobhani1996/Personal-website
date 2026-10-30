// Questions for the client brief at /brief/. The form, the review step and
// the email sent through Web3Forms are all built from this list.
import { COMMISSION_RANGE, OFFER_AD_SPEND_NOTE } from "./offer";

type Base = {
  id: string;
  label: string;
  hint?: string;
  /** Takes half the row on wider screens. */
  half?: boolean;
};

export type TextField = Base & {
  kind: "text";
  type?: "text" | "email" | "tel";
  inputMode?: "text" | "url" | "decimal" | "numeric" | "tel" | "email";
  autoComplete?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  /** Makes the field required; shown as the error when it's left empty. */
  required?: string;
};

export type LongTextField = Base & {
  kind: "textarea";
  placeholder?: string;
  rows?: number;
};

export type ChoiceOption = { value: string; detail?: string };

export type ChoiceField = Base & {
  kind: "choice";
  options: ChoiceOption[];
  multiple?: boolean;
  /** Choosing this option clears the others (e.g. "None of these"). */
  exclusive?: string;
  /** Large cards instead of compact chips. */
  cards?: boolean;
  /** Asks "Which one?" when the "Other" option is picked. */
  other?: boolean;
};

export type BriefField = TextField | LongTextField | ChoiceField;

export type BriefSection = {
  id: string;
  short: string;
  title: string;
  intro: string;
  note?: string;
  fields: BriefField[];
};

const opts = (...values: string[]): ChoiceOption[] =>
  values.map(value => ({ value }));

export const OTHER = "Other";

export const BRIEF_SECTIONS: BriefSection[] = [
  {
    id: "about",
    short: "About you",
    title: "About you and your business",
    intro: "The basics, so I know who I'm talking to and how to reach you.",
    fields: [
      {
        kind: "text",
        id: "name",
        label: "Your name",
        autoComplete: "name",
        required: "Please add your name.",
        half: true,
      },
      {
        kind: "text",
        id: "role",
        label: "Your role",
        placeholder: "e.g. Owner, manager",
        autoComplete: "organization-title",
        required: "Please add your role.",
        half: true,
      },
      {
        kind: "text",
        id: "business",
        label: "Business name",
        autoComplete: "organization",
        required: "Please add your business name.",
        half: true,
      },
      {
        kind: "text",
        id: "website",
        label: "Website",
        inputMode: "url",
        placeholder: 'yourbusiness.co.uk, or "none"',
        required: 'Please add your website, or type "none".',
        half: true,
      },
      {
        kind: "text",
        id: "email",
        label: "Email",
        type: "email",
        inputMode: "email",
        autoComplete: "email",
        required: "Please add your email.",
        half: true,
      },
      {
        kind: "text",
        id: "phone",
        label: "Phone / WhatsApp",
        type: "tel",
        inputMode: "tel",
        autoComplete: "tel",
        required: "Please add your phone or WhatsApp number.",
        half: true,
      },
      {
        kind: "choice",
        id: "contactBy",
        label: "Best way to reach you",
        hint: "Pick as many as you like.",
        multiple: true,
        options: opts("Email", "Phone call", "WhatsApp"),
      },
      {
        kind: "text",
        id: "location",
        label: "Business location and the areas you serve",
        placeholder: "e.g. Portsmouth, and anywhere within 20 miles",
      },
      {
        kind: "textarea",
        id: "sells",
        label: "What you sell, in one or two sentences",
        rows: 2,
      },
      {
        kind: "text",
        id: "running",
        label: "How long the business has been running",
        placeholder: "e.g. 3 years",
        half: true,
      },
      {
        kind: "text",
        id: "social",
        label: "Instagram / Facebook / LinkedIn links",
        placeholder: "Paste links or @names",
        half: true,
      },
    ],
  },
  {
    id: "goals",
    short: "Goals",
    title: "What you want from advertising",
    intro:
      "What you'd like the ads to do for you. Skip anything you're not sure about.",
    fields: [
      {
        kind: "choice",
        id: "channel",
        label: "Which channel are you interested in?",
        cards: true,
        options: [
          { value: "Google Ads", detail: "Search, Shopping, Performance Max" },
          { value: "Meta Ads", detail: "Facebook and Instagram" },
          { value: "Both", detail: "Google and Meta together" },
          { value: "Not sure", detail: "I'd like your advice" },
        ],
      },
      {
        kind: "choice",
        id: "goals",
        label: "What should a successful ad bring you?",
        hint: "Pick as many as you like.",
        multiple: true,
        options: opts(
          "Online sales",
          "Phone calls",
          "Enquiry or quote forms",
          "Bookings or appointments",
          "WhatsApp or Messenger messages",
          "Visits to your shop or venue"
        ),
      },
      {
        kind: "textarea",
        id: "problem",
        label: "What is the main problem you want ads to solve?",
      },
      {
        kind: "textarea",
        id: "success",
        label: "What would a good result look like in 3 months?",
        placeholder: "e.g. 20 more bookings a month",
      },
      {
        kind: "textarea",
        id: "promote",
        label: "Which products or services do you want to promote first?",
      },
      {
        kind: "text",
        id: "dontPromote",
        label: "Any you do NOT want to promote?",
        half: true,
      },
      {
        kind: "text",
        id: "seasonal",
        label: "Any seasonal peaks or quiet months?",
        half: true,
      },
    ],
  },
  {
    id: "customers",
    short: "Customers",
    title: "Your customers and competitors",
    intro:
      "Who buys from you and who you're up against. This shapes the targeting and the ad copy.",
    fields: [
      {
        kind: "textarea",
        id: "customer",
        label: "Who is your typical customer?",
        hint: "Age, location, job, situation.",
      },
      {
        kind: "textarea",
        id: "customerProblem",
        label: "What problem do they have when they come to you?",
      },
      {
        kind: "textarea",
        id: "whyYou",
        label: "Why do customers choose you over others?",
      },
      {
        kind: "textarea",
        id: "questions",
        label: "What do customers usually ask before they buy or book?",
      },
      {
        kind: "textarea",
        id: "competitors",
        label: "Who are your 2–3 main competitors?",
        hint: "Names or websites.",
        rows: 2,
      },
      {
        kind: "text",
        id: "adsYouLike",
        label: "Is there an ad or brand you like the look of?",
      },
      {
        kind: "choice",
        id: "assets",
        label: "What do you have that I can use in ads?",
        multiple: true,
        exclusive: "None yet",
        options: opts("Photos", "Videos", "Logo", "None yet"),
      },
      {
        kind: "text",
        id: "avoid",
        label: "Any words, claims or styles to avoid?",
      },
    ],
  },
  {
    id: "tracking",
    short: "Tracking",
    title: "Your current marketing and tracking",
    intro:
      "Tick what you already have. Don't worry if it's nothing: I set up tracking for free.",
    note: "My fee is based on tracked results, so this section matters most.",
    fields: [
      {
        kind: "choice",
        id: "tracking",
        label: "What do you already have?",
        multiple: true,
        exclusive: "None of these / not sure",
        options: opts(
          "A Google Ads account",
          "A Meta Business account",
          "Google Analytics (GA4)",
          "Meta Pixel",
          "Google Tag Manager",
          "Online booking or shop checkout",
          "A call-tracking number",
          "None of these / not sure"
        ),
      },
      {
        kind: "choice",
        id: "platform",
        label: "What is your website built with?",
        other: true,
        options: opts(
          "Shopify",
          "WordPress",
          "Wix",
          "Squarespace",
          OTHER,
          "Not sure"
        ),
      },
      {
        kind: "text",
        id: "webManager",
        label: "Who manages the website, and can they make changes?",
      },
      {
        kind: "textarea",
        id: "pastAds",
        label: "Have you run Google or Meta ads before? What happened?",
      },
      {
        kind: "text",
        id: "pastSpend",
        label: "Rough monthly ad spend in the past, if any",
        inputMode: "decimal",
        prefix: "£",
        half: true,
      },
      {
        kind: "text",
        id: "sources",
        label: "Where do most customers come from today?",
        placeholder: "e.g. word of mouth, Google Maps",
        half: true,
      },
      {
        kind: "choice",
        id: "currentHelp",
        label: "Is anyone else managing your ads or marketing?",
        options: opts(
          "No",
          "Yes, an agency",
          "Yes, a freelancer",
          "Yes, someone in-house"
        ),
      },
    ],
  },
  {
    id: "numbers",
    short: "Numbers",
    title: "Numbers, budget and timeline",
    intro: `These set your fee rate (${COMMISSION_RANGE} of conversion value) and the agreed value per lead. Rough figures are fine and stay confidential.`,
    note: OFFER_AD_SPEND_NOTE,
    fields: [
      {
        kind: "text",
        id: "orderValue",
        label: "Average order or job value",
        inputMode: "decimal",
        prefix: "£",
        half: true,
      },
      {
        kind: "text",
        id: "margin",
        label: "Rough profit margin on that",
        inputMode: "decimal",
        suffix: "%",
        half: true,
      },
      {
        kind: "text",
        id: "yearValue",
        label: "Average value of a new customer over a year",
        inputMode: "decimal",
        prefix: "£",
        half: true,
      },
      {
        kind: "text",
        id: "closeRate",
        label: "How many leads turn into paying customers?",
        placeholder: "e.g. 1 in 3",
        half: true,
      },
      {
        kind: "choice",
        id: "budget",
        label: "Monthly ad budget you're comfortable paying Google / Meta",
        options: opts(
          "Under £500",
          "£500 – £1,500",
          "£1,500 – £5,000",
          "Over £5,000",
          "Not sure yet"
        ),
      },
      {
        kind: "text",
        id: "capacity",
        label: "How many new customers a month can you handle?",
      },
      {
        kind: "choice",
        id: "start",
        label: "When would you like ads to go live?",
        options: opts(
          "As soon as possible",
          "Within a month",
          "In 1–3 months",
          "Just exploring"
        ),
      },
      {
        kind: "text",
        id: "deadline",
        label: "Any deadline or event to work towards?",
      },
    ],
  },
  {
    id: "working",
    short: "Working together",
    title: "Working together",
    intro:
      "Last section. A few practical details, and when suits you for a call.",
    fields: [
      {
        kind: "text",
        id: "decides",
        label: "Who makes the final decision on ads and spend?",
        half: true,
      },
      {
        kind: "text",
        id: "access",
        label: "Who will give me access to the ad accounts and website?",
        half: true,
      },
      {
        kind: "choice",
        id: "updates",
        label: "How often would you like updates?",
        options: opts("Weekly", "Every two weeks", "Monthly"),
      },
      {
        kind: "choice",
        id: "heard",
        label: "How did you hear about me?",
        other: true,
        options: opts(
          "Google search",
          "Recommendation",
          "Instagram",
          "LinkedIn",
          OTHER
        ),
      },
      {
        kind: "choice",
        id: "callDays",
        label: "Best days for a 30-minute strategy call",
        multiple: true,
        options: opts("Mon", "Tue", "Wed", "Thu", "Fri", "Sat"),
      },
      {
        kind: "choice",
        id: "callTimes",
        label: "Best times",
        multiple: true,
        options: [
          { value: "Morning", detail: "9am – 12pm" },
          { value: "Afternoon", detail: "12pm – 5pm" },
          { value: "Evening", detail: "5pm – 7pm" },
        ],
      },
      {
        kind: "textarea",
        id: "anythingElse",
        label: "Anything else I should know?",
      },
    ],
  },
];

export const BRIEF_NEXT_STEPS = [
  "I review your answers within 2 working days.",
  "We have a free 30-minute strategy call. I'll tell you honestly whether Google Ads or Meta Ads can be profitable for you.",
  "If it's a fit, we agree your fee rate and the value per lead in writing before launch.",
  "I set up tracking and build your campaigns for free.",
];
