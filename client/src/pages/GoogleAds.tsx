import ChannelPage, {
  type ChannelConfig,
} from "@/components/offer/ChannelPage";
import { COMMISSION_RANGE, GOOGLE_ADS_FAQ } from "@/content/offer";
import { MapPin, PoundSterling, Search } from "lucide-react";

const config: ChannelConfig = {
  eyebrow: "Google Ads management",
  h1: "Google Ads management for small businesses",
  intro: `Show up when local customers search for exactly what you sell. I set up your Google Ads for free, then earn ${COMMISSION_RANGE} of the conversion value the campaigns bring you.`,
  logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
  logoAlt: "Google Ads logo",
  heroPoints: [
    "Free account and conversion tracking setup",
    "Keyword research, ad copy and campaign build",
    "Weekly optimisation and monthly reporting",
    "Your ad budget goes straight to Google",
  ],
  why: {
    title: "Why Google Ads works for small businesses",
    intro:
      "Google Ads reaches people at the moment they are looking for a business like yours.",
    cards: [
      {
        icon: Search,
        title: "Customers with intent",
        text: "Searches like “emergency plumber near me” or “buy linen dress” come from people ready to act, not just browse.",
      },
      {
        icon: MapPin,
        title: "Precise local targeting",
        text: "Target a town, a postcode area or a radius around your shop, and show ads only during the hours you can take calls.",
      },
      {
        icon: PoundSterling,
        title: "Measurable to the pound",
        text: "With conversion tracking in place, you see which keywords and ads bring sales, calls and enquiries, and what each one is worth.",
      },
    ],
  },
  campaigns: {
    title: "Google Ads campaigns I manage",
    intro:
      "I pick the campaign types that match your goals and budget, then build them properly.",
    items: [
      {
        title: "Search campaigns",
        text: "Text ads on Google search results for the keywords your customers use. The best starting point for most local and service businesses.",
      },
      {
        title: "Performance Max",
        text: "One campaign across Search, Shopping, YouTube, Display, Gmail and Maps, driven by your conversion data. Works well once tracking is solid.",
      },
      {
        title: "Shopping campaigns",
        text: "Product listings with image, price and shop name, fed from Google Merchant Center. Built for online shops.",
      },
      {
        title: "Calls, locations and remarketing",
        text: "Call and location assets that turn searches into phone calls and visits, plus remarketing to bring back people who visited but didn't buy.",
      },
    ],
  },
  included: {
    title: "Included in the free setup",
    items: [
      "Google Ads account setup or audit of your existing account",
      "Conversion tracking with Google Ads and GA4, including calls and forms",
      "Keyword research and negative keyword lists",
      "Campaign and ad group structure",
      "Responsive search ads and ad assets (sitelinks, callouts, calls, location)",
      "Location, schedule and budget settings",
      "Landing page recommendations",
    ],
  },
  optimise: {
    title: "How I keep improving results",
    items: [
      "Reviewing search terms and blocking wasted clicks",
      "Bidding towards conversion value, not cheap clicks",
      "Testing new headlines and descriptions",
      "Shifting budget to the keywords and campaigns that convert",
      "Monthly report showing conversions, conversion value and my fee",
    ],
  },
  proof: {
    eyebrow: "Case study · Online fashion shop",
    title: "Google Ads aligned with landing pages",
    text: "For Aftabgardoon, an online women's fashion shop, I ran search campaigns on high-intent product keywords and matched every ad to its landing page. Together with SEO and Instagram work, conversions grew 500% and traffic 300%.",
    stat: "+500%",
    statLabel: "conversions",
  },
  faqTitle: "Google Ads questions",
  faq: GOOGLE_ADS_FAQ,
  cta: { title: "Want more customers from Google search?" },
  other: {
    href: "/meta-ads-management/",
    label: "Meta Ads management",
    text: "Reach customers on Facebook and Instagram before they start searching. Same free setup, same pay-on-results model.",
  },
};

export default function GoogleAds() {
  return <ChannelPage c={config} />;
}
