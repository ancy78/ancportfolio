
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';
import { Button } from '@/components/ui/button';
import { 
  ArrowDown, 
  Layout, 
  Smartphone, 
  Code, 
  Figma, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Instagram,
  CheckCircle,
  Phone
} from 'lucide-react';

const Index = () => {
  useAnimateOnScroll();
  
  // Create placeholder profile image URL
  const profileImageUrl = "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=512&h=512";
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex gap-2 mb-4">
                <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium">
                  IT Student
                </span>
                <span className="px-4 py-1 bg-brand-yellow/10 text-brand-yellow rounded-full text-sm font-medium">
                  Developer
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hello, I'm<br />
                <span className="text-gradient">Ancy C P</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Information Technology student passionate about app development, web design, UI/UX, and creative solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact">
                  <Button className="bg-brand-blue hover:bg-brand-blue/90">
                    Get In Touch
                  </Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline">
                    View Portfolio
                  </Button>
                </a>
              </div>
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://www.linkedin.com/in/ancycp78" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="mailto:ancycp2004@gmail.com" 
                  aria-label="Email"
                  className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
            
            <div className="relative animate-scale-in hidden md:block">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-yellow opacity-10 rounded-full"></div>
              <div className="relative z-10 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-3xl p-1.5">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img 
                    src={profileImageUrl} 
                    alt="Ancy C P" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-blue opacity-10 rounded-full"></div>
            </div>
          </div>
          
          <a 
            href="#about" 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-blue"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&h=700&q=80" 
                alt="About Ancy" 
                className="rounded-2xl shadow-lg mx-auto"
              />
            </div>
            
            <div className="animate-on-scroll">
              <div className="mb-4">
                <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium">
                  About Me
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Information Technology Student & Developer
              </h2>
              <p className="text-muted-foreground mb-4">
                I am an Information Technology student with a passion for creating innovative digital solutions. My journey in tech began with a curiosity about how applications work, which led me to explore various programming languages and design tools.
              </p>
              <p className="text-muted-foreground mb-6">
                I specialize in UI/UX design, web development, and mobile app development, always striving to create seamless user experiences while maintaining clean code.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Spring Boot", "Figma", "UI/UX", "JavaScript", "HTML/CSS", "Java", "Python", "Mobile Development"].map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-secondary text-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Services I Offer" 
            subtitle="Specialized expertise to help bring your digital vision to life" 
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <ServiceCard 
                icon={<Layout size={32} />}
                title="UI/UX Design"
                description="Creating intuitive and engaging user interfaces that prioritize user experience and accessibility using Figma and other design tools."
              />
            </div>
            
            <div className="animate-on-scroll">
              <ServiceCard 
                icon={<Smartphone size={32} />}
                title="Mobile App Development"
                description="Building responsive and feature-rich mobile applications for iOS and Android platforms that address specific user needs."
              />
            </div>
            
            <div className="animate-on-scroll">
              <ServiceCard 
                icon={<Code size={32} />}
                title="Web Development"
                description="Developing dynamic web applications with modern frameworks like React, Node.js, and Spring Boot that are both functional and visually appealing."
              />
            </div>
          </div>
          
          <div className="mt-16 flex flex-col items-center animate-on-scroll">
            <h3 className="text-xl font-semibold mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <Figma size={24} className="text-brand-blue" />
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <path d="M12 2a10 10 0 1 0 10 10"></path>
                  <path d="M12 12v-8"></path>
                </svg>
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Showcasing my best work and creative solutions" 
            center
          />
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex gap-2 p-1 bg-secondary rounded-full">
              <button className="px-4 py-1.5 bg-white rounded-full text-sm font-medium shadow-sm">
                All Projects
              </button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground">
                Web Apps
              </button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground">
                Mobile Apps
              </button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground">
                UI/UX
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <ProjectCard 
                title="Instagram Fake Profile Detection Tool"
                description="AI-powered tool for identifying fake profiles on Instagram using machine learning algorithms."
                imageSrc="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&h=400&q=80"
                tags={["Python", "Machine Learning", "Social Media"]}
                link="https://github.com/"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProjectCard 
                title="Personal Finance Mobile App"
                description="A clean, intuitive mobile application for tracking personal expenses and setting budget goals."
                imageSrc="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&h=400&q=80"
                tags={["React Native", "Firebase", "UI/UX"]}
                link="https://github.com/"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProjectCard 
                title="E-commerce Website Redesign"
                description="Complete redesign of an e-commerce platform focusing on improving user experience and conversion rates."
                imageSrc="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=600&h=400&q=80"
                tags={["UI/UX", "Figma", "E-commerce"]}
                link="https://github.com/"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProjectCard 
                title="Student Management System"
                description="Web application for educational institutions to manage student data, attendance, and performance."
                imageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=400&q=80"
                tags={["Java", "Spring Boot", "SQL"]}
                link="https://github.com/"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProjectCard 
                title="Weather Forecast Dashboard"
                description="Interactive dashboard displaying weather forecasts with location-based data visualization."
                imageSrc="https://images.unsplash.com/photo-1590055705218-7e64fb8a5e8a?auto=format&fit=crop&w=600&h=400&q=80"
                tags={["React", "API", "Chart.js"]}
                link="https://github.com/"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProjectCard 
                title="Photography Portfolio Website"
                description="Minimalist photography portfolio showcasing high-resolution images with smooth transitions."
                imageSrc="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&h=400&q=80"
                tags={["HTML/CSS", "JavaScript", "Responsive"]}
                link="https://github.com/"
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-12 animate-on-scroll">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 transition-colors"
            >
              <span className="font-medium">View All Projects on GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="My Working Process" 
            subtitle="How I approach projects from concept to completion" 
            center
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-5 -left-2 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-3">Research & Strategy</h3>
                <p className="text-muted-foreground">Understanding project requirements and researching the best approach and technologies.</p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-5 -left-2 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-3">Design & Prototype</h3>
                <p className="text-muted-foreground">Creating wireframes, mockups and interactive prototypes for visualization and feedback.</p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-5 -left-2 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-3">Development</h3>
                <p className="text-muted-foreground">Implementing the solution using appropriate technologies while ensuring code quality.</p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-5 -left-2 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-3">Test & Deploy</h3>
                <p className="text-muted-foreground">Rigorous testing for bugs and performance issues before final deployment to production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="mb-4">
                <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium">
                  Skills & Experience
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                My Academic Journey & Achievements
              </h2>
              <p className="text-muted-foreground mb-8">
                Throughout my academic journey, I've had the opportunity to work on diverse projects and develop a wide range of skills that have prepared me for real-world challenges.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-brand-blue shrink-0 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Education</h4>
                    <p className="text-muted-foreground">Bachelor's degree in Information Technology with focus on software development and system design.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="text-brand-blue shrink-0 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Technical Skills</h4>
                    <p className="text-muted-foreground">Proficient in front-end and back-end development, with experience in modern frameworks and design tools.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="text-brand-blue shrink-0 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Projects</h4>
                    <p className="text-muted-foreground">Completed several notable projects including the Instagram Fake Profile Detection Tool and mobile applications.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-on-scroll">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <Figma size={24} className="text-brand-blue" />
                  </div>
                  <h4 className="font-semibold">UI/UX Design</h4>
                </div>
                <p className="text-muted-foreground text-sm">Expert in creating user-centered designs with Figma.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <Code size={24} className="text-brand-blue" />
                  </div>
                  <h4 className="font-semibold">Web Dev</h4>
                </div>
                <p className="text-muted-foreground text-sm">Skilled in building responsive web applications.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <Smartphone size={24} className="text-brand-blue" />
                  </div>
                  <h4 className="font-semibold">Mobile Apps</h4>
                </div>
                <p className="text-muted-foreground text-sm">Experience in creating native and cross-platform mobile apps.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <Instagram size={24} className="text-brand-blue" />
                  </div>
                  <h4 className="font-semibold">Photography</h4>
                </div>
                <p className="text-muted-foreground text-sm">Creative photography skills to complement design work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-brand-blue/5">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Get In Touch" 
            subtitle="Let's discuss your project or just say hello" 
            center
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <ContactForm />
              </div>
            </div>
            
            <div className="animate-on-scroll flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:ancycp2004@gmail.com" className="text-muted-foreground hover:text-brand-blue transition-colors">
                      ancycp2004@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:7806996150" className="text-muted-foreground hover:text-brand-blue transition-colors">
                      +91 7806996150
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <Linkedin size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/ancycp78" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-brand-blue transition-colors"
                    >
                      linkedin.com/in/ancycp78
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <Github size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-brand-blue transition-colors"
                    >
                      github.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
