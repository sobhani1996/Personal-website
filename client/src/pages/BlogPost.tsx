import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  CalendarCheck,
  Clock,
  Facebook,
  Linkedin,
} from "lucide-react";
import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { blogPostsData } from "@/data/blogPosts";
import { COMMISSION_RANGE } from "@/content/offer";
import { blogPostSeo, cleanPostHtml, relatedPosts } from "@/seo/blog";
import { applyHead } from "@/seo/head";
import { headForPage, NOT_FOUND_SEO } from "@/seo/pages";
import { SITE_URL } from "@/seo/site";
import NotFound from "@/pages/NotFound";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params?.slug
    ? blogPostsData.find(p => p.slug === params.slug)
    : undefined;

  useEffect(() => {
    applyHead(post ? blogPostSeo(post) : headForPage(NOT_FOUND_SEO));
  }, [post]);

  // Same markup as the 404.html GitHub Pages serves for unknown URLs.
  if (!post) return <NotFound />;

  const shareUrl = encodeURIComponent(`${SITE_URL}/blog/${post.slug}/`);
  const related = relatedPosts(post, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] selection:bg-primary/30">
      <Navbar />

      <main className="flex-grow pt-24 pb-24">
        <article>
          {/* Hero */}
          <header className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm text-muted-foreground"
            >
              <ol className="flex flex-wrap items-center justify-center gap-2">
                <li>
                  <Link href="/" className="hover:text-secondary">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog/" className="hover:text-secondary">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-secondary">{post.category}</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
              <span>
                By{" "}
                <Link
                  href="/about/"
                  className="font-bold text-secondary hover:underline"
                >
                  {post.author}
                </Link>
              </span>
              <div className="flex items-center">
                <Calendar
                  className="w-4 h-4 mr-2 text-secondary"
                  aria-hidden="true"
                />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock
                  className="w-4 h-4 mr-2 text-secondary"
                  aria-hidden="true"
                />
                {post.readTime}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="relative h-[300px] md:h-[560px] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                width="1200"
                height="560"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              {/* Sidebar: Author & Sharing */}
              <aside className="lg:w-1/4 order-2 lg:order-1">
                <div className="sticky top-32 space-y-10">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary/20">
                      <img
                        loading="lazy"
                        src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/02eaaa5f9c644c1d860f610a5a43fd5d_82a4231d.avif"
                        alt="Mori Sobhani"
                        width="96"
                        height="96"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xl font-bold text-secondary mb-2">
                      {post.author}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      Google Ads and Meta Ads specialist for small businesses.
                      Free campaign setup, then paid {COMMISSION_RANGE} of the
                      conversion value the ads bring in.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full border-secondary/20 text-secondary font-bold hover:bg-secondary hover:text-white"
                    >
                      <Link href="/pricing/">How it works</Link>
                    </Button>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <p className="text-sm font-bold text-secondary uppercase tracking-wider mb-6 text-center">
                      Share this article
                    </p>
                    <div className="flex justify-center gap-4">
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on LinkedIn"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" aria-hidden="true" />
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Facebook"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                      >
                        <Facebook className="w-5 h-5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:w-3/4 order-1 lg:order-2">
                <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-sm border border-gray-100">
                  <div
                    className="prose prose-lg max-w-[65ch] mx-auto text-[#333333] leading-[1.8]
                    prose-headings:text-secondary prose-headings:font-bold prose-headings:mt-14 prose-headings:mb-6
                    prose-h2:text-3xl prose-h3:text-2xl
                    prose-p:my-6 prose-p:text-[1.125rem]
                    prose-a:text-secondary prose-a:font-medium hover:prose-a:text-secondary/80 prose-a:underline-offset-4
                    prose-img:rounded-2xl prose-img:my-10
                    prose-li:my-2 prose-ul:my-6 prose-ol:my-6
                    prose-strong:text-secondary prose-strong:font-bold"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: cleanPostHtml(post.content),
                      }}
                    />
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 p-10 md:p-14 bg-secondary rounded-[2.5rem] text-center relative overflow-hidden">
                  <div
                    className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Want Google or Meta to bring you customers?
                    </h2>
                    <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                      I set up Google Ads and Meta Ads campaigns for small
                      businesses for free. After launch, my only fee is{" "}
                      {COMMISSION_RANGE} of the conversion value they generate,
                      so I only earn when your ads pay off.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-lg font-bold shadow-xl"
                    >
                      <Link href="/contact/">
                        Book a free strategy call{" "}
                        <CalendarCheck
                          className="ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section
          className="mt-32 bg-white py-24 border-t border-gray-100"
          aria-labelledby="related-heading"
        >
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="related-heading"
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Keep reading
              </h2>
              <p className="text-muted-foreground text-lg">
                More practical guides for small business owners.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {related.map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}/`}
                  className="block group"
                >
                  <div className="bg-[#FAFAFA] rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                    <div className="h-56 overflow-hidden relative">
                      <img
                        loading="lazy"
                        src={relatedPost.image}
                        alt=""
                        width="400"
                        height="224"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <Badge className="bg-white text-secondary border border-secondary/10 px-3 py-1 w-fit mb-4 text-xs font-medium rounded-full shadow-sm">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-secondary group-hover:underline line-clamp-2 mb-4 leading-snug">
                        {relatedPost.title}
                      </h3>
                      <p className="text-base text-muted-foreground line-clamp-2 mt-auto leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
