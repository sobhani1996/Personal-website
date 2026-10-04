import { Button } from "@/components/ui/button";
import { CalendarCheck, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    name: "Services",
    href: "/services/",
    children: [
      { name: "All services", href: "/services/" },
      { name: "Google Ads management", href: "/google-ads-management/" },
      { name: "Meta Ads management", href: "/meta-ads-management/" },
    ],
  },
  { name: "Pricing", href: "/pricing/" },
  { name: "Portfolio", href: "/portfolio/" },
  { name: "Blog", href: "/blog/" },
  {
    name: "About",
    href: "/about/",
    children: [
      { name: "About me", href: "/about/" },
      { name: "Curriculum vitae", href: "/cv/" },
    ],
  },
  { name: "Contact", href: "/contact/" },
];

const linkClass =
  "text-sm font-semibold text-muted-foreground hover:text-secondary transition-colors relative group/link flex items-center gap-1";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between gap-6">
        <Link
          href="/"
          className="text-xl md:text-2xl font-extrabold tracking-tight text-secondary flex items-center gap-3 group"
        >
          <img
            src="/images/logo-96.png"
            alt=""
            width="40"
            height="40"
            className="w-10 h-10 object-contain rounded-full drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
          />
          <span className="flex flex-col leading-none">
            Mori Sobhani
            <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Google & Meta Ads
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
          {navItems.map(item =>
            item.children ? (
              <div key={item.name} className="relative group">
                <Link href={item.href} className={linkClass}>
                  {item.name}{" "}
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </Link>
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-60 flex flex-col">
                    {item.children.map(child => (
                      <Link
                        key={child.href + child.name}
                        href={child.href}
                        className="px-4 py-2 text-sm font-medium text-secondary hover:bg-gray-50 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.name} href={item.href} className={linkClass}>
                {item.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full"
                  aria-hidden="true"
                />
              </Link>
            )
          )}
          <Button
            asChild
            className="rounded-full bg-primary px-5 font-bold text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact/">
              Free strategy call{" "}
              <CalendarCheck className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 max-h-[80vh] overflow-y-auto bg-white border-b shadow-xl p-6 lg:hidden animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <Link
              href="/"
              className="text-lg font-medium text-secondary py-2 border-b border-gray-100"
              onClick={closeMenu}
            >
              Home
            </Link>
            {navItems.map(item =>
              item.children ? (
                <div
                  key={item.name}
                  className="py-2 border-b border-gray-100 flex flex-col gap-2"
                >
                  <span className="text-lg font-medium text-secondary">
                    {item.name}
                  </span>
                  {item.children.map(child => (
                    <Link
                      key={child.href + child.name}
                      href={child.href}
                      className="text-base font-medium text-muted-foreground pl-4"
                      onClick={closeMenu}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-secondary py-2 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              )
            )}
            <Button
              asChild
              className="mt-4 w-full h-12 rounded-full bg-primary font-bold text-primary-foreground"
            >
              <Link href="/contact/" onClick={closeMenu}>
                Book a free strategy call
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
