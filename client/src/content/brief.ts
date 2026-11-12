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
        kind: "textarea",
        id: "sells",
        label: "What you sell, in one or two sentences",
        rows: 2,
      },
      {
        kind: "text",
        id: "location",
        label: "Where you're based and the areas you serve",
        placeholder: "e.g. Portsmouth, and anywhere within 20 miles",
      },
    ],
  },
  {
    id: "goals",
    short: "Goals",
    title: "Your goals and customers",
    intro: "What you'd like the ads to do for you, and who they should reach.",
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
        id: "customer",
        label: "Who is your typical customer?",
        hint: "Age, location, job, situation.",
      },
      {
        kind: "textarea",
        id: "success",
        label: "What would a good result look like in 3 months?",
        placeholder: "e.g. 20 more bookings a month",
      },
      {
        kind: "choice",
        id: "pastAds",
        label: "Have you run Google or Meta ads before?",
        options: opts("No, never", "Yes, in the past", "Yes, running now"),
      },
    ],
  },
  {
    id: "numbers",
    short: "Numbers",
    title: "Budget, numbers and tracking",
    intro: `These help me set your fee rate (${COMMISSION_RANGE} of conversion value). Rough figures are fine and stay confidential.`,
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
        kind: "choice",
        id: "tracking",
        label: "What do you already have?",
        hint: "Don't worry if it's nothing: I set up tracking for free.",
        multiple: true,
        exclusive: "None of these / not sure",
        options: opts(
          "A Google Ads account",
          "A Meta Business account",
          "Google Analytics (GA4)",
          "Meta Pixel",
          "Online booking or shop checkout",
          "None of these / not sure"
        ),
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
