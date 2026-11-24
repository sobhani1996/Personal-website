// Questions for the client brief at /brief/. The form, the review step and
// the email sent through Web3Forms are all built from this list.
import {
  CALCULATOR_HREF,
  COMMISSION_RANGE,
  OFFER_AD_SPEND_NOTE,
} from "./offer";

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
  /** Makes the question required; shown as the error when nothing is picked. */
  required?: string;
  /** A message shown under the options while a given option is picked. */
  note?: { when: string; text: string };
};

export type BriefField = TextField | LongTextField | ChoiceField;

export type BriefSection = {
  id: string;
  short: string;
  title: string;
  intro: string;
  note?: string;
  /** A helpful link shown under the step intro. */
  link?: { href: string; text: string };
  fields: BriefField[];
};

const opts = (...values: string[]): ChoiceOption[] =>
  values.map(value => ({ value }));

export const OTHER = "Other";

export const BRIEF_SECTIONS: BriefSection[] = [
  {
    id: "about",
    short: "Your store",
    title: "About you and your store",
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
        placeholder: "e.g. Founder, ecommerce manager",
        autoComplete: "organization-title",
        required: "Please add your role.",
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
        kind: "text",
        id: "business",
        label: "Store name",
        autoComplete: "organization",
        required: "Please add your store name.",
        half: true,
      },
      {
        kind: "text",
        id: "website",
        label: "Store website",
        inputMode: "url",
        placeholder: "yourstore.co.uk",
        required: "Please add your store's website.",
        half: true,
      },
      {
        kind: "choice",
        id: "shopify",
        label: "Is your store on Shopify?",
        required: "Please tell me whether your store is on Shopify.",
        options: opts("Yes", "Not yet, I'm moving to Shopify", "No"),
        note: {
          when: "No",
          text: "I work only with Shopify stores, but you're welcome to send your brief. If you're thinking of moving to Shopify, I'm happy to talk it through.",
        },
      },
      {
        kind: "textarea",
        id: "sells",
        label: "What does your store sell?",
        placeholder: "e.g. Handmade candles and home fragrance",
        rows: 2,
      },
      {
        kind: "choice",
        id: "shipping",
        label: "Where do you ship to?",
        options: opts("UK only", "UK and Europe", "Worldwide"),
      },
    ],
  },
  {
    id: "goals",
    short: "Goals",
    title: "Your goals and customers",
    intro:
      "What you'd like the ads to do for your store, and who they should reach.",
    fields: [
      {
        kind: "choice",
        id: "channel",
        label: "Which channel are you interested in?",
        cards: true,
        options: [
          { value: "Google Ads", detail: "Shopping, Performance Max, Search" },
          { value: "Meta Ads", detail: "Facebook and Instagram" },
          { value: "Both", detail: "Google and Meta together" },
          { value: "Not sure", detail: "I'd like your advice" },
        ],
      },
      {
        kind: "choice",
        id: "goals",
        label: "What do you want the ads to do?",
        hint: "Pick as many as you like.",
        multiple: true,
        options: opts(
          "More online sales",
          "Find new customers",
          "Bring back past customers",
          "Better return on ad spend",
          "Launch new products",
          "Sell seasonal stock"
        ),
      },
      {
        kind: "textarea",
        id: "customer",
        label: "Who is your typical customer?",
        hint: "Age, location, interests, what they buy.",
      },
      {
        kind: "textarea",
        id: "success",
        label: "What would a good result look like in 3 months?",
        placeholder: "e.g. 100 more orders a month from ads",
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
    title: "Sales, budget and tracking",
    intro: `These help me set your fee rate (${COMMISSION_RANGE} of conversion value). Rough figures are fine and stay confidential.`,
    note: OFFER_AD_SPEND_NOTE,
    link: {
      href: CALCULATOR_HREF,
      text: "Not sure what your numbers mean? Try the profit calculator",
    },
    fields: [
      {
        kind: "text",
        id: "orderValue",
        label: "Average order value",
        inputMode: "decimal",
        prefix: "£",
        half: true,
      },
      {
        kind: "text",
        id: "margin",
        label: "Rough profit margin",
        inputMode: "decimal",
        suffix: "%",
        half: true,
      },
      {
        kind: "choice",
        id: "revenue",
        label: "Rough monthly online sales",
        hint: "Your average over the last three months. This sets your commission rate.",
        options: opts(
          "Under £10,000",
          "£10,000 – £30,000",
          "Over £30,000",
          "Prefer not to say"
        ),
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
          "Shopify's Google & YouTube app",
          "Shopify's Facebook & Instagram app",
          "Google Merchant Center",
          "A Google Ads account",
          "A Meta Business account",
          "Google Analytics (GA4)",
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
