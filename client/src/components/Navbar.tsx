import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-extrabold tracking-tight text-secondary flex items-center gap-3 group">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/MoriSobhaniLogo_c812f661.png" 
              alt="Mori Sobhani Logo" 
              className="w-10 h-10 object-contain rounded-full drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
            />
            Mori Sobhani
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-sm font-semibold text-muted-foreground hover:text-secondary transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/services">
            <a className="text-sm font-semibold text-muted-foreground hover:text-secondary transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </Link>
          
          {/* Highlighted Portfolio Link */}
          <Link href="/portfolio">
            <a className="text-sm font-bold text-secondary bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full border border-primary/20 transition-all duration-300 flex items-center gap-2 group">
              <span className="w-2 h-2 rounded-full bg-primary group-hover:animate-ping"></span>
              Portfolio
            </a>
          </Link>

          <Link href="/blog">
            <a className="text-sm font-semibold text-muted-foreground hover:text-secondary transition-colors relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </Link>

          {/* About Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <Link href="/about">
              <a className="text-sm font-semibold text-muted-foreground hover:text-secondary transition-colors flex items-center gap-1">
                About <ChevronDown className="w-4 h-4" />
              </a>
            </Link>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 pt-4 transition-all duration-200 ${isAboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-40 flex flex-col">
                <Link href="/about">
                  <a className="px-4 py-2 text-sm font-medium text-secondary hover:bg-gray-50 hover:text-primary transition-colors">
                    About Me
                  </a>
                </Link>
                <Link href="/cv">
                  <a className="px-4 py-2 text-sm font-medium text-secondary hover:bg-gray-50 hover:text-primary transition-colors">
                    Curriculum Vitae
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contact">
            <a className="text-sm font-semibold text-muted-foreground hover:text-secondary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-xl p-6 md:hidden animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            <Link href="/">
              <a className="text-lg font-medium text-secondary py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            </Link>
            <Link href="/services">
              <a className="text-lg font-medium text-secondary py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            </Link>
            <Link href="/portfolio">
              <a className="text-lg font-bold text-primary py-2 border-b border-gray-100 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Portfolio
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-lg font-medium text-secondary py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
            </Link>
            <div className="py-2 border-b border-gray-100 flex flex-col gap-2">
              <Link href="/about">
                <a className="text-lg font-medium text-secondary" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              </Link>
              <Link href="/cv">
                <a className="text-base font-medium text-muted-foreground pl-4" onClick={() => setIsMobileMenuOpen(false)}>↳ Curriculum Vitae</a>
              </Link>
            </div>
            <Link href="/contact">
              <a className="text-lg font-medium text-secondary py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
