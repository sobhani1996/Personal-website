import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";

const pages = [
  {
    chapter: 'CHAPTER 1.1',
    section: 'Introduction',
    title: 'Your New Creative Partner',
    body: `
      <p class="dropcap">Welcome to the world of Artificial Intelligence image generation. As a digital marketer, you are constantly in need of compelling visuals for ads, social media, websites, and more. This guide is designed to be your comprehensive resource — a <em>book</em> — to help you master the art and science of creating stunning images with AI.</p>
      <p>It is written specifically for professionals who may find English to be a second language. The approach is simple, clear, and highly visual. We break down complex topics, provide a rich vocabulary of essential terms, and show you exactly how to write the instructions — called <strong>prompts</strong> — that bring your ideas to life.</p>
      <p>Think of AI not as a complicated piece of software, but as a new creative partner. It is an incredibly powerful artist, photographer, and designer who is ready to work for you. However, like any partner, it needs clear communication to understand your vision.</p>
      <div class="callout">
        <strong>By the end of this book</strong> — you will be able to confidently generate graphics, photos, and videos that align perfectly with your marketing goals.
      </div>
    `,
    leftChapter: 'PART ONE',
    leftTitle: 'The Language of AI',
    leftBody: `
      <p style="font-style: italic; color: #5a4e38; font-size:15.5px;">&quot;Think of AI not as a complicated piece of software, but as a new creative partner &mdash; an incredibly powerful artist, photographer, and designer who is ready to work for you.&quot;</p>
      <p style="margin-top: 32px; font-size: 14px; color: #5a4e38;">The next pages take you through the fundamentals: how AI creates images, why specificity matters, and the universal formula that turns a vague idea into a precise, on-brand visual.</p>
      <div class="callout" style="margin-top: 28px;"><strong style="display:block;margin-bottom:4px;">How this book reads</strong>Short chapters. Concrete examples. A glossary built for marketers &mdash; not developers.</div>
    `,
    leftFooter: 'The Digital Marketer\'s Guide'
  },
  {
    chapter: 'CHAPTER 1.3',
    section: 'The Golden Rule',
    title: 'Garbage In, Garbage Out',
    body: `
      <p>The single most important principle in AI image generation is this: <strong>the quality of your output is directly determined by the quality of your input.</strong></p>
      <p>Vague, short prompts will lead to generic, uninspired, or unpredictable results. Detailed, specific, and descriptive prompts will produce images that are much closer to your vision. A simple prompt leaves too much room for the AI&apos;s imagination &mdash; it has to fill in the missing details itself, which may not align with what you want.</p>
      <div class="prompt-box">
        <span class="label">Prompt 1 &mdash; Vague</span>
        a cat
      </div>
      <div class="prompt-box">
        <span class="label">Prompt 2 &mdash; Specific &amp; descriptive</span>
        A ginger-and-white striped cat looking excited as it chases a mouse around a kitchen, in the style of an impressionist painter, with light streaming through the windows and prominent use of blue and yellow.
      </div>
      <p>As a marketer, <strong>specificity is your greatest tool</strong>. The more detail you provide, the more control you have over the final asset.</p>
    `,
    leftChapter: 'PART ONE',
    leftTitle: 'Prompting Fundamentals',
    leftBody: `
      <p style="font-size:15.5px;">Vague prompts give the AI room to guess. Specific prompts give you a result you can ship.</p>
      <p style="margin-top: 20px; font-size: 14px; color: #5a4e38;">This chapter compares prompts side-by-side, teaches you the four most common AI &quot;quirks&quot; (hallucinated fingers, bad text, scene inconsistency, counting errors) and how to work around each.</p>
      <div class="callout" style="margin-top: 24px;font-size:13.5px;"><strong>Pro tip:</strong> You can&apos;t tell the AI what NOT to do &mdash; it often ignores negation. Always describe what you DO want instead.</div>
    `,
    leftFooter: 'Chapter 1 · Fundamentals'
  },
  {
    chapter: 'CHAPTER 2.1',
    section: 'The Master Formula',
    title: 'The Universal Formula for Success',
    body: `
      <p>Most expert guides agree on a basic formula for creating effective prompts. While the exact wording may vary, the core components are always the same. A great starting point for any prompt is to structure it like this:</p>
      <div class="prompt-box" style="background:#1E3A8A;color:#fff;border:none;font-family:var(--font-display);font-weight:700;font-size:14px;line-height:1.7;">
        [Image Type] of a [Subject] [Action] in a [Setting], in the style of [Style], with [Details].
      </div>
      <p><strong>Worked example:</strong></p>
      <div class="prompt-box">
        <span class="label">Finished prompt</span>
        A photorealistic close-up shot of a confident businesswoman smiling during a video call in a modern, sunlit home office, in a cinematic style, with warm, natural lighting and a shallow depth of field.
      </div>
      <ul>
        <li><strong>Image Type:</strong> A photorealistic close-up shot</li>
        <li><strong>Subject:</strong> of a confident businesswoman</li>
        <li><strong>Action:</strong> smiling during a video call</li>
        <li><strong>Setting:</strong> in a modern, sunlit home office</li>
        <li><strong>Style:</strong> in a cinematic style</li>
        <li><strong>Details:</strong> warm, natural lighting and a shallow depth of field</li>
      </ul>
    `,
    leftChapter: 'PART ONE',
    leftTitle: 'The Anatomy of a Master-Prompt',
    leftBody: `
      <p style="font-size:15.5px;">The formula works because it forces you to make six creative decisions <em>before</em> the AI makes them for you.</p>
      <p style="margin-top: 20px; font-size: 14px; color: #5a4e38;">Each of the six components gets its own section in Chapter 2 &mdash; with keyword lists, before/after examples, and a full checklist table you can keep beside your screen.</p>
      <div class="callout" style="margin-top: 24px;font-size:13.5px;"><strong>Checkpoint:</strong> Run every prompt through the six components before you hit Generate.</div>
    `,
    leftFooter: 'Chapter 2 · Anatomy'
  },
  {
    chapter: 'CHAPTER 4.5',
    section: 'Lighting Techniques',
    title: 'Directing Light Like a Cinematographer',
    body: `
      <p>Lighting is perhaps the most effective tool for setting the mood of an image. It can change the entire feeling of a scene. These cinematic and photographic terms give you precise control.</p>
      <p><strong>Cinematic lighting</strong> &mdash; dramatic, moody lighting that looks like it&apos;s from a movie. Often involves high contrast and carefully placed light sources.</p>
      <div class="prompt-box">
        <span class="label">Example</span>
        A cinematic lighting portrait of a detective in a dark office, with light from the window blinds creating stripes across his face.
      </div>
      <p><strong>Volumetric lighting / God rays</strong> &mdash; beams of light made visible by passing through particles in the air like fog, dust, or smoke.</p>
      <div class="prompt-box">
        <span class="label">Example</span>
        Volumetric lighting in a dense forest, sunbeams cutting through the canopy and illuminating the misty forest floor.
      </div>
      <p><strong>Golden hour</strong> — the warm, soft light shortly after sunrise or before sunset. Prized by photographers for its beautiful, cinematic quality.</p>
    `,
    leftChapter: 'PART TWO',
    leftTitle: 'The Visual Vocabulary',
    leftBody: `
      <p style="font-size:15.5px;">Chapter 4 treats your prompt like a film set — camera, lens, angle, lighting, film stock. Each has specific keywords that the AI understands.</p>
      <p style="margin-top: 20px; font-size: 14px; color: #5a4e38;">Pair "golden hour" with "shallow depth of field" and "35mm film grain" and you get agency-grade photography — not an AI render.</p>
      <div class="callout" style="margin-top: 24px;font-size:13.5px;"><strong>Rule of thumb:</strong> Lighting changes the emotion more than any other element.</div>
    `,
    leftFooter: 'Chapter 4 · Virtual Camera'
  },
  {
    chapter: 'CHAPTER 9.2',
    section: 'Marketer\'s Playbook',
    title: 'Professional Product Photography',
    body: `
      <p>High-quality product photography is essential for e-commerce, but professional shoots are expensive and slow. AI lets you create stunning product shots in a virtual studio — clean catalog shots, lifestyle shots, and action shots.</p>
      <div class="prompt-box">
        <span class="label">Template — Minimalist studio shot</span>
        Product photography of [your product], on a clean white background, professional studio lighting, sharp focus, highly detailed, 8k, symmetrical composition.
      </div>
      <div class="prompt-box">
        <span class="label">Template — Lifestyle shot</span>
        Lifestyle photo of [your product] being used by [target customer] in [context]. Background softly blurred (bokeh effect), warm and inviting lighting, natural look.
      </div>
      <div class="prompt-box">
        <span class="label">Template — Action shot</span>
        An action shot of [your product] capturing dynamic movement, motion blur, and dramatic lighting.
      </div>
      <p><strong>Swap the brackets, hit generate, and iterate</strong> — you'll have three brand-ready variants before lunch.</p>
    `,
    leftChapter: 'PART FOUR',
    leftTitle: 'The Marketer\'s Playbook',
    leftBody: `
      <p style="font-size:15.5px;">Part Four is the "do this on Monday morning" section — stock photos, product shots, mascots, social posts, email visuals, and the full iterative workflow walked through from brief to final asset.</p>
      <p style="margin-top: 20px; font-size: 14px; color: #5a4e38;">Every template is copy-paste ready. Every example is built with marketer's goals in mind — not "artistic experiments".</p>
      <div class="callout" style="margin-top: 24px;font-size:13.5px;"><strong>You'll build:</strong> custom stock libraries, product catalogs, ad creative, and on-brand mascots — without a photographer.</div>
    `,
    leftFooter: 'Chapter 9 · On-Brand Visuals'
  }
];

export default function BookLanding() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const renderPage = (index: number) => {
    setIsFading(true);
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentPage(index);
      setIsFading(false);
    }, 180);

    setTimeout(() => {
      setIsFlipping(false);
    }, 700);
  };

  const handleNext = () => {
    if (isLocked) return;
    if (currentPage < pages.length - 1) {
      renderPage(currentPage + 1);
    } else {
      setIsLocked(true);
    }
  };

  const handlePrev = () => {
    if (isLocked) {
      setIsLocked(false);
      renderPage(currentPage);
      return;
    }
    if (currentPage > 0) {
      renderPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isLocked]);

  const page = pages[currentPage];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      {/* Custom Styles for Book Landing */}
      <style dangerouslySetInnerHTML={{__html: `
        .book-landing-font-display { font-family: 'Nunito', system-ui, sans-serif; }
        .book-landing-font-body { font-family: 'Lato', system-ui, sans-serif; }
        .book-landing-font-book { font-family: 'Lora', Georgia, serif; }
        
        .book-landing-mark {
          background: linear-gradient(180deg, transparent 55%, #FFE08A 55%);
          padding: 0 2px;
        }
        
        .book-landing-hero {
          background:
            radial-gradient(ellipse at 80% 20%, rgba(255, 193, 7, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 10% 80%, rgba(30, 58, 138, 0.06) 0%, transparent 55%),
            linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
        }
        
        .book-landing-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
        }
        
        .book-landing-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        
        .book-landing-book-cover {
          transform-style: preserve-3d;
          transform: rotateY(-18deg) rotateX(4deg);
          transition: transform 0.6s ease;
          animation: bookFloat 6s ease-in-out infinite;
        }
        .book-landing-book-cover:hover { transform: rotateY(-8deg) rotateX(2deg) scale(1.02); }
        
        @keyframes bookFloat {
          0%, 100% { transform: rotateY(-18deg) rotateX(4deg) translateY(0); }
          50% { transform: rotateY(-18deg) rotateX(4deg) translateY(-10px); }
        }
        
        .book-landing-book-front::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 12px;
          background: linear-gradient(90deg, rgba(0,0,0,0.18), rgba(0,0,0,0));
          pointer-events: none;
        }
        .book-landing-book-front::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 100%;
          background: linear-gradient(115deg, rgba(255,255,255,0.12) 0%, transparent 35%);
          pointer-events: none;
          z-index: 2;
        }
        
        .book-landing-book-spine {
          background: linear-gradient(90deg, #d8d2c4 0%, #efe9db 60%, #d8d2c4 100%);
          transform: rotateY(-90deg) translateZ(-7px);
          transform-origin: right center;
          box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
        }
        .book-landing-book-pages {
          background: repeating-linear-gradient(
            0deg,
            #f5f1e8 0px,
            #f5f1e8 1px,
            #e8dfc9 1px,
            #e8dfc9 2px
          );
          transform: rotateY(90deg) translateZ(-5px);
          transform-origin: left center;
        }
        
        .book-landing-book-half::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(30, 58, 138, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 193, 7, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }
        .book-landing-book-half::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23p)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.06;
          pointer-events: none;
          mix-blend-mode: multiply;
        }
        
        .book-landing-page-chapter::after {
          content: '';
          display: inline-block;
          width: 32px; height: 1px;
          background: #FFC107;
          margin-left: 10px;
          vertical-align: middle;
        }
        
        .book-landing-dropcap::first-letter {
          font-family: 'Nunito', system-ui, sans-serif;
          font-weight: 900;
          font-size: 54px;
          float: left;
          line-height: 0.9;
          margin: 6px 10px 0 0;
          color: #1E3A8A;
        }
        
        .book-landing-callout {
          background: rgba(255, 193, 7, 0.12);
          border-left: 3px solid #FFC107;
          padding: 14px 18px;
          margin: 16px 0;
          border-radius: 4px;
          font-size: 14px;
          color: #3d3528;
        }
        
        .book-landing-prompt-box {
          background: #f5efe0;
          border: 1px dashed #c9b882;
          padding: 14px 16px;
          margin: 14px 0;
          border-radius: 4px;
          font-family: 'Lato', system-ui, sans-serif;
          font-size: 13px;
          line-height: 1.55;
          color: #3d3528;
        }
        
        .book-landing-prompt-box .label {
          display: block;
          font-family: 'Nunito', system-ui, sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          font-weight: 800;
          color: #1E3A8A;
          margin-bottom: 6px;
          text-transform: uppercase;
        }
        
        .book-landing-flipping .book-landing-right-half {
          animation: flipPage 0.7s ease-in-out;
        }
        @keyframes flipPage {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-12deg); }
        }
        
        .book-landing-author-section::before {
          content: '';
          position: absolute;
          top: -150px; left: -150px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(255, 193, 7, 0.12) 0%, transparent 60%);
          pointer-events: none;
        }
`}} />
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-900/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" asChild>
            <a className="book-landing-font-display font-extrabold text-lg text-[#1E3A8A] flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-[#FFC107] rounded-full shadow-[0_0_0_4px_rgba(255,193,7,0.2)]"></div>
              Mori Sobhani
            </a>
          </Link>
          <a href="https://www.amazon.co.uk/Digital-Marketers-Illustrated-Guide-Generation-ebook/dp/B0GX449BBM/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#FFC107] text-slate-900 book-landing-font-display font-extrabold text-sm px-4 py-2.5 rounded-2xl transition-transform hover:-translate-y-0.5 hover:shadow-lg">
            Buy the Book
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-20 pb-24 overflow-hidden book-landing-hero">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_1fr] gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] book-landing-font-display font-bold text-[13px] tracking-wider uppercase px-3.5 py-2 rounded-full shadow-sm mb-5">
              <div className="w-2 h-2 bg-[#FFC107] rounded-full book-landing-pulse"></div>
              Revised &amp; Updated for 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5 text-[#1E3A8A] book-landing-font-display tracking-tight">
              The Digital Marketer&apos;s Illustrated Guide to <span className="text-slate-900">AI Image Generation</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mb-7 leading-relaxed book-landing-font-body">
              The practical, illustrated playbook for marketers who are tired of generic AI slop &mdash; and want visuals that actually work on <span className="book-landing-mark">real campaigns</span>.
            </p>
            <div className="flex items-center gap-6 mb-8 flex-wrap">
              <div className="inline-flex gap-0.5 text-[#FFC107] text-lg">★ ★ ★ ★ ★</div>
              <div className="text-slate-500 text-sm book-landing-font-body">
                <strong className="text-slate-900 font-bold">11 chapters</strong> · <strong className="text-slate-900 font-bold">4 parts</strong> · GPT-4o, Midjourney V7 &amp; FLUX
              </div>
            </div>
            <div className="flex gap-3.5 flex-wrap">
              <a href="#preview" className="inline-flex items-center gap-2.5 book-landing-font-display font-extrabold text-base px-7 py-4 rounded-2xl border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all">
                <span role="img" aria-label="book">📖</span> Read 5 Pages Free
              </a>
              <a href="https://www.amazon.co.uk/Digital-Marketers-Illustrated-Guide-Generation-ebook/dp/B0GX449BBM/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 book-landing-font-display font-extrabold text-base px-7 py-4 rounded-2xl bg-[#FFC107] text-slate-900 shadow-[0_8px_20px_rgba(255,193,7,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,193,7,0.5)] transition-all">
                Buy on Amazon &rarr;
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center perspective-[2000px] py-10">
            <div className="relative w-[320px] h-[480px] book-landing-book-cover">
              <div className="absolute -left-[14px] top-0 w-[14px] h-full rounded-l-sm book-landing-book-spine"></div>
              <div className="absolute -right-[1px] top-1 bottom-1 w-[10px] rounded-r-sm book-landing-book-pages"></div>
              <div className="absolute inset-0 rounded-r-lg rounded-l-sm shadow-[0_30px_60px_-15px_rgba(30,58,138,0.35),0_15px_30px_-10px_rgba(15,23,42,0.25)] overflow-hidden bg-[#F1F5F9] book-landing-book-front">
                <img loading="lazy" src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/cover_cd5f8d6b.jpg" alt="Book Cover" className="block w-full h-full object-cover" style={{ imageRendering: '-webkit-optimize-contrast' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[#1E3A8A] text-white py-6 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex justify-around items-center gap-8 flex-wrap book-landing-font-display">
          <div className="flex items-center gap-2.5 text-sm font-bold">
            <span className="w-7 h-7 grid place-items-center bg-[#FFC107]/15 rounded-lg text-[#FFC107] text-sm">✦</span> Updated for GPT-4o &amp; Midjourney V7
          </div>
          <div className="flex items-center gap-2.5 text-sm font-bold">
            <span className="w-7 h-7 grid place-items-center bg-[#FFC107]/15 rounded-lg text-[#FFC107] text-sm">◎</span> Written for non-native English speakers
          </div>
          <div className="flex items-center gap-2.5 text-sm font-bold">
            <span className="w-7 h-7 grid place-items-center bg-[#FFC107]/15 rounded-lg text-[#FFC107] text-sm">✎</span> 50+ ready-to-use prompt templates
          </div>
          <div className="flex items-center gap-2.5 text-sm font-bold">
            <span className="w-7 h-7 grid place-items-center bg-[#FFC107]/15 rounded-lg text-[#FFC107] text-sm">◈</span> Copyright &amp; ethics for 2026
          </div>
        </div>
      </div>

      {/* WHAT YOU'LL LEARN */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="book-landing-font-display font-bold text-sm tracking-widest uppercase text-[#FFC107] mb-4 flex items-center gap-3">
            <div className="w-8 h-px bg-[#FFC107]"></div>
            What&apos;s inside
          </div>
          <h2 className="book-landing-font-display text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-6 tracking-tight">A system, not a list of tips.</h2>
          <p className="text-lg text-slate-500 max-w-2xl mb-16 leading-relaxed book-landing-font-body">
            Most AI guides tell you what buttons to press. This one teaches you to think like a director &mdash; so the AI works for your brand, not the other way round.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'The Universal Prompt Formula', desc: 'One repeatable structure that works across every major model &mdash; so you stop guessing and start shipping.' },
              { num: '02', title: 'The Artist\'s Lexicon', desc: '50+ styles, mediums and movements explained plainly &mdash; with example prompts and marketing-use tips for each.' },
              { num: '03', title: 'Directing the Virtual Camera', desc: 'Shots, angles, lenses and lighting terms that take your output from "AI" to "agency-grade".' },
              { num: '04', title: 'Platform Mastery', desc: 'GPT-4o\'s iterative workflow, Midjourney\'s multi-prompts, and Stable Diffusion / FLUX negative prompts &mdash; side by side.' },
              { num: '05', title: 'On-Brand Visuals', desc: 'Custom stock photos, product photography, mascots and social creative &mdash; with template prompts you can paste today.' },
              { num: '06', title: 'Copyright & Ethics 2026', desc: 'What the US Copyright Office\'s Part 2 report means for your work &mdash; and which tools are genuinely safe for commercial use.' }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="book-landing-font-display font-black text-4xl text-[#1E3A8A]/10 mb-4">{item.num}</div>
                <h3 className="book-landing-font-display font-bold text-xl text-[#1E3A8A] mb-3">{item.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed book-landing-font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW / BOOK READER */}
      <section className="py-24 bg-slate-50" id="preview">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="book-landing-font-display font-bold text-sm tracking-widest uppercase text-[#FFC107] mb-4 inline-flex items-center gap-3">
              <div className="w-8 h-px bg-[#FFC107]"></div>
              Read a sample
              <div className="w-8 h-px bg-[#FFC107]"></div>
            </div>
            <h2 className="book-landing-font-display text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-6 tracking-tight">5 pages. From across the book.</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed book-landing-font-body">
              Pulled from different parts of the guide &mdash; so you can see the voice, the structure and the practical ideas before you buy.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-6 px-4">
              <div className="book-landing-font-display font-bold text-sm text-slate-500 uppercase tracking-wider">
                {isLocked ? 'End of sample' : `Page ${currentPage + 1} of 5`}
              </div>
              <div className="flex gap-2">
                {pages.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full transition-all ${isLocked || i < currentPage ? 'bg-[#1E3A8A]' : i === currentPage ? 'bg-[#FFC107] scale-125' : 'bg-slate-300'}`}></div>
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-[16/11] max-h-[640px] perspective-[3000px] mb-8">
              <div className={`relative w-full h-full transform-style-3d flex ${isFlipping ? 'book-landing-flipping' : ''}`}>
                {/* Left Page */}
                <div className="flex-1 bg-[#fdfaf2] rounded-l-lg rounded-r-sm shadow-[-15px_20px_40px_rgba(15,23,42,0.12),inset_-10px_0_20px_rgba(15,23,42,0.06)] relative overflow-hidden book-landing-book-half">
                  <div className="relative z-10 p-8 md:p-12 h-full flex flex-col book-landing-font-book text-[#2a2620] overflow-hidden">
                    <div className="book-landing-font-display text-[11px] font-bold tracking-[0.25em] uppercase text-[#FFC107] mb-2 book-landing-page-chapter">
                      {page.leftChapter}
                    </div>
                    <h3 className="book-landing-font-display text-2xl md:text-[26px] font-extrabold text-[#1E3A8A] leading-[1.15] mb-5 tracking-tight">
                      {page.leftTitle}
                    </h3>
                    <div className="book-landing-font-book text-[15px] leading-[1.7] flex-1 overflow-hidden" dangerouslySetInnerHTML={{ __html: page.leftBody }}></div>
                    <div className="mt-4 pt-3.5 border-t border-slate-900/10 flex justify-between items-center book-landing-font-display text-[11px] font-bold text-slate-500 tracking-widest uppercase">
                      <span>{page.leftFooter}</span>
                      <span>Mori Sobhani</span>
                    </div>
                  </div>
                </div>

                {/* Right Page */}
                <div className="flex-1 bg-[#fdfaf2] rounded-r-lg rounded-l-sm shadow-[15px_20px_40px_rgba(15,23,42,0.12),inset_10px_0_20px_rgba(15,23,42,0.06)] relative overflow-hidden book-landing-book-half book-landing-right-half">
                  <div className={`transition-opacity duration-350 ease-in-out h-full ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="relative z-10 p-8 md:p-12 h-full flex flex-col book-landing-font-book text-[#2a2620] overflow-hidden">
                      <div className="book-landing-font-display text-[11px] font-bold tracking-[0.25em] uppercase text-[#FFC107] mb-2 book-landing-page-chapter">
                        {page.chapter}
                      </div>
                      <h3 className="book-landing-font-display text-2xl md:text-[26px] font-extrabold text-[#1E3A8A] leading-[1.15] mb-5 tracking-tight">
                        {page.title}
                      </h3>
                      <div className="book-landing-font-book text-[15px] leading-[1.7] flex-1 overflow-hidden [&_p]:mb-3.5 [&_strong]:text-[#1E3A8A] [&_strong]:font-semibold [&_em]:text-[#5a4e38] [&_ul]:list-none [&_ul]:p-0 [&_ul]:my-2.5 [&_li]:relative [&_li]:pl-4 [&_li]:mb-2 [&_li]:text-[14.5px] [&_li::before]:content-[''] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:top-2.5 [&_li::before]:w-1.5 [&_li::before]:h-1.5 [&_li::before]:bg-[#FFC107] [&_li::before]:rounded-full" dangerouslySetInnerHTML={{ __html: page.body }}></div>
                      <div className="mt-4 pt-3.5 border-t border-slate-900/10 flex justify-between items-center book-landing-font-display text-[11px] font-bold text-slate-500 tracking-widest uppercase">
                        <span>{currentPage + 1}</span>
                        <span>{page.section}</span>
                      </div>
                    </div>
                  </div>

                  {/* Paywall */}
                  {isLocked && (
                    <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf2]/40 to-[#1E3A8A]/95 flex flex-col justify-center items-center text-center p-10 text-white z-20 backdrop-blur-sm">
                      <div className="w-14 h-14 bg-[#FFC107] text-slate-900 rounded-full grid place-items-center text-2xl mb-5 shadow-[0_8px_20px_rgba(255,193,7,0.4)]">
                        <Lock size={24} />
                      </div>
                      <h3 className="book-landing-font-display text-2xl md:text-3xl font-black text-white mb-3 leading-tight">You&apos;ve reached the end of the sample.</h3>
                      <p className="text-[15px] text-white/85 max-w-[420px] mb-6">The other 200+ pages &mdash; including the full glossary, platform guides and marketer&apos;s playbook &mdash; are on Amazon.</p>
                      <a href="https://www.amazon.co.uk/Digital-Marketers-Illustrated-Guide-Generation-ebook/dp/B0GX449BBM/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#FFC107] text-slate-900 book-landing-font-display font-extrabold text-base px-6 py-3.5 rounded-2xl shadow-[0_8px_20px_rgba(255,193,7,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,193,7,0.5)] transition-all">
                        Continue Reading on Amazon &rarr;
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button 
                onClick={handlePrev} 
                disabled={currentPage === 0 && !isLocked}
                className="w-12 h-12 rounded-full bg-white border border-slate-900/10 text-[#1E3A8A] flex items-center justify-center transition-all shadow-sm hover:bg-[#1E3A8A] hover:text-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#1E3A8A] disabled:hover:scale-100"
                aria-label="Previous page"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="book-landing-font-display text-sm font-bold text-slate-500 min-w-[120px] text-center">
                {isLocked ? 'Sample complete' : `Page ${currentPage + 1} · ${page.section}`}
              </div>
              <button 
                onClick={handleNext} 
                disabled={isLocked}
                className="w-12 h-12 rounded-full bg-white border border-slate-900/10 text-[#1E3A8A] flex items-center justify-center transition-all shadow-sm hover:bg-[#1E3A8A] hover:text-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#1E3A8A] disabled:hover:scale-100"
                aria-label="Next page"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="py-24 bg-[#1E3A8A] text-white relative overflow-hidden book-landing-author-section">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.6fr] gap-14 items-center relative z-10">
          <div>
            <div className="relative aspect-[4/5] bg-gradient-to-br from-[#152A66] to-[#1E3A8A] rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <div className="w-[120px] h-[120px] bg-white rounded-full grid place-items-center mb-6 shadow-[0_12px_32px_rgba(255,193,7,0.35)] overflow-hidden">
                  <img loading="lazy" src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/MoriSobhaniLogo_6c9011da.png" alt="Mori Sobhani" className="w-full h-full object-cover" />
                </div>
                <div className="book-landing-font-display text-[13px] font-bold tracking-[0.15em] uppercase text-white/70 mb-2">Author</div>
                <div className="book-landing-font-display text-2xl font-extrabold text-white">Mori Sobhani</div>
              </div>
            </div>
          </div>

          <div>
            <div className="book-landing-font-display font-bold text-sm tracking-widest uppercase text-[#FFC107] mb-4 flex items-center gap-3">
              <div className="w-8 h-px bg-[#FFC107]"></div>
              About the author
            </div>
            <h2 className="book-landing-font-display text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Written by a marketer. For marketers.</h2>
            
            <p className="text-lg text-white/85 mb-6 leading-relaxed book-landing-font-body">
              Mori knows what it feels like to stare at a blank prompt box and get nothing useful back. The guides he found were either too technical or too vague &mdash; nothing written for someone with campaigns to run and deadlines to hit. So he wrote this one.
            </p>

            <blockquote className="book-landing-font-book italic text-xl leading-[1.45] text-white py-5 pl-6 border-l-4 border-[#FFC107] my-6">
              Most marketers aren&apos;t being left behind because they lack talent. They&apos;re being left behind because nobody has shown them the right system yet.
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <div className="book-landing-font-display text-[11px] tracking-[0.15em] uppercase text-[#FFC107] font-bold mb-1">Education</div>
                <div className="text-sm text-white font-semibold leading-snug">MSc Digital Marketing, University of Northampton</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <div className="book-landing-font-display text-[11px] tracking-[0.15em] uppercase text-[#FFC107] font-bold mb-1">Certification</div>
                <div className="text-sm text-white font-semibold leading-snug">DMI Pro Certified Digital Marketer</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <div className="book-landing-font-display text-[11px] tracking-[0.15em] uppercase text-[#FFC107] font-bold mb-1">Based in</div>
                <div className="text-sm text-white font-semibold leading-snug">United Kingdom</div>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href="/" asChild>
                <a className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white book-landing-font-display font-bold text-sm px-4 py-2.5 rounded-xl transition-colors">
                  <span role="img" aria-label="link">🔗</span> mrsobhani.uk
                </a>
              </Link>
              <a href="https://linkedin.com/in/mori-sobhani" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white book-landing-font-display font-bold text-sm px-4 py-2.5 rounded-xl transition-colors">
                <span role="img" aria-label="briefcase">💼</span> LinkedIn
              </a>
              <Link href="/contact/" asChild>
                <a className="inline-flex items-center gap-2 bg-[#FFC107] hover:bg-[#FFC107]/90 text-slate-900 book-landing-font-display font-bold text-sm px-4 py-2.5 rounded-xl transition-colors shadow-sm">
                  <span role="img" aria-label="envelope">✉️</span> Contact Me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="book-landing-font-display text-3xl md:text-5xl font-black text-[#1E3A8A] mb-6 leading-tight tracking-tight">
            Stop generating <span className="book-landing-mark">AI slop</span>.<br/>Start shipping campaigns.
          </h2>
          <p className="text-lg text-slate-500 mb-8 book-landing-font-body">
            The full 11-chapter guide, updated for 2026, is live on Amazon. One-off price. Yours to keep.
          </p>
          <a href="https://www.amazon.co.uk/Digital-Marketers-Illustrated-Guide-Generation-ebook/dp/B0GX449BBM/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-[#FFC107] text-slate-900 book-landing-font-display font-extrabold text-lg px-8 py-4 rounded-2xl shadow-[0_8px_20px_rgba(255,193,7,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,193,7,0.5)] transition-all">
            Get the Book on Amazon &rarr;
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-100 text-center text-slate-500 text-sm book-landing-font-body">
        <div className="max-w-6xl mx-auto px-6">
          &copy; 2026 Mori Sobhani &middot; <Link href="/" asChild><a className="text-[#1E3A8A] hover:underline font-semibold">mrsobhani.uk</a></Link> &middot; Independently published
        </div>
      </footer>
    </div>
  );
}
