// Single source of truth for the collaboration model and shared copy.
// Pages, FAQ sections and the structured data in seo/ all read from here,
// so the offer is described the same way everywhere.

export const COMMISSION_MIN = 3;
export const COMMISSION_MAX = 7;
export const COMMISSION_RANGE = `${COMMISSION_MIN}–${COMMISSION_MAX}%`;

export const OFFER_HEADLINE = "Free setup. Paid only on results.";
export const OFFER_ONE_LINER = `I set up your Google Ads or Meta Ads for free. After launch, I earn ${COMMISSION_RANGE} of the conversion value they bring you. No setup fee, no monthly retainer.`;
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
    a: "Yes. I set up your Google Ads or Meta Ads campaigns at no cost: conversion tracking, keyword or audience research, ad copy, campaign structure and launch. You don't pay me a fee until the ads bring in conversions.",
  },
  {
    q: "How much do you charge?",
    a: `Between ${COMMISSION_MIN}% and ${COMMISSION_MAX}% of the conversion value your campaigns generate. The exact percentage depends on your industry, average order value and margins, and we agree it in writing before launch.`,
  },
  {
    q: "What counts as conversion value?",
    a: "The value of the sales or leads your ads bring in, tracked in Google Ads or Meta Ads Manager. For online shops it is the order value. For service businesses that get enquiries or bookings, we agree a fixed value per lead or booking before launch.",
  },
  {
    q: "Is my advertising budget included?",
    a: OFFER_AD_SPEND_NOTE,
  },
  {
    q: "What happens if the ads don't bring results?",
    a: "Then you don't pay me a fee. Your ad budget still goes to Google or Meta, but because I only earn when your campaigns convert, my goal is the same as yours: more profitable sales, not more spend.",
  },
  {
    q: "Should I choose Google Ads or Meta Ads?",
    a: "Google Ads puts you in front of people who are already searching for what you sell. Meta Ads (Facebook and Instagram) reaches people by location, interests and behaviour before they start searching. On the free strategy call we look at your business and pick the channel, or mix, most likely to be profitable.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Small businesses that can track sales or enquiries: local services and trades, clinics and salons, restaurants and cafés, gyms and studios, online shops and professional services.",
  },
  {
    q: "Where are you based?",
    a: "I'm based in Portsmouth, Hampshire. I work with small businesses across the UK, remotely or in person if you're local.",
  },
];

export const GOOGLE_ADS_FAQ: FaqItem[] = [
  {
    q: "Which Google Ads campaign types do you run?",
    a: "Mostly Search campaigns, so you appear when people search for your service, plus Performance Max and Shopping for online shops. I choose the campaign type that fits your business and budget rather than running everything at once.",
  },
  {
    q: "How do you stop wasted spend on Google Ads?",
    a: "With tight keyword targeting, regular search-term reviews, negative keyword lists, location and schedule settings, and bidding based on real conversion data instead of clicks.",
  },
  {
    q: "How is my Google Ads fee calculated?",
    a: `Conversion tracking is set up during the free setup, so Google Ads records the value of every sale or lead. My fee is ${COMMISSION_RANGE} of that conversion value, at the rate we agree before launch.`,
  },
  {
    q: "How quickly will I see results from Google Ads?",
    a: "Search campaigns can start bringing clicks and enquiries within days of launch. Most campaigns need a few weeks of data before bidding and targeting are fully optimised.",
  },
];

export const META_ADS_FAQ: FaqItem[] = [
  {
    q: "Do Meta Ads run on both Facebook and Instagram?",
    a: "Yes. Meta Ads Manager runs your ads across Facebook, Instagram, Messenger and the Audience Network. I choose placements based on where your customers respond best.",
  },
  {
    q: "What kind of Meta Ads campaigns do you run?",
    a: "Lead generation (instant forms or enquiries on your website), sales campaigns for online shops, message campaigns that start WhatsApp or Messenger chats, and retargeting for people who have already visited your site.",
  },
  {
    q: "How do you track sales from Meta Ads?",
    a: "During the free setup I install the Meta Pixel and, where your website allows, the Conversions API, so purchases and leads are recorded with their value in Meta Ads Manager.",
  },
  {
    q: "Do you create the ads as well?",
    a: "Yes. I write the ad copy and produce or direct the images and short videos, then test different versions to find what brings customers at the lowest cost.",
  },
];

export const PRICING_FAQ: FaqItem[] = [
  ...GENERAL_FAQ.slice(0, 5),
  {
    q: `How is my rate within ${COMMISSION_RANGE} decided?`,
    a: "It depends on your average order or customer value, your margins and how complex the campaigns are. Businesses with higher-value sales usually sit at the lower end of the range. We agree your rate in writing before launch, so there are no surprises.",
  },
  {
    q: "Do you take a cut of sales that didn't come from the ads?",
    a: "No. My fee only applies to conversions recorded by the Google Ads or Meta Ads campaigns I manage for you, not to your other sales.",
  },
  {
    q: "Is there a minimum ad budget?",
    a: "It depends on your market and competition. On the free strategy call I'll recommend a starting budget that gives the campaigns enough data to learn, and you decide what you're comfortable with.",
  },
];

export const PROOF = [
  {
    value: "+500%",
    label:
      "Conversion growth for an online fashion shop, using Google Ads, SEO and Instagram",
  },
  {
    value: "+300%",
    label: "Website traffic increase for the same shop",
  },
  {
    value: "+15%",
    label: "Year-on-year sales from a seasonal Meta Ads campaign on Instagram",
  },
  {
    value: "3+",
    label: "Years running paid campaigns on Google, Meta and LinkedIn",
  },
];

export function formatGBP(n: number) {
  return `£${n.toLocaleString("en-GB")}`;
}
