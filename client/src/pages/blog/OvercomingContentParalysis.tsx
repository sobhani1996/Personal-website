import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, User, Lightbulb, Layers, Repeat } from "lucide-react";
import { Link } from "wouter";

export default function OvercomingContentParalysis() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <article className="container max-w-3xl mx-auto px-4">
          {/* Back Link */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
            </Button>
          </Link>

          {/* Header */}
          <header className="mb-12 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
                Content Strategy
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center">
                <Calendar className="w-3 h-3 mr-1" /> Dec 26, 2025
              </span>
              <span className="text-sm text-muted-foreground flex items-center">
                <Clock className="w-3 h-3 mr-1" /> 6 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
              Overcoming Content Paralysis: A Practical Guide to Consistent Posting
            </h1>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="font-bold text-secondary text-sm">Mori Sobhani</p>
                  <p className="text-xs text-muted-foreground">Digital Marketing Specialist</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-full border-gray-200 hover:border-primary hover:text-primary">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="rounded-[2rem] overflow-hidden mb-12 shadow-lg h-[400px] relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            <img loading="lazy" 
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200" 
              alt="Writer staring at a blank screen representing content paralysis" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-gray max-w-none prose-headings:text-secondary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <p className="lead text-xl text-muted-foreground mb-8">
              The number one question I get asked by clients and peers alike is: <strong>"How do you know what to post about?"</strong>
            </p>

            <p>
              The honest answer? 25% of the time, I don’t.
            </p>

            <p>
              And that’s not a failure state. That’s just the reality of maintaining a consistent digital presence. We often imagine that successful content creators are overflowing with endless inspiration, but the truth is far more relatable.
            </p>

            <h2>The "Blank Screen" Problem</h2>

            <p>
              You sit down with the intention to write. You open LinkedIn, Facebook, or your blog editor. And suddenly, nothing feels clear enough to turn into a post. The cursor blinks. The coffee gets cold.
            </p>

            <p>
              In this moment, you usually face two choices:
            </p>
            <ul>
              <li>Force something out that doesn’t sound like you (and likely won't perform well).</li>
              <li>Decide to "do it later" and inevitably skip the day entirely.</li>
            </ul>

            <p>
              <em>Mamma mia!</em> It's a cycle that kills consistency faster than anything else. But the root cause isn't a lack of creativity—it's <strong>decision fatigue</strong>.
            </p>

            <h2>Strategy 1: Remove the Decision (The "Spark" Method)</h2>

            <p>
              What helped me significantly was removing the moment where I have to <strong>decide</strong> what’s worth posting. Spending your creative energy on <em>choosing</em> a topic leaves you with little energy to actually <em>write</em> about it.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
              <h3 className="flex items-center text-blue-800 mt-0 mb-4">
                <Lightbulb className="w-5 h-5 mr-2" />
                My Simple Workflow
              </h3>
              <ol className="mb-0">
                <li><strong>Use an Idea Generator:</strong> I use tools like MagicPost.in or simple prompt libraries to throw in a broad theme (e.g., "SEO trends" or "Client management").</li>
                <li><strong>Scan and Select:</strong> I quickly scan the generated ideas until one clicks. I don't look for perfection; I look for a spark.</li>
                <li><strong>Trim and Rewrite:</strong> I take that core idea and rewrite it entirely in my own voice. This is crucial—tools give you the <em>what</em>, but you must provide the <em>how</em> and <em>why</em>.</li>
                <li><strong>Focus on the Hook:</strong> Once the body is written, I spend my remaining energy crafting a compelling hook to grab attention.</li>
              </ol>
            </div>

            <h2>Strategy 2: Document, Don't Just Create</h2>

            <p>
              Another powerful way to overcome paralysis is to shift your mindset from "Creator" to "Documenter." This is a concept popularized by Gary Vaynerchuk, and it works wonders for B2B professionals.
            </p>
            
            <p>
              Instead of trying to invent a groundbreaking theory, simply document what you did today:
            </p>
            <ul>
              <li>Did you solve a tricky problem for a client? <strong>That's a post.</strong></li>
              <li>Did you learn a new shortcut in Google Analytics? <strong>That's a post.</strong></li>
              <li>Did you disagree with a popular industry trend? <strong>That's a post.</strong></li>
            </ul>

            <h2>Strategy 3: The "Content Pillars" Approach</h2>

            <p>
              When "anything" is possible, "nothing" happens. Constraining your options actually fuels creativity. I recommend defining 3-4 core "Content Pillars" that you stick to.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <Layers className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-bold text-secondary mb-2">Educational</h4>
                <p className="text-sm text-muted-foreground">How-to guides, tips, and tutorials that solve specific problems.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <Repeat className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-bold text-secondary mb-2">Personal/Behind the Scenes</h4>
                <p className="text-sm text-muted-foreground">Your journey, failures, and lessons learned as a professional.</p>
              </div>
            </div>

            <p>
              When you sit down to write, you don't have to choose from the infinite universe of topics. You just have to choose: <em>"Is today an Educational day or a Personal day?"</em>
            </p>

            <h2>Conclusion: Consistency &gt; Intensity</h2>

            <p>
              The goal isn't to write a viral masterpiece every single day. The goal is to show up.
            </p>

            <div className="bg-secondary/5 p-8 rounded-2xl my-8 border-l-4 border-primary">
              <h4 className="text-secondary font-bold mt-0 mb-2">Key Takeaway</h4>
              <p className="mb-0 text-muted-foreground">
                Consistency isn't about having infinite ideas; it's about having a system that bridges the gap between "I should post" and "I have posted."
              </p>
            </div>

            <p>
              Next time you're staring at that blinking cursor, stop trying to invent brilliance from scratch. Find a prompt, pick a pillar, or document a small win. Your audience is waiting to hear from you, not the perfect version of you.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
