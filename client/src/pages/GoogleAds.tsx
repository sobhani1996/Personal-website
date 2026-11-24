import ChannelPage, {
  type ChannelConfig,
} from "@/components/offer/ChannelPage";
import { COMMISSION_RANGE, GOOGLE_ADS_FAQ } from "@/content/offer";
import { PoundSterling, Search, ShoppingBag } from "lucide-react";

const config: ChannelConfig = {
  eyebrow: "E-commerce Google Ads",
  h1: "E-commerce Google Ads management for Shopify stores",
  intro: `Show your products to people searching for exactly what you sell. I set up Google Ads for your Shopify store for free, then earn ${COMMISSION_RANGE} of the conversion value the campaigns bring you.`,
  logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
  logoAlt: "Google Ads logo",
  heroPoints: [
    "Free Merchant Center, product feed and purchase tracking setup",
    "Shopping, Performance Max and Search campaigns",
    "Weekly optimisation and monthly reporting",
    "Your ad budget goes straight to Google",
  ],
  why: {
    title: "Why Google Ads works for Shopify e-commerce stores",
    intro:
      "Google Ads reaches shoppers at the moment they are looking for products like yours.",
    cards: [
      {
        icon: Search,
        title: "Shoppers ready to buy",
        text: "Searches like “linen summer dress” or “vegan protein powder” come from people comparing products and ready to order.",
      },
      {
        icon: ShoppingBag,
        title: "Your products, front and centre",
        text: "Shopping ads show your product image, price and store name right in Google's results, before anyone clicks.",
      },
      {
        icon: PoundSterling,
        title: "Measurable to the pound",
        text: "With purchase tracking from Shopify, you see which products, searches and campaigns bring orders, and what each one is worth.",
      },
    ],
  },
  campaigns: {
    title: "E-commerce Google Ads campaigns I manage",
    intro:
      "I pick the campaign types that match your Shopify catalogue and budget, then build them properly.",
    items: [
      {
        title: "Shopping campaigns",
        text: "Product listings with image, price and store name, fed from your Shopify products through Google Merchant Center.",
      },
      {
        title: "Performance Max",
        text: "One campaign across Search, Shopping, YouTube, Display and Gmail, driven by your purchase data. Works well once tracking is solid.",
      },
      {
        title: "Search campaigns",
        text: "Text ads for your brand name and high-intent product searches, to win customers who know what they want.",
      },
      {
        title: "Remarketing",
        text: "Bring back shoppers who viewed products or added to cart but didn't check out, across Google's network and YouTube.",
      },
    ],
  },
  included: {
    title: "Included in the free setup",
    items: [
      "Google Ads account setup or audit of your existing account",
      "Shopify's Google & YouTube app connected to Google Ads and Merchant Center",
      "Purchase tracking with order values, plus GA4",
      "Product feed fixes: titles, images and disapproved products",
      "Campaign structure by product, margin and performance",
      "Search ads for your brand and best-selling products",
      "Budget and bidding settings based on conversion value",
    ],
  },
  optimise: {
    title: "How I keep improving your e-commerce results",
    items: [
      "Reviewing search terms and blocking wasted clicks",
      "Bidding towards conversion value and return on ad spend",
      "Improving product titles and images in the feed",
      "Shifting budget to the products and campaigns that sell",
      "Monthly report showing sales, conversion value and my fee",
    ],
  },
  proof: {
    eyebrow: "E-commerce case study · Mud Pies, UK online shop",
    title: "Paid-channel sales doubled",
    text: "As Paid Media Specialist at Mud Pies since February 2026, I run their Google Ads alongside Meta Ads and Microsoft Ads (Bing). Sales from paid channels have doubled. Earlier, for online fashion shop Aftabgardoon, Google Ads and SEO work grew conversions by 500%.",
    stat: "2x",
    statLabel: "paid-channel sales",
  },
  faqTitle: "E-commerce Google Ads questions",
  faq: GOOGLE_ADS_FAQ,
  cta: { title: "Want more Shopify sales from Google Shopping and Search?" },
  other: {
    href: "/meta-ads-management/",
    label: "Meta Ads for Shopify",
    text: "Find new customers on Facebook and Instagram and bring back shoppers who left items in their cart. Same free setup, same pay-on-results model.",
  },
};

export default function GoogleAds() {
  return <ChannelPage c={config} />;
}
