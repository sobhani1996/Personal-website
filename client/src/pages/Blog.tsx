import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, ArrowDownAZ, ArrowUpZA, Search, X } from "lucide-react";
import { Link } from "wouter";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { blogPostsData } from "@/data/blogPosts";

export default function Blog() {
  const posts = blogPostsData;

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | "az" | "za">("newest");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const allCategories = posts.map(post => post.category);
    return ["All", ...Array.from(new Set(allCategories))];
  }, [posts]);

  const filteredAndSortedPosts = useMemo(() => {
    let result = posts;
    
    // Search Filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query)
      );
    }

    // Category Filter
    if (selectedCategory !== "All") {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    // Sort
    return [...result].sort((a, b) => {
      if (sortOrder === "newest" || sortOrder === "oldest") {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      } else {
        return sortOrder === "az" 
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });
  }, [posts, selectedCategory, sortOrder, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSortOrder("newest");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight">
              Marketing insights for small businesses
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Practical guides on Google Ads, Meta Ads and the marketing basics that decide whether paid campaigns turn clicks into customers.
            </p>
          </div>

          {/* Modern Filter Bar */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: "150ms" }}>
            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* Search Input */}
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 h-12 rounded-full bg-gray-50 border-transparent focus:bg-white focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all w-full"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Controls Container */}
              <div className="flex flex-col sm:flex-row gap-4 lg:w-auto">
                
                {/* Category Dropdown (Mobile) / Pills (Desktop) */}
                <div className="flex-grow sm:flex-grow-0 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                  <div className="flex gap-2 min-w-max">
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full h-12 px-6 transition-all duration-300 ${
                          selectedCategory === category 
                            ? "shadow-md" 
                            : "hover:border-primary hover:text-primary bg-gray-50 border-transparent"
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Sort Dropdown */}
                <div className="flex gap-2">
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as any)}
                    className="h-12 px-4 rounded-full bg-gray-50 border-transparent focus:bg-white focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium text-secondary outline-none cursor-pointer"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="az">A to Z</option>
                    <option value="za">Z to A</option>
                  </select>

                  {/* Clear Filters */}
                  {(selectedCategory !== "All" || sortOrder !== "newest" || searchQuery !== "") && (
                    <Button
                      variant="ghost"
                      onClick={clearFilters}
                      className="h-12 w-12 rounded-full p-0 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                      title="Clear all filters"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}/`} className="block h-full">
                <article 
                  className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full animate-in fade-in slide-in-from-bottom-8 cursor-pointer"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredId(post.id.toString())}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-secondary/10 z-10 group-hover:bg-secondary/0 transition-colors duration-500" />
                    <img 
                      src={post.image} 
                      alt={post.title}
                      loading="lazy"
                      width="800"
                      height="450"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-white/90 text-secondary hover:bg-white backdrop-blur-sm shadow-sm border-none px-3 py-1">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                      <div className="flex items-center text-sm font-medium text-secondary">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                          <User className="w-3 h-3 text-gray-500" />
                        </div>
                        {post.author}
                      </div>
                      <span className="inline-flex items-center text-sm text-secondary font-bold group-hover:translate-x-1 transition-transform duration-300">
                        Read more <ArrowRight className="ml-1 w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          
        </div>
      </main>
      <Footer />
    </div>
  );
}
