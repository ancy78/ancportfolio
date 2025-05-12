
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Ancy<span className="text-brand-blue">.</span>
            </h3>
            <p className="text-muted-foreground">
              Information Technology student passionate about app development, web design, and UI/UX.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-blue" />
                <a href="tel:7806996150" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  +91 7806996150
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-blue" />
                <a href="mailto:ancycp2004@gmail.com" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  ancycp2004@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Github size={18} className="text-brand-blue" />
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={18} className="text-brand-blue" />
                <a href="https://www.linkedin.com/in/ancycp78" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Ancy C P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
