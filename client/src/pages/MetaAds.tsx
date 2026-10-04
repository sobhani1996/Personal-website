import ChannelPage, {
  type ChannelConfig,
} from "@/components/offer/ChannelPage";
import { COMMISSION_RANGE, META_ADS_FAQ } from "@/content/offer";
import { Repeat, Target, Users } from "lucide-react";

const config: ChannelConfig = {
  eyebrow: "Meta Ads management",
  h1: "Meta Ads management for small businesses",
  intro: `Facebook and Instagram ads that bring leads, bookings and sales, not just likes. I set up your Meta Ads for free, then earn ${COMMISSION_RANGE} of the conversion value they generate.`,
  logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://meta.com&size=128",
  logoAlt: "Meta logo",
  heroPoints: [
    "Free Ads Manager, Pixel and Conversions API setup",
    "Audience research, ad copy and creative",
    "Ongoing testing and monthly reporting",
    "Your ad budget goes straight to Meta",
  ],
  why: {
    title: "Why Meta Ads works for small businesses",
    intro:
      "Meta Ads creates demand by putting your business in front of the right people before they start searching.",
    cards: [
      {
        icon: Users,
        title: "Reach in your area",
        text: "Millions of people in the UK use Facebook and Instagram every day, so you can reach new customers near you without waiting for them to search.",
      },
      {
        icon: Target,
        title: "Targeting that fits",
        text: "Reach people by location, age, interests and behaviour, or let Meta's Advantage+ audiences find buyers using your conversion data.",
      },
      {
        icon: Repeat,
        title: "Win back warm visitors",
        text: "Retarget people who visited your site, watched your videos or messaged you, when they are most likely to buy.",
      },
    ],
  },
  campaigns: {
    title: "Meta Ads campaigns I manage",
    intro:
      "Every campaign is built around a measurable result, not reach or engagement for its own sake.",
    items: [
      {
        title: "Lead generation",
        text: "Instant forms inside Facebook and Instagram, or enquiry forms on your website, for service businesses that need quote requests and bookings.",
      },
      {
        title: "Sales campaigns",
        text: "Conversion-optimised campaigns for online shops, including catalogue ads that show the products people viewed.",
      },
      {
        title: "Message campaigns",
        text: "Ads that open a WhatsApp, Messenger or Instagram chat with you, ideal for local businesses that sell in conversation.",
      },
      {
        title: "Retargeting",
        text: "Follow-up ads for website visitors, video viewers and past customers, to turn interest into purchases and repeat orders.",
      },
    ],
  },
  included: {
    title: "Included in the free setup",
    items: [
      "Business Manager and ad account setup or audit",
      "Meta Pixel and Conversions API (where your site supports it)",
      "Conversion events with values for sales and leads",
      "Audience research: local, interest, lookalike and retargeting",
      "Ad copy plus image and short-video creative",
      "Campaign structure, budgets and placements",
      "Lead form or landing page recommendations",
    ],
  },
  optimise: {
    title: "How I keep improving results",
    items: [
      "Testing new creatives before old ones wear out",
      "Moving budget to the audiences and ads that convert",
      "Checking lead quality, not just lead volume",
      "Keeping tracking accurate as Meta's systems change",
      "Monthly report showing conversions, conversion value and my fee",
    ],
  },
  proof: {
    eyebrow: "Case study · Online fashion shop",
    title: "A seasonal Instagram campaign that sold",
    text: "For Aftabgardoon's winter collection I set up the targeting, wrote the ad copy and monitored performance in Ads Manager. The campaign lifted sales 15% compared with the previous year.",
    stat: "+15%",
    statLabel: "year-on-year sales",
  },
  faqTitle: "Meta Ads questions",
  faq: META_ADS_FAQ,
  cta: { title: "Want Facebook and Instagram to bring you customers?" },
  other: {
    href: "/google-ads-management/",
    label: "Google Ads management",
    text: "Capture people who are already searching for what you sell. Same free setup, same pay-on-results model.",
  },
};

export default function MetaAds() {
  return <ChannelPage c={config} />;
}
