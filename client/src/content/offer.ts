// Single source of truth for the collaboration model and shared copy.
// Pages, FAQ sections and the structured data in seo/ all read from here,
// so the offer is described the same way everywhere.

export const COMMISSION_MIN = 3;
export const COMMISSION_MAX = 7;
export const COMMISSION_RANGE = `${COMMISSION_MIN}–${COMMISSION_MAX}%`;

/** Commission by the store's current monthly online revenue (3-month average). */
export const COMMISSION_TIERS = [
  { revenue: "Under £10,000", rate: 7 },
  { revenue: "£10,000 to £30,000", rate: 5 },
  { revenue: "Over £30,000", rate: 3 },
];

/** The ads profit calculator page. */
export const CALCULATOR_HREF = "/roas-calculator/";

/** Optional consultancy, charged separately from ads management. */
export const CONSULTANCY = {
  href: "/digital-marketing-consultancy/",
  weeklyPrice: 195,
  weeklyHours: 6,
  hourlyRate: 45,
};
export const CONSULTANCY_EFFECTIVE_RATE =
  CONSULTANCY.weeklyPrice / CONSULTANCY.weeklyHours;
export const CONSULTANCY_SAVING = Math.round(
  (1 -
    CONSULTANCY.weeklyPrice /
      (CONSULTANCY.weeklyHours * CONSULTANCY.hourlyRate)) *
    100
);

export const OFFER_HEADLINE = "Free setup. Paid only on results.";
export const OFFER_ONE_LINER = `I set up Google Ads or Meta Ads for your Shopify store for free. After launch, I earn ${COMMISSION_RANGE} of the conversion value they bring you. No setup fee, no monthly retainer.`;
export const OFFER_AD_SPEND_NOTE =
  "Your ad budget is paid by you directly to Google or Meta. My fee is only the agreed percentage of conversion value.";

export const CONTACT = {
  email: "mori@mrsobhani.uk",
  emailAlt: "mori.sobhani@outlook.com",
  phoneDisplay: "07343 047 833",
  phoneHref: "tel:+447343047833",
  phoneE164: "+447343047833",
  whatsapp: "https://wa.me/447343047833",
  linkedin: "https://www.linkedin.com/in/mori-sobhani/",
  instagram: "https://www.instagram.com/mori.sobhani/",
  locality: "Portsmouth",
  region: "Hampshire",
  postalCode: "PO1 4LB",
  country: "GB",
};

export const EXAMPLE = {
  conversionValue: 5000,
  rate: 5,
};

export type FaqItem = { q: string; a: string };

export const GENERAL_FAQ: FaqItem[] = [
  {
    q: "Is the setup really free?",
    a: "Yes. I set up Google Ads or Meta Ads for your Shopify store at no cost: purchase tracking, product feed and catalogue, audience and keyword research, ad copy, campaign structure and launch. You don't pay me a fee until the ads bring in sales.",
  },
  {
    q: "How much do you charge?",
    a: `For ads management, between ${COMMISSION_MIN}% and ${COMMISSION_MAX}% of the conversion value your campaigns generate. The rate depends on your current monthly online revenue: 7% under £10,000, 5% from £10,000 to £30,000, and 3% above £30,000. Consultancy is optional and charged separately.`,
  },
  {
    q: "What counts as conversion value?",
    a: "The value of the orders your ads bring in, as recorded in Google Ads or Meta Ads Manager from your Shopify checkout. Shopify's official Google and Meta apps send each order's value to the ad platforms, so you can check every number yourself.",
  },
  {
    q: "Is my advertising budget included?",
    a: OFFER_AD_SPEND_NOTE,
  },
  {
    q: "What happens if the ads don't bring sales?",
    a: "Then you don't pay me a fee. Your ad budget still goes to Google or Meta, but because I only earn when your campaigns sell, my goal is the same as yours: more profitable sales, not more spend.",
  },
  {
    q: "Do you only work with Shopify stores?",
    a: "Yes. I focus on e-commerce brands that sell on Shopify. Shopify's official Google and Meta apps make purchase tracking and product feeds reliable, and my fee depends on accurate tracking. If you're about to move your store to Shopify, get in touch anyway.",
  },
  {
    q: "Should I choose Google Ads or Meta Ads?",
    a: "Google Ads (Shopping, Performance Max and Search) puts your products in front of people already searching for them. Meta Ads (Facebook and Instagram) finds new customers by interests and behaviour, and brings back visitors who viewed products or left items in their cart. On the free strategy call we look at your store and pick the channel, or mix, most likely to be profitable.",
  },
  {
    q: "What kind of Shopify stores do you work with?",
    a: "UK Shopify stores selling physical products, such as fashion and accessories, beauty, home and gifts, food and drink, and pet products, that want more profitable online sales.",
  },
  {
    q: "Where are you based?",
    a: "I'm based in Portsmouth, Hampshire, and work remotely with Shopify stores across the UK.",
  },
];

export const GOOGLE_ADS_FAQ: FaqItem[] = [
  {
    q: "Which Google Ads campaign types do you run for Shopify stores?",
    a: "Mainly Shopping and Performance Max campaigns, fed by your product feed in Google Merchant Center, plus Search campaigns for your brand and high-intent product searches. I choose what fits your catalogue and budget rather than running everything at once.",
  },
  {
    q: "Do I need Google Merchant Center?",
    a: "Yes, for Shopping and Performance Max. During the free setup I connect your Shopify store to Merchant Center through Shopify's Google & YouTube app and fix feed problems such as disapproved products or missing product details.",
  },
  {
    q: "How do you stop wasted spend on Google Ads?",
    a: "By grouping products by performance and margin, reviewing search terms, adding negative keywords, improving product titles in the feed, and bidding on conversion value (return on ad spend) instead of cheap clicks.",
  },
  {
    q: "How is my Google Ads fee calculated?",
    a: `Purchase tracking is set up during the free setup, so Google Ads records the value of every order. My fee is ${COMMISSION_RANGE} of that conversion value, at the rate we agree before launch.`,
  },
  {
    q: "How quickly will I see results from Google Ads?",
    a: "Shopping and Search campaigns can start bringing sales within days of launch. Performance Max and value-based bidding usually need a few weeks of data before they are fully optimised.",
  },
];

export const META_ADS_FAQ: FaqItem[] = [
  {
    q: "Do Meta Ads run on both Facebook and Instagram?",
    a: "Yes. Meta Ads Manager runs your ads across Facebook, Instagram, Messenger and the Audience Network. I choose placements based on where your customers buy.",
  },
  {
    q: "What kind of Meta Ads campaigns do you run for Shopify stores?",
    a: "Sales campaigns built for online stores: catalogue (dynamic product) ads from your Shopify products, Advantage+ campaigns to find new customers, and retargeting for people who viewed products or left items in their cart.",
  },
  {
    q: "How do you track sales from Meta Ads?",
    a: "During the free setup I connect your store with Shopify's Facebook & Instagram app, which sets up the Meta Pixel and Conversions API and syncs your product catalogue, so every purchase is recorded with its value in Meta Ads Manager.",
  },
  {
    q: "Do you create the ads as well?",
    a: "Yes. I write the ad copy and produce or direct product images and short videos, then test different versions to find what sells at the lowest cost.",
  },
];

export const PRICING_FAQ: FaqItem[] = [
  ...GENERAL_FAQ.slice(0, 5),
  {
    q: `How is my rate within ${COMMISSION_RANGE} decided?`,
    a: "By your current monthly online revenue, averaged over the three months before we start. Under £10,000 is 7%, £10,000 to £30,000 is 5%, and over £30,000 is 3%. We agree it in writing before launch.",
  },
  {
    q: "Do I have to buy consultancy?",
    a: "No. Ads management works on its own. I recommend consultancy when no one in your store is handling e-commerce marketing, because ads perform best when your product pages, email and offers support them.",
  },
  {
    q: "Do you take a cut of sales that didn't come from the ads?",
    a: "No. My fee only applies to orders recorded by the Google Ads or Meta Ads campaigns I manage for you, not to your other Shopify sales.",
  },
  {
    q: "Is there a minimum ad budget?",
    a: "It depends on your products and competition. On the free strategy call I'll recommend a starting budget that gives the campaigns enough data to learn, and you decide what you're comfortable with.",
  },
];

export const CONSULTANCY_FAQ: FaqItem[] = [
  {
    q: "Do I need consultancy to use your ads management?",
    a: "No. Ads management is commission-only and works on its own. I recommend consultancy when there's no one handling e-commerce marketing in your Shopify store, because it makes the ads more effective.",
  },
  {
    q: "Is there a minimum contract?",
    a: "No. Hourly support is pay-as-you-go, and the weekly package runs month by month.",
  },
  {
    q: "Can I switch between hourly and weekly?",
    a: "Yes. Many Shopify stores start hourly and move to the weekly package once they see the value.",
  },
];

export const CALCULATOR_FAQ: FaqItem[] = [
  {
    q: "What is break-even ROAS?",
    a: "The return on ad spend at which your ads exactly pay for themselves, including my commission. Below it, each sale from ads loses money; above it, the ads make a profit. It depends on your margin and your commission rate.",
  },
  {
    q: "What is the profitability floor?",
    a: "Your break-even ROAS plus a 10% safety margin. If your ads return less than the floor, you pay me no fee. Your actual floor is agreed in writing before launch, based on your real numbers.",
  },
  {
    q: "Should I choose profit or growth?",
    a: "Choose profit if every sale from ads must pay for itself. Choose growth if your customers reliably come back: you can accept a lower return on the first order, because repeat orders, mostly through email and organic, add profit later. Keep the orders-per-customer figure realistic.",
  },
];

export const PROOF = [
  {
    value: "2x",
    label:
      "Paid-channel sales at Mud Pies, a UK online shop, with Google, Meta and Microsoft Ads",
  },
  {
    value: "+500%",
    label:
      "Conversion growth for an online fashion shop, using Google Ads, SEO and Instagram",
  },
  {
    value: "+15%",
    label: "Year-on-year sales from a seasonal Meta Ads campaign on Instagram",
  },
  {
    value: "3+",
    label:
      "Years running paid campaigns on Google, Meta, Microsoft and LinkedIn",
  },
];

export function formatGBP(n: number) {
  const pence = Number.isInteger(n) ? 0 : 2;
  return `£${n.toLocaleString("en-GB", { minimumFractionDigits: pence, maximumFractionDigits: pence })}`;
}
