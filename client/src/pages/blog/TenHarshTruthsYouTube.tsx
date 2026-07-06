import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import { Link } from "wouter";

export default function TenHarshTruthsYouTube() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <article className="container max-w-3xl mx-auto px-4">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-secondary">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Articles
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1.5 text-sm font-medium rounded-full">
              Content Strategy
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight leading-tight">
              I Made Over 1,000 YouTube Videos. Here Are the 10 Harsh Truths I Wish I Knew Sooner.
            </h1>

            <div className="flex items-center justify-between border-b border-gray-100 pb-8">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-primary" />
                  <span className="font-medium text-secondary">Mori Sobhani</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  <span>Dec 31, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  <span>8 min read</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="rounded-full hidden sm:flex">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl animate-in fade-in zoom-in duration-1000 delay-200">
            <img loading="lazy" 
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200" 
              alt="YouTube Content Creation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-secondary prose-a:text-primary prose-img:rounded-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <p className="lead text-xl text-muted-foreground mb-8">
              Over the last six years, I have produced more than 1,200 videos for my main channel and over 2,500 videos across various platforms including Instagram and Telegram.
            </p>

            <p>
              If I could go back to day one and teach myself what I know now, I believe my growth would have been ten times faster. The path to YouTube success isn’t about luck; it’s about understanding how the platform actually works versus how we <em>think</em> it works.
            </p>

            <p>
              Here are the 10 most critical lessons I’ve learned from making thousands of videos.
            </p>

            <hr className="my-8 border-gray-200" />

            <h2>1. You Cannot Predict Virality</h2>
            <p>
              One of the first things I realized after my first 100 videos is that your intuition is often wrong.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>The Trap:</strong> You spend a week editing a masterpiece, and it flops.</li>
              <li><strong>The Surprise:</strong> You spend 20 minutes on a quick video, and it goes viral.</li>
            </ul>
            <p>
              I once made a reel in one hour that got <strong>30 times the views</strong> of a reel I spent a week perfecting. The lesson? <strong>Do not be afraid to upload "weak" videos.</strong> You are not the judge of what will go viral—the audience is.
            </p>

            <h2>2. "Make Trash" (Just Start)</h2>
            <p>
              This is the most important advice I give to new creators: <strong>Make Trash.</strong>
            </p>
            <p>
              When you overthink quality, you hesitate. You delete videos. You delay uploads. I have a video on my channel titled "Make Trash" that became one of my most successful uploads. Why? Because I stopped trying to be perfect.
            </p>
            <p>
              Especially in your first few months, quantity beats quality. Upload whatever you can. Let your channel build a library. Your skills will improve with every upload, but only if you actually hit "publish."
            </p>

            <h2>3. YouTube Plays the Long Game</h2>
            <p>
              Do not judge a video by its first 24 hours.
            </p>
            <p>
              I have a 3-minute video that performed terribly when I first uploaded it. The analytics were depressing—it was at the bottom of the chart. But two years later? That single video has earned me nearly <strong>$2,000</strong>.
            </p>
            <p>
              YouTube content is an asset that works for you forever. A video might sleep for months and then suddenly wake up when the algorithm finds the right audience. If you delete underperforming videos, you are killing potential future income.
            </p>

            <h2>4. Growth is Non-Linear</h2>
            <p>
              New YouTubers love to do "math" on their growth: <em>"I got 2 subscribers today, so I'll get 60 this month."</em>
            </p>
            <p>
              YouTube doesn't work like that. You might get zero subscribers for ten days, and then 100 subscribers in one afternoon.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>The Reality:</strong> Growth comes in jumps and spikes, not straight lines.</li>
              <li><strong>The Advice:</strong> If your views or subs flatline for a week, don't panic. It’s a natural part of the cycle.</li>
            </ul>

            <h2>5. Monetization Comes as a Surprise</h2>
            <p>
              99% of creators don't know they are about to be monetized until it happens.
            </p>
            <p>
              I’ve seen hundreds of students struggle with zero traction, and then suddenly, <em>one</em> video takes off. That single video brings in the remaining 3,000 hours of watch time and 800 subscribers needed for monetization. You are likely closer to success than you think—you just need that one piece of content to tip the scales.
            </p>

            <h2>6. The Market Advantage (Persian vs. English)</h2>
            <p>
              If you are creating content in a specific language market (like Persian), you have a distinct advantage over the English market.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Speed:</strong> In the English market, it might take 6 months to monetize. In smaller markets, you can often do it in 20 to 40 days because there is less competition.</li>
              <li><strong>Strategy:</strong> The best creators in smaller markets often take successful formats from English YouTube (like MrBeast) and adapt them. If you aren't researching English trends, you are falling behind.</li>
            </ul>

            <h2>7. The Income Roadmap: Quantity First, Then Quality</h2>
            <p>
              How do you scale your income from $100 to $1,000 a month?
            </p>
            <ol className="list-decimal pl-6 space-y-2 my-4">
              <li><strong>Phase 1 (Quantity):</strong> When you first monetize, you might make $100/month. To turn that into $300, simply increase your upload frequency. Go from 1 video a week to 3.</li>
              <li><strong>Phase 2 (Quality):</strong> Once you hit a ceiling with quantity, shift focus to quality. Better thumbnails, better hooks, and higher retention will increase your RPM (revenue per mille), taking you from $300 to $800+.</li>
            </ol>

            <h2>8. Treat YouTube Like a Business, Not a Job</h2>
            <p>
              An employee has a salary cap. A YouTuber does not.
            </p>
            <p>
              In the first year, focus on building the machine. You might work hundreds of hours for very little pay. But unlike a traditional job, you are building an asset. Once a channel is established, it can generate passive income, allowing you to launch a second or third channel with much less effort.
            </p>

            <h2>9. The Multi-Channel Vision</h2>
            <p>
              The hardest channel to build is your first one. You are learning to edit, speak, and understand analytics all at once.
            </p>
            <p>
              However, once you succeed, you can use that momentum to launch new channels. You can cross-promote and apply your skills instantly. My vision is to have multiple "shops" (channels) open, all generating revenue, rather than relying on just one.
            </p>

            <h2>10. Don't Wait for the Perfect Season</h2>
            <p>
              Imagine a gardener who has the best seeds but waits for the "perfect" weather to plant them. While he waits, weeds take over the garden.
            </p>
            <p>
              YouTube is a platform for <strong>doers</strong>. The person who starts today with a "trash" video and bad lighting will be miles ahead of the person who waits six months to buy a better camera.
            </p>
            
            <div className="bg-secondary/5 p-8 rounded-2xl my-8 border-l-4 border-primary">
              <p className="text-xl font-bold text-secondary m-0">
                Start now. Be creative. Be energetic. And don't be afraid to make trash.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
