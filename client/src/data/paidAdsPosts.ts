import type { BlogPost } from "./blogPosts";

// Cornerstone articles for the paid media services. Kept separate from the
// imported archive in blogPosts.ts so they are easy to find and update.
export const paidAdsPosts: BlogPost[] = [
  {
    id: 79,
    slug: "google-ads-for-shopify-stores-guide",
    title: "Google Ads for Shopify Stores: A Practical Guide for 2026",
    excerpt:
      "How to run Google Ads that sell for a Shopify store: connecting Shopify to Google, fixing your product feed, choosing Shopping, Performance Max or Search, break-even ROAS and bidding.",
    category: "Google Ads",
    date: "Nov 17, 2026",
    readTime: "9 min read",
    author: "Mori Sobhani",
    image: "",
    content: `
<p>When someone searches Google for "linen summer dress" or "vegan protein powder", they are not browsing. They are comparing products and getting ready to buy. For a Shopify store, Google Ads is how you put your products, with their photo and price, in front of those shoppers at exactly that moment.</p>
<p>It is also easy to waste money on. This guide covers how to set Google Ads up properly for a Shopify store, in the order that matters, so your budget turns into orders rather than clicks.</p>

<h2>Step 1: Connect Shopify to Google properly</h2>
<p>Everything else depends on this step. Shopify's free <strong>Google &amp; YouTube</strong> app connects your store to three Google tools:</p>
<ul>
<li><strong>Google Merchant Center</strong>, which holds your product feed: the titles, images, prices and stock levels Google uses to build Shopping ads.</li>
<li><strong>Google Ads</strong>, where your campaigns run and where purchases are recorded as conversions.</li>
<li><strong>Google Analytics 4</strong>, which shows what visitors do on your store, including those who don't buy.</li>
</ul>
<p>Once it is connected, check that purchases are recorded <strong>once per order</strong> and <strong>with the order value</strong>. A common problem is double counting, where the app and an old, manually installed tag both record the same purchase. That inflates your results and steers Google's bidding in the wrong direction. Place a test order, then confirm it appears once in Google Ads with the right value.</p>

<h2>Step 2: Get your product feed into shape</h2>
<p>Shopping ads have no keywords. Google decides which searches to show your products for by reading your product feed, so the feed does the job that keywords do in a Search campaign.</p>
<ul>
<li><strong>Titles</strong>: write them the way people search. "Women's Linen Midi Dress – Sage Green" matches far more buying searches than "The Clara".</li>
<li><strong>Images</strong>: clear product shots on a plain background, with no added text or watermarks.</li>
<li><strong>Identifiers</strong>: include the brand, and GTINs (barcodes) for branded products where you have them.</li>
<li><strong>Price and availability</strong>: these must match your store exactly, or products get disapproved.</li>
</ul>
<p>Check the diagnostics in Merchant Center every week. Disapproved products can't appear in Shopping ads at all, and the reasons, such as a missing image or a price mismatch, are usually quick to fix. A clean feed also lets your products appear in Google's free listings.</p>

<h2>Step 3: Choose the right campaign types</h2>
<ul>
<li><strong>Standard Shopping campaigns</strong> show product ads in Google results and the Shopping tab. They give you the most control and the clearest data on which products and searches sell.</li>
<li><strong>Performance Max</strong> runs across Search, Shopping, YouTube, Display, Gmail and Discover from one campaign, using your feed and your conversion data. It can scale well, but it needs accurate purchase tracking and enough sales to learn from.</li>
<li><strong>Search campaigns</strong> show text ads. For a Shopify store they are most useful for your brand name, so competitors can't take those clicks, and for a small set of high-intent product searches.</li>
</ul>
<p>For most stores, a sensible start is one Shopping or Performance Max campaign for your products plus a small brand Search campaign. Add more only when the data gives you a reason to.</p>

<h2>Step 4: Group products by what they earn</h2>
<p>Putting your whole catalogue in one campaign with one target treats a £12 accessory and a £180 bestseller the same way. Instead, group products so budget follows profit:</p>
<ul>
<li><strong>Bestsellers</strong> with proven sales, which deserve the most budget.</li>
<li><strong>High-margin products</strong>, which can afford a lower return on ad spend.</li>
<li><strong>Low-margin or low-stock products</strong>, which should get less budget or none at all.</li>
</ul>
<p>Custom labels in your feed make this easy: tag products as "bestseller" or "high margin", then use those labels to split campaigns or asset groups.</p>

<h2>Step 5: Work out your break-even ROAS</h2>
<p>Return on ad spend (ROAS) is the sales value your ads bring in divided by what they cost. A ROAS of 4 means £4 of sales for every £1 spent. Whether that is good depends entirely on your margins.</p>
<p>Your <strong>break-even ROAS</strong> is 1 divided by your margin. If you keep 40% of each sale after product, shipping and payment costs, your break-even ROAS is 1 ÷ 0.40 = 2.5. Below that, every sale from the ads loses money; above it, the ads make a profit. Knowing this number tells you what target to set and when to scale.</p>

<h2>Step 6: Set bidding and budget sensibly</h2>
<p>Once purchases are tracked with values, start with <strong>Maximise conversion value</strong>. When a campaign has a steady flow of sales, add a <strong>target ROAS</strong> comfortably above your break-even figure.</p>
<p>Avoid spreading a small budget across many campaigns, because each one then gets too little data to learn. One or two well-funded campaigns usually beat five starved ones.</p>

<h2>Don't forget your product pages</h2>
<p>Google can bring the right shopper to your store, but the product page has to close the sale. Make sure pages load quickly on a phone, show clear photos and reviews, and state delivery costs and times before checkout. Unexpected shipping costs are one of the most common reasons people abandon their cart.</p>

<h2>A simple weekly routine</h2>
<ol>
<li>Check that purchases are still recorded once, with the right value.</li>
<li>Fix any new disapprovals in Merchant Center.</li>
<li>Review search terms and add negative keywords for irrelevant searches.</li>
<li>Compare ROAS by campaign and product group, and move budget to what sells.</li>
<li>Improve titles and images for products with lots of views but few sales.</li>
</ol>

<h2>How to judge whether it's working</h2>
<p>Compare what Google Ads reports with the orders in Shopify. The numbers won't match exactly, because each platform counts sales in its own way, but the trend should agree. Look at return on ad spend against your break-even figure, and at how many orders come from new customers. If the ads bring in more profit than they cost, scale them carefully. If they don't, the answer is usually in the tracking, the feed or the product pages rather than the budget.</p>

<h2>Want someone to run it for you?</h2>
<p>I manage <a href="/google-ads-management/">Google Ads for Shopify stores</a> on a simple model: I set everything above up for free, and after launch my fee is 3–7% of the conversion value the campaigns bring in. The <a href="/pricing/">pricing page</a> explains exactly how that works.</p>
    `,
  },
  {
    id: 80,
    slug: "meta-ads-for-shopify-stores-guide",
    title: "Meta Ads for Shopify Stores: Facebook and Instagram Ads That Sell",
    excerpt:
      "A practical guide to Facebook and Instagram ads for Shopify stores: Pixel and Conversions API through Shopify, catalogue ads, Advantage+ campaigns, creative, budgets and measurement.",
    category: "Meta Ads",
    date: "Nov 17, 2026",
    readTime: "8 min read",
    author: "Mori Sobhani",
    image: "",
    content: `
<p>Google Ads reaches people who are already searching for a product. Meta Ads works the other way round: it shows your products to people who weren't looking yet, while they scroll Facebook and Instagram. For a Shopify store, that makes Meta one of the best ways to find new customers, and to bring back the ones who nearly bought.</p>
<p>It is also where many store owners lose money, usually by boosting posts or running ads without proper tracking. This guide covers how to do it properly.</p>

<h2>Step 1: Set up tracking through Shopify</h2>
<p>Meta's systems learn from your sales. If they can't see purchases, they can't find more people like your buyers. The simplest way to set up tracking on Shopify is Meta's official <strong>Facebook &amp; Instagram</strong> app, which connects:</p>
<ul>
<li>the <strong>Meta Pixel</strong>, which records what visitors do in their browser;</li>
<li>the <strong>Conversions API</strong>, which sends the same events from Shopify's servers, so fewer sales are lost to ad blockers and browser privacy settings;</li>
<li>your <strong>product catalogue</strong>, which keeps Meta in sync with your products, prices and stock.</li>
</ul>
<p>Set data sharing to the highest level, Maximum, which turns on the Conversions API. Then open Events Manager and check that the key events arrive: <em>ViewContent</em>, <em>AddToCart</em>, <em>InitiateCheckout</em> and <em>Purchase</em>, with the purchase value attached. Place a test order to confirm each purchase is counted once.</p>

<h2>Step 2: Use the right campaign setup</h2>
<p>Choose the <strong>Sales</strong> objective and optimise for purchases. Campaigns optimised for traffic or engagement find people who click and like, not people who buy. Most stores need just a few building blocks:</p>
<ul>
<li><strong>Advantage+ campaigns</strong> to find new customers. Meta's automation decides who sees your ads using your purchase data, and it usually does better than narrow interest targeting.</li>
<li><strong>Catalogue ads</strong> (also called dynamic product ads) to retarget people who viewed products or added to cart, showing them the exact items they looked at.</li>
<li>A <strong>simple structure</strong>: a few campaigns with enough budget each, rather than many small ad sets competing with each other.</li>
</ul>
<p>Avoid the Boost button for selling products. It is quick, but it offers far fewer options and usually optimises for engagement rather than sales.</p>

<h2>Step 3: Treat creative as your targeting</h2>
<p>With broad, automated targeting, the ad itself decides who stops scrolling. Creative is now the biggest lever you have:</p>
<ul>
<li><strong>Short videos</strong> that show the product in use, ideally filmed on a phone: an unboxing, a quick demo, a customer trying it on.</li>
<li><strong>Customer reviews and photos</strong>, which build trust faster than polished studio shots.</li>
<li><strong>Carousels</strong> to show a range or several colours.</li>
<li><strong>Vertical formats</strong>: 4:5 for feeds and 9:16 for Stories and Reels, with the hook in the first two or three seconds.</li>
</ul>
<p>Test genuinely different ideas, not small variations of one. A new angle, such as a different customer problem or a different product, teaches you far more than changing a button colour.</p>

<h2>Step 4: Send people to the right page</h2>
<p>Send clicks to the product or collection page shown in the ad, not your home page. Make the price, delivery cost and returns policy easy to find, show reviews near the "Add to cart" button, and make sure the page loads fast on a phone. An offer such as free delivery over a set amount can lift both your conversion rate and your average order value.</p>

<h2>Step 5: Give campaigns enough budget to learn</h2>
<p>Each ad set goes through a learning phase. Meta says it needs around 50 optimisation events, such as purchases, within a week to leave that phase. A small budget split across many ad sets keeps everything stuck in learning, while fewer, better-funded ad sets learn faster and perform more steadily.</p>
<p>Make changes gradually. Big budget jumps and frequent edits restart the learning and make results bounce around.</p>

<h2>Step 6: Measure what matters</h2>
<p>Meta counts purchases using its own attribution rules, by default within 7 days of a click or 1 day of viewing an ad. Shopify will show different numbers, because each platform counts in its own way. Rather than chasing an exact match:</p>
<ul>
<li>check that Meta's purchase trend broadly agrees with Shopify;</li>
<li>track <strong>return on ad spend</strong> against your break-even figure (1 divided by your margin);</li>
<li>watch your overall <strong>marketing efficiency</strong>: total store revenue divided by total ad spend across all channels.</li>
</ul>

<h2>Mistakes that waste budget</h2>
<ul>
<li>Running ads before the Pixel and Conversions API record purchases with values.</li>
<li>Optimising for clicks or engagement instead of purchases.</li>
<li>Running the same few ads for months until people stop responding to them.</li>
<li>Splitting a small budget across too many campaigns and ad sets.</li>
<li>Judging results after two or three days, before campaigns have had time to learn.</li>
</ul>

<h2>Want help with Meta Ads?</h2>
<p>I manage <a href="/meta-ads-management/">Meta Ads for Shopify stores</a>. I set up the tracking, catalogue and campaigns for free, and after launch my fee is 3–7% of the conversion value the ads bring in. See the <a href="/pricing/">pricing page</a> for how it works, or <a href="/contact/">book a free strategy call</a>.</p>
    `,
  },
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

<h2>Running a Shopify store?</h2>
<p>I now work only with Shopify stores. My <a href="/blog/google-ads-for-shopify-stores-guide/">guide to Google Ads for Shopify stores</a> covers product feeds, Shopping and Performance Max in detail, and I manage <a href="/google-ads-management/">Google Ads for Shopify stores</a> with free setup and pay-on-results pricing.</p>
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

<h2>Running a Shopify store?</h2>
<p>I now work only with Shopify stores. My <a href="/blog/meta-ads-for-shopify-stores-guide/">guide to Meta Ads for Shopify stores</a> covers catalogue ads, Advantage+ campaigns and tracking through Shopify, and I manage <a href="/meta-ads-management/">Meta Ads for Shopify stores</a> with free setup and pay-on-results pricing.</p>
    `,
  },
  {
    id: 78,
    slug: "pay-on-results-google-meta-ads-management",
    title: "Pay-on-Results Ads Management: How Performance-Based Pricing Works",
    excerpt:
      "Why monthly retainers and percentage-of-ad-spend fees reward the wrong things, and how a free-setup, pay-on-results model for Google Ads and Meta Ads works for Shopify stores.",
    category: "Paid Advertising",
    date: "Oct 4, 2026",
    readTime: "6 min read",
    author: "Mori Sobhani",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
    content: `
<p>Most Shopify store owners who have tried paid advertising have had the same experience: a monthly invoice from an agency or freelancer, a report full of impressions and clicks, and no clear idea whether the ads actually made money. The problem is often not the people running the ads but the way they are paid.</p>

<h2>The problem with traditional pricing</h2>
<p>There are two common ways to pay someone to manage Google Ads or Meta Ads:</p>
<ul>
<li><strong>A fixed monthly retainer.</strong> You pay the same amount whether the ads bring in ten sales or none. Results matter for keeping the client, but they don't change this month's invoice.</li>
<li><strong>A percentage of ad spend.</strong> The manager earns more when you spend more. That rewards bigger budgets, not better results.</li>
</ul>
<p>Neither model is dishonest, and plenty of good agencies use them. But in both cases the manager's income is not directly linked to the thing you care about: profitable sales.</p>

<h2>What pay-on-results means</h2>
<p>With performance-based pricing, the fee is tied to the results the ads generate. My version is simple:</p>
<ul>
<li><strong>Setup is free.</strong> I set up purchase tracking on your Shopify store, connect your product feed and catalogue, write the ads and build the campaigns at no cost.</li>
<li><strong>No monthly retainer.</strong> There is no fixed management fee.</li>
<li><strong>My fee is 3–7% of the conversion value</strong> the campaigns generate, at a rate agreed before launch.</li>
</ul>
<p>Your advertising budget is separate and is paid by you directly to Google or Meta. If the campaigns bring in nothing, my fee is nothing.</p>

<h2>What counts as conversion value?</h2>
<p>A conversion is a purchase on your Shopify store that comes from the ads. Shopify's official Google &amp; YouTube and Facebook &amp; Instagram apps send each order, with its value, to Google Ads and Meta Ads Manager. The conversion value is simply the order value of those sales.</p>
<p>Because both of us see the same numbers in Google Ads or Meta Ads Manager, the fee is transparent and easy to check.</p>

<h2>Two worked examples</h2>
<p>These are illustrations only, to show how the maths works.</p>
<p><strong>A homeware store.</strong> In one month, the ads generate £8,000 of tracked sales. At an agreed rate of 4%, the management fee is £320.</p>
<p><strong>A fashion brand with higher order values.</strong> The ads generate £20,000 of tracked sales in a month. At an agreed rate of 3%, the fee is £600.</p>

<h2>Check the numbers work for your margins</h2>
<p>Before launch, it's worth knowing the return on ad spend (ROAS) you need to break even. Suppose you keep 40% of each sale after product, shipping and payment costs, and the agreed fee is 5%. That leaves 35% of each sale to cover the ad spend, so your break-even ROAS is 1 ÷ 0.35, or about 2.9: £2.90 of sales for every £1 spent on ads. Anything above that is profit, and it's the number we plan the campaigns around.</p>

<h2>How the percentage is set</h2>
<p>The exact rate within 3–7% depends on a few things:</p>
<ul>
<li><strong>Average order value.</strong> Stores with higher-value orders usually pay a lower percentage.</li>
<li><strong>Profit margins.</strong> The fee has to leave you a healthy profit on every order.</li>
<li><strong>Complexity.</strong> Large catalogues and running Google and Meta together take more work to manage well.</li>
</ul>

<h2>Who this model suits</h2>
<p>Pay-on-results works best for Shopify stores that sell physical products, can track purchases and want advertising to pay for itself. It is less suitable if the main goal is brand awareness rather than direct sales. In that case a different arrangement makes more sense, and it's better to say so up front.</p>

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
<p>If you'd like to know what pay-on-results could look like for you, the <a href="/pricing/">pricing page</a> has the details, or you can <a href="/contact/">book a free 30-minute strategy call</a>. I'll tell you honestly whether <a href="/google-ads-management/">Google Ads</a>, <a href="/meta-ads-management/">Meta Ads</a> or both make sense for your store.</p>
    `,
  },
];
