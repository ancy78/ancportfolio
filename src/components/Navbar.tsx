
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

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
          ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2"
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
          {/* Added theme toggle to the navbar */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button and Theme Toggle on Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
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
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
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
