import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-lg shadow-sm"
        : "bg-transparent"
        }`}
      data-testid="nav-main"
    >
      <div className="content-wrap relative px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection("#home")}
            className="font-handwriting text-xl md:text-2xl font-semibold transition-colors duration-200"
            style={{ color: "hsl(220, 75%, 22%)" }}
            data-testid="link-logo"
          >
            {"< Dev Pandey />"}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-[hsl(220,30%,92%)]"
                style={{ color: "hsl(220, 40%, 30%)" }}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[hsl(220,30%,92%)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" style={{ color: "hsl(220, 75%, 22%)" }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: "hsl(220, 75%, 22%)" }} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute left-4 right-4 top-full mt-2 rounded-2xl border bg-white/95 p-2 shadow-xl backdrop-blur-lg animate-fade-in"
            style={{ borderColor: "hsl(220, 20%, 88%)" }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  className="text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-[hsl(220,30%,92%)]"
                  style={{ color: "hsl(220, 40%, 30%)" }}
                  onClick={() => scrollToSection(link.href)}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
