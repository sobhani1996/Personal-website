import type { BlogPost } from "./blogPosts";

// Cornerstone articles for the paid media services. Kept separate from the
// imported archive in blogPosts.ts so they are easy to find and update.
export const paidAdsPosts: BlogPost[] = [
  {
    id: 76,
    slug: "google-ads-for-small-businesses-guide",
    title: "Google Ads for Small Businesses: A Practical Guide for 2026",
    excerpt:
      "How small businesses can run Google Ads that bring profitable customers: tracking, campaign types, keywords, ad copy, landing pages, budgets and the mistakes to avoid.",
    category: "Google Ads",
    date: "Oct 4, 2026",
    readTime: "9 min read",
    author: "Mori Sobhani",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    content: `
<p>Google Ads is one of the few marketing channels where you can reach people at the exact moment they are looking for what you sell. Someone searching "emergency electrician Portsmouth" or "buy oak dining table" is not browsing; they want to act. For a small business, that intent is what makes Google Ads so powerful, and also what makes a badly run account so expensive.</p>
<p>This guide walks through how to set up and run Google Ads properly, in the order that matters, so your budget turns into sales and enquiries rather than clicks that go nowhere.</p>

<h2>How Google Ads works in one minute</h2>
<p>Every time someone searches, Google runs an auction for the ad slots on the results page. You don't win simply by bidding the most. Your position depends on your bid and on the quality of your ad, which Google judges using three things: <strong>expected click-through rate</strong>, <strong>ad relevance</strong> to the search, and <strong>landing page experience</strong>. These make up your Quality Score. A relevant ad pointing to a useful page can beat a bigger budget, and you pay per click rather than per view.</p>

<h2>Step 1: Set up conversion tracking before you spend a pound</h2>
<p>The most common reason small business campaigns fail is that nobody can tell which clicks became customers. Without conversion tracking, Google's bidding systems optimise for clicks, and you are left guessing.</p>
<p>Before launch, make sure you track the actions that matter to your business:</p>
<ul>
<li><strong>Purchases</strong> on an online shop, with the order value passed to Google Ads.</li>
<li><strong>Enquiry forms</strong> and <strong>booking forms</strong>, counted only when they are actually submitted.</li>
<li><strong>Phone calls</strong> from your ads and from your website, ideally only calls over a minimum length.</li>
</ul>
<p>Use the Google tag or Google Tag Manager, link Google Ads with Google Analytics 4, and give each conversion a value. For lead-based businesses, a reasonable approach is to estimate what a typical enquiry or booking is worth and use that figure. Values let you see return on ad spend, not just cost per lead.</p>

<h2>Step 2: Choose the right campaign type</h2>
<p>Google offers several campaign types. Most small businesses should start simple:</p>
<ul>
<li><strong>Search campaigns</strong> show text ads on Google results for keywords you choose. They give you the most control and are the best starting point for local and service businesses.</li>
<li><strong>Shopping campaigns</strong> show product listings with an image and price, using a product feed from Google Merchant Center. They suit online shops.</li>
<li><strong>Performance Max</strong> runs across Search, Shopping, YouTube, Display, Gmail and Maps from one campaign and relies heavily on your conversion data. It can work well, but only once tracking is accurate and there is enough data for it to learn from.</li>
</ul>
<p>Whichever you choose, add assets such as sitelinks, callouts, a call asset with your phone number and a location asset linked to your Google Business Profile. They make your ad bigger and more useful at no extra cost per click.</p>

<h2>Step 3: Pick keywords with buying intent</h2>
<p>Good keyword research is less about volume and more about intent. "Boiler repair near me" is worth far more than "how does a boiler work". Group keywords into tight themes so each ad group matches a clear service or product, and pay attention to match types:</p>
<ul>
<li><strong>Exact match</strong> shows your ad for searches with the same meaning as your keyword.</li>
<li><strong>Phrase match</strong> allows searches that include the meaning of your keyword.</li>
<li><strong>Broad match</strong> reaches related searches and works best paired with conversion-based bidding and good negative keywords.</li>
</ul>
<p>Build a <strong>negative keyword</strong> list from day one: words like "free", "jobs", "training", "DIY" or competitor names you don't want to pay for. Then review the search terms report every week and keep adding to it. This single habit saves more wasted budget than almost anything else.</p>

<h2>Step 4: Write ads that earn the right click</h2>
<p>Responsive search ads let you supply up to 15 headlines and 4 descriptions, and Google tests the combinations. Use that space well:</p>
<ul>
<li>Repeat the core keyword or service so the ad clearly matches the search.</li>
<li>Mention your location for local services.</li>
<li>Give a reason to choose you: same-day appointments, free delivery, years of experience, reviews.</li>
<li>Include a clear next step, such as "Book online" or "Call for a free quote".</li>
</ul>
<p>It also helps to be specific enough to put off the wrong people. If you don't do small jobs, or only deliver within the UK, saying so prevents clicks you would pay for but never convert.</p>

<h2>Step 5: Send clicks to a page built to convert</h2>
<p>Sending all your ads to the home page is one of the most expensive habits in paid search. The page a visitor lands on should match the promise in the ad, load quickly on a phone, and make the next step obvious: a short form, a booking button or a tap-to-call number. If the ad says "same-day boiler repair", the page should say the same thing in its headline.</p>

<h2>Step 6: Set budget and bidding sensibly</h2>
<p>A small budget spread across many campaigns gives each one too little data to improve. It is usually better to start with one focused campaign and enough daily budget to collect conversions, then expand.</p>
<p>When conversion tracking is in place, start with a bidding strategy such as <strong>Maximise conversions</strong> (or <strong>Maximise conversion value</strong> for online shops). Once the campaign has a steady flow of conversions, you can move to a target cost per acquisition or target return on ad spend to control efficiency.</p>

<h2>Settings that quietly waste money</h2>
<ul>
<li><strong>Display Network expansion</strong> is switched on by default for new Search campaigns. Unless you mean to run display ads, untick it.</li>
<li><strong>Location targeting</strong> defaults to people "in, or regularly in, or who've shown interest in" your area. For local businesses, choosing people <strong>in or regularly in</strong> your locations usually avoids clicks from far away.</li>
<li><strong>Ad schedule</strong>: if you rely on phone calls, only show call-focused ads when someone can answer.</li>
<li><strong>Auto-applied recommendations</strong> can change your account without you noticing. Review them before accepting.</li>
</ul>

<h2>A simple weekly optimisation routine</h2>
<ol>
<li>Check that conversions are still recording correctly.</li>
<li>Review search terms, add negatives and add new converting terms as keywords.</li>
<li>Compare cost per conversion, or return on ad spend, by campaign and move budget to what works.</li>
<li>Pause poor-performing headlines and test new ones.</li>
<li>Look at landing page conversion rates and fix pages that lose visitors.</li>
</ol>

<h2>How to judge whether it's working</h2>
<p>Clicks and impressions are not the goal. The numbers that matter are <strong>cost per conversion</strong>, <strong>conversion value</strong> and <strong>return on ad spend</strong>, checked against what actually happened in your business: sales in your till, bookings in your diary, jobs won from enquiries. If the ads bring in more profit than they cost, scale them carefully. If they don't, the answer is usually in tracking, keywords or the landing page rather than the budget.</p>

<h2>Want someone to run it for you?</h2>
<p>I manage <a href="/google-ads-management/">Google Ads for small businesses</a> on a simple model: I set everything above up for free, and after launch my fee is 3–7% of the conversion value the campaigns bring in. You can read exactly how that works on the <a href="/pricing/">pricing page</a>.</p>
    `,
  },
  {
    id: 77,
    slug: "meta-ads-for-small-businesses-guide",
    title:
      "Meta Ads for Small Businesses: How to Get Customers, Not Just Likes",
    excerpt:
      "A practical guide to Facebook and Instagram ads for small businesses: tracking, objectives, audiences, creative, lead quality and budgets that bring real customers.",
    category: "Meta Ads",
    date: "Oct 4, 2026",
    readTime: "8 min read",
    author: "Mori Sobhani",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2000",
    content: `
<p>Facebook and Instagram can bring a small business a steady flow of new customers. They can also burn through a budget while delivering nothing but likes. The difference almost always comes down to a few decisions made before the first ad goes live.</p>
<p>Unlike Google search, where people come looking for you, Meta Ads interrupt people while they scroll. That means your job is to reach the right people and give them a reason to stop. Here is how to do that properly.</p>

<h2>Stop boosting posts</h2>
<p>The "Boost post" button is tempting, but boosted posts are usually optimised for engagement: likes, comments and shares. Meta will find the people most likely to engage, who are not necessarily the people most likely to buy. Running campaigns in <strong>Ads Manager</strong> lets you choose an objective tied to a business result, such as sales or leads, and gives you far more control over audiences, placements and creative.</p>

<h2>Set up tracking first</h2>
<p>Meta's delivery system learns from the results you report back. If it can't see sales or leads, it can't find more of them. Before you spend:</p>
<ul>
<li>Install the <strong>Meta Pixel</strong> on your website.</li>
<li>Where your platform supports it, set up the <strong>Conversions API</strong>, which sends events from your server and makes tracking more reliable when browsers block cookies.</li>
<li>Track the events that matter, such as <strong>Purchase</strong>, <strong>Lead</strong>, <strong>Schedule</strong> or <strong>Contact</strong>, and pass a value with each one.</li>
</ul>
<p>Shopify, WooCommerce and many booking systems have official integrations that make this much easier than it used to be.</p>

<h2>Choose the right objective</h2>
<p>The objective tells Meta what to optimise for, so pick the one closest to money:</p>
<ul>
<li><strong>Sales</strong> for online shops and any business that can track purchases or bookings on its website.</li>
<li><strong>Leads</strong> for service businesses that need enquiries. You can collect them with an <strong>instant form</strong> inside Facebook and Instagram, or send people to a form on your site.</li>
<li><strong>Engagement</strong> with a messaging destination if you sell through conversations on WhatsApp, Messenger or Instagram.</li>
</ul>
<p>Traffic and awareness objectives have their place, but they rarely pay back directly for a small business on a limited budget.</p>

<h2>Audiences: go broader than you think, then retarget</h2>
<p>Meta's targeting has changed a lot. Detailed interest targeting is less precise than it used to be, while Meta's own systems have become good at finding buyers when they are given clear conversion data. A sensible structure for most small businesses:</p>
<ul>
<li><strong>Prospecting</strong>: your location or delivery area, a sensible age range, and either broad targeting or Advantage+ audience, letting the creative and conversion data do the work.</li>
<li><strong>Lookalike audiences</strong> based on past customers or leads, if you have a few hundred of them.</li>
<li><strong>Retargeting</strong>: people who visited your website, watched your videos, engaged with your page or messaged you, shown a more direct offer.</li>
</ul>
<p>For local businesses, check the location setting carefully so you reach people who live in or are currently in your area, not just people who once showed interest in it.</p>

<h2>Your creative is your targeting</h2>
<p>On Meta, the ad itself decides who stops scrolling. Strong small business creative usually has:</p>
<ul>
<li>A hook in the first line or first two seconds that speaks to a specific customer and problem.</li>
<li>Real photos or short videos of your product, your work or your team. Polished stock images often perform worse.</li>
<li>Proof: reviews, before-and-after results, numbers of happy customers.</li>
<li>A clear offer and one call to action.</li>
<li>The right format: vertical 9:16 video for Stories and Reels, and 4:5 or square for the feed.</li>
</ul>
<p>Test three to five different ideas at once rather than tiny variations of one, then keep the winners and replace the rest as they start to tire.</p>

<h2>Protect lead quality</h2>
<p>Instant forms make it very easy to submit an enquiry, which can mean a lot of low-quality leads. To keep quality up:</p>
<ul>
<li>Use the <strong>higher intent</strong> form type, which adds a review step before submitting.</li>
<li>Ask one or two qualifying questions, such as postcode, budget or timescale.</li>
<li>Contact new leads quickly. Speed of response makes a big difference to how many become customers.</li>
<li>Judge campaigns on booked jobs and sales, not just the number of leads.</li>
</ul>

<h2>Budget and the learning phase</h2>
<p>Every new ad set goes through a learning phase while Meta works out who to show it to. Meta's guidance is that an ad set needs roughly 50 optimisation events within a week to exit learning. Small budgets split across many ad sets rarely get there, so consolidate: fewer campaigns and ad sets, each with enough budget. Avoid making big edits every day, as significant changes restart learning.</p>

<h2>Measure what counts</h2>
<p>Watch <strong>cost per result</strong>, <strong>return on ad spend</strong> and, most importantly, what happens after the click. Compare the leads and sales Meta reports with your own records. If Meta says 40 leads and you booked 4 jobs, the problem may be lead quality or follow-up rather than the ads.</p>

<h2>Common mistakes to avoid</h2>
<ul>
<li>Boosting posts instead of running conversion-focused campaigns.</li>
<li>Launching without the Pixel or with broken events.</li>
<li>Targeting so narrow that delivery becomes expensive and unstable.</li>
<li>Running the same creative for months until it stops working.</li>
<li>Judging success on likes, reach or clicks.</li>
</ul>

<h2>Want help with your Meta Ads?</h2>
<p>I run <a href="/meta-ads-management/">Meta Ads for small businesses</a> with free setup, including the Pixel, Conversions API, audiences and creative. After launch I earn 3–7% of the conversion value the campaigns generate, so I only get paid when the ads work. The <a href="/pricing/">pricing page</a> explains the details.</p>
    `,
  },
  {
    id: 78,
    slug: "pay-on-results-google-meta-ads-management",
    title: "Pay-on-Results Ads Management: How Performance-Based Pricing Works",
    excerpt:
      "Why monthly retainers and percentage-of-ad-spend fees reward the wrong things, and how a free-setup, pay-on-results model for Google Ads and Meta Ads works in practice.",
    category: "Paid Advertising",
    date: "Oct 4, 2026",
    readTime: "6 min read",
    author: "Mori Sobhani",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
    content: `
<p>Most small business owners who have tried paid advertising have had the same experience: a monthly invoice from an agency or freelancer, a report full of impressions and clicks, and no clear idea whether the ads actually made money. The problem is often not the people running the ads but the way they are paid.</p>

<h2>The problem with traditional pricing</h2>
<p>There are two common ways to pay someone to manage Google Ads or Meta Ads:</p>
<ul>
<li><strong>A fixed monthly retainer.</strong> You pay the same amount whether the ads bring in ten sales or none. Results matter for keeping the client, but they don't change this month's invoice.</li>
<li><strong>A percentage of ad spend.</strong> The manager earns more when you spend more. That rewards bigger budgets, not better results.</li>
</ul>
<p>Neither model is dishonest, and plenty of good agencies use them. But in both cases the manager's income is not directly linked to the thing you care about: profitable customers.</p>

<h2>What pay-on-results means</h2>
<p>With performance-based pricing, the fee is tied to the results the ads generate. My version is simple:</p>
<ul>
<li><strong>Setup is free.</strong> I set up conversion tracking, research keywords or audiences, write the ads and build the campaigns at no cost.</li>
<li><strong>No monthly retainer.</strong> There is no fixed management fee.</li>
<li><strong>My fee is 3–7% of the conversion value</strong> the campaigns generate, at a rate agreed before launch.</li>
</ul>
<p>Your advertising budget is separate and is paid by you directly to Google or Meta. If the campaigns bring in nothing, my fee is nothing.</p>

<h2>What counts as conversion value?</h2>
<p>A conversion is an action that matters to your business, recorded by the ad platform through the tracking set up at the start. Its value depends on the type of business:</p>
<ul>
<li><strong>Online shops</strong>: the value is the order value of each sale that comes from the ads.</li>
<li><strong>Service and local businesses</strong>: we agree a fixed value for each lead or booking before launch, based on what a typical customer is worth to you.</li>
</ul>
<p>Because both of us see the same numbers in Google Ads or Meta Ads Manager, the fee is transparent and easy to check.</p>

<h2>Two worked examples</h2>
<p>These are illustrations only, to show how the maths works.</p>
<p><strong>An online shop.</strong> In one month, the ads generate £8,000 of tracked sales. At an agreed rate of 4%, the management fee is £320.</p>
<p><strong>A local clinic.</strong> We agree that a booked appointment is worth £80. The ads bring in 25 bookings, so the conversion value is £2,000. At an agreed rate of 6%, the fee is £120.</p>

<h2>How the percentage is set</h2>
<p>The exact rate within 3–7% depends on a few things:</p>
<ul>
<li><strong>Average sale or customer value.</strong> Higher-value sales usually mean a lower percentage.</li>
<li><strong>Profit margins.</strong> The fee has to leave you a healthy profit on every conversion.</li>
<li><strong>Complexity.</strong> Many products, locations or channels take more work to manage well.</li>
</ul>

<h2>Who this model suits</h2>
<p>Pay-on-results works best for businesses that can track a sale, booking or enquiry and want advertising to pay for itself. It is less suitable if conversions can't be tracked at all, or if the main goal is brand awareness rather than direct sales. In those cases a different arrangement makes more sense, and it's better to say so up front.</p>

<h2>Questions to ask any ads manager</h2>
<p>Whoever you work with, these questions help you understand what you're paying for:</p>
<ol>
<li>How will conversions be tracked, and can I see the same data you see?</li>
<li>How are you paid, and what does that reward?</li>
<li>Whose name are the ad accounts in?</li>
<li>What will you report each month, and how does it connect to my sales?</li>
<li>What happens if the campaigns don't perform?</li>
</ol>

<h2>See if it fits your business</h2>
<p>If you'd like to know what pay-on-results could look like for you, the <a href="/pricing/">pricing page</a> has the details, or you can <a href="/contact/">book a free 30-minute strategy call</a>. I'll tell you honestly whether <a href="/google-ads-management/">Google Ads</a>, <a href="/meta-ads-management/">Meta Ads</a> or both make sense for your business.</p>
    `,
  },
];
