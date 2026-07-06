import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Facebook } from "lucide-react";
import { Link, useRoute } from "wouter";
import { blogPostsData } from "@/data/blogPosts";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  
  if (!match || !params?.slug) {
    return <div>Post not found</div>;
  }

  const post = blogPostsData.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-24 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] selection:bg-primary/30">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-24">
        <article className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Spacious Hero Section */}
          <header className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
            <div className="mb-8">
              <Link href="/blog">
                <Button variant="ghost" className="text-muted-foreground hover:text-secondary mb-8">
                  <ArrowLeft className="mr-2 w-4 h-4" /> Back to all articles
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1.5 text-sm font-medium rounded-full">
                {post.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                {post.readTime}
              </div>
            </div>
          </header>

          {/* Full-width Featured Image */}
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
              <img loading="lazy" 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Two-Column Layout for Content */}
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Left Sidebar: Author & Sharing (Sticky) */}
              <aside className="lg:w-1/4 order-2 lg:order-1">
                <div className="sticky top-32 space-y-10">
                  
                  {/* Author Profile */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary/10">
                      <img loading="lazy" 
                        src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/02eaaa5f9c644c1d860f610a5a43fd5d_82a4231d.avif" 
                        alt="Mori Sobhani" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      Digital Marketing Expert helping brands grow through data-driven strategies and compelling content.
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full rounded-full border-primary/20 text-primary hover:bg-primary/5">
                        Work with me
                      </Button>
                    </Link>
                  </div>

                  {/* Share Links */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-6 text-center">Share this article</h4>
                    <div className="flex justify-center gap-4">
                      <a 
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>

                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                </div>
              </aside>

              {/* Right Column: Main Content */}
              <div className="lg:w-3/4 order-1 lg:order-2">
                <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-sm border border-gray-100">
                  <div className="prose prose-lg max-w-[65ch] mx-auto text-[#333333] leading-[1.8] 
                    prose-headings:text-secondary prose-headings:font-bold prose-headings:mt-14 prose-headings:mb-6 
                    prose-h2:text-3xl prose-h3:text-2xl
                    prose-p:my-6 prose-p:text-[1.125rem]
                    prose-a:text-primary prose-a:font-medium hover:prose-a:text-primary/80 prose-a:underline-offset-4
                    prose-img:rounded-2xl prose-img:my-10
                    prose-li:my-2 prose-ul:my-6 prose-ol:my-6
                    prose-strong:text-secondary prose-strong:font-bold">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 p-10 md:p-14 bg-secondary rounded-[2.5rem] text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1000')] opacity-10 mix-blend-overlay"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Elevate Your Digital Presence?</h3>
                    <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                      Let's work together to implement these strategies and drive real growth for your business. 
                      Whether you need a comprehensive digital marketing plan or targeted content creation, I'm here to help.
                    </p>
                    <Link href="/contact">
                      <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        Contact Mori Sobhani Today
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Related Posts (Full Width Bottom) */}
          <div className="mt-32 bg-white py-24 border-t border-gray-100">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Keep Reading</h3>
                <p className="text-muted-foreground text-lg">Explore more insights and strategies.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-10">
                {blogPostsData
                  .filter(p => p.id !== post.id)
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                      <div className="bg-[#FAFAFA] rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                        <div className="h-56 overflow-hidden relative">
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                          <img loading="lazy" 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                          <Badge className="bg-white text-primary border border-primary/10 px-3 py-1 w-fit mb-4 text-xs font-medium rounded-full shadow-sm">
                            {relatedPost.category}
                          </Badge>
                          <h4 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-4 leading-snug">
                            {relatedPost.title}
                          </h4>
                          <p className="text-base text-muted-foreground line-clamp-2 mt-auto leading-relaxed">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
}
