import ChannelPage, {
  type ChannelConfig,
} from "@/components/offer/ChannelPage";
import { COMMISSION_RANGE, META_ADS_FAQ } from "@/content/offer";
import { Repeat, Target, Users } from "lucide-react";

const config: ChannelConfig = {
  eyebrow: "Meta Ads for Shopify stores",
  h1: "Meta Ads management for Shopify stores",
  intro: `Facebook and Instagram ads that sell your products, not just collect likes. I set up Meta Ads for your Shopify store for free, then earn ${COMMISSION_RANGE} of the conversion value they generate.`,
  logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://meta.com&size=128",
  logoAlt: "Meta logo",
  heroPoints: [
    "Free Pixel, Conversions API and catalogue setup through Shopify",
    "Audience research, ad copy and product creative",
    "Ongoing testing and monthly reporting",
    "Your ad budget goes straight to Meta",
  ],
  why: {
    title: "Why Meta Ads works for Shopify stores",
    intro:
      "Meta Ads creates demand by showing your products to the right people before they start searching.",
    cards: [
      {
        icon: Users,
        title: "Find new customers",
        text: "Millions of people in the UK scroll Facebook and Instagram every day. Show them your products before they think to search for them.",
      },
      {
        icon: Target,
        title: "Targeting from your sales data",
        text: "With purchases tracked from Shopify, Meta's Advantage+ campaigns can find people who look like your best customers.",
      },
      {
        icon: Repeat,
        title: "Win back shoppers",
        text: "Remind people who viewed a product or left items in their cart, with ads showing the exact products they looked at.",
      },
    ],
  },
  campaigns: {
    title: "Meta Ads campaigns I manage",
    intro:
      "Every campaign is built around tracked sales, not reach or engagement for its own sake.",
    items: [
      {
        title: "Catalogue ads",
        text: "Dynamic product ads built from your Shopify catalogue, showing each person the products most relevant to them.",
      },
      {
        title: "Advantage+ campaigns",
        text: "Meta's automated sales campaigns, fed with your Shopify purchase data to find new buyers efficiently.",
      },
      {
        title: "Retargeting",
        text: "Follow-up ads for product viewers, cart abandoners and past customers, to turn interest into orders and repeat purchases.",
      },
      {
        title: "Launches and seasonal sales",
        text: "Campaigns for new collections, Black Friday, Christmas and other peaks, planned ahead with fresh creative.",
      },
    ],
  },
  included: {
    title: "Included in the free setup",
    items: [
      "Business Manager and ad account setup or audit",
      "Shopify's Facebook & Instagram app: Meta Pixel and Conversions API",
      "Product catalogue synced from Shopify",
      "Purchase, add-to-cart and checkout events with values",
      "Audience research: interest, lookalike and retargeting",
      "Ad copy plus product image and short-video creative",
      "Campaign structure, budgets and placements",
    ],
  },
  optimise: {
    title: "How I keep improving results",
    items: [
      "Testing new creatives before old ones wear out",
      "Moving budget to the products, audiences and ads that sell",
      "Watching return on ad spend, not just clicks",
      "Keeping tracking accurate as Meta and Shopify change",
      "Monthly report showing sales, conversion value and my fee",
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
  cta: { title: "Want Facebook and Instagram to sell your products?" },
  other: {
    href: "/google-ads-management/",
    label: "Google Ads management",
    text: "Put your products in front of people already searching on Google. Same free setup, same pay-on-results model.",
  },
};

export default function MetaAds() {
  return <ChannelPage c={config} />;
}
