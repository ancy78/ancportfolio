
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="text-xl font-bold">
          Ancy<span className="text-brand-blue">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-foreground/80 hover:text-brand-blue transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-foreground/80 hover:text-brand-blue transition-colors"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-foreground/80 hover:text-brand-blue transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#services"
            className="text-foreground/80 hover:text-brand-blue transition-colors"
          >
            Services
          </a>
          <a href="#contact">
            <Button className="bg-brand-blue hover:bg-brand-blue/90">
              Contact Me
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4 flex flex-col space-y-4 px-4">
            <a
              href="#home"
              className="text-foreground/80 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground/80 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-foreground/80 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-foreground/80 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
