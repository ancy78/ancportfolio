
import { Button } from '@/components/ui/button';
import { ArrowDown, Linkedin, Github, Mail, Code, Figma } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 hero-modern-gradient">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3 mb-2 reveal-text reveal-delay-1">
              <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-blue rounded-full text-sm font-medium badge-glow inline-flex items-center">
                <code className="mr-1">{'<'}</code>IT Student<code className="ml-1">{'/>'}</code>
              </span>
              <span className="px-4 py-1.5 bg-brand-yellow/10 text-brand-yellow dark:bg-brand-yellow/20 dark:text-brand-yellow rounded-full text-sm font-medium badge-glow inline-flex items-center">
                <code className="mr-1">{'{'}</code>Developer<code className="ml-1">{'}'}</code>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight reveal-text reveal-delay-2">
              Hello, I'm<br />
              <span className="text-gradient-modern">Ancy C P</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed reveal-text reveal-delay-3">
              Information Technology student passionate about app development, web design, UI/UX, and creative solutions.
            </p>
            <div className="flex flex-wrap gap-4 reveal-text reveal-delay-3">
              <a href="#contact">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 px-6 py-6 h-auto font-medium text-base">
                  Get In Touch
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="outline" className="border-2 hover:bg-secondary/80 transition-all transform hover:-translate-y-1 px-6 py-6 h-auto font-medium text-base">
                  View Portfolio
                </Button>
              </a>
            </div>
            <div className="flex gap-4 mt-8 reveal-text reveal-delay-3">
              <a 
                href="https://www.linkedin.com/in/ancycp78" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-md hover:shadow-lg transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-md hover:shadow-lg transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:ancycp2004@gmail.com" 
                aria-label="Email"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-md hover:shadow-lg transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="relative hidden md:flex items-center justify-center">
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-blue/10 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-brand-purple/20"></div>
            
            {/* Profile image with square mask - improved styling */}
            <div className="relative z-10">
              <div className="relative animate-float">
                {/* Improved shadow and glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-2xl blur-md transform rotate-3 scale-105"></div>
                {/* Changed to a square container with consistent dimensions */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl">
                  <div className="overflow-hidden rounded-xl w-72 h-72 relative">
                    {/* Added AspectRatio to ensure proper image display */}
                    <AspectRatio ratio={1/1} className="w-full h-full">
                      <img 
                        src="/lovable-uploads/7e0e4462-baf0-4096-909f-e75af3423d4d.png" 
                        alt="Ancy C P" 
                        className="object-cover w-full h-full hero-profile-image"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-8 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full flex items-center justify-center">
                    <Code size={18} className="text-brand-blue" />
                  </div>
                  <span className="font-medium">Developer</span>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-yellow/10 dark:bg-brand-yellow/20 rounded-full flex items-center justify-center">
                    <Figma size={18} className="text-brand-yellow" />
                  </div>
                  <span className="font-medium">Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all animate-bounce"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
