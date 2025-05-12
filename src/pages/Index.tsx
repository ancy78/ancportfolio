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
      
      {/* Hero Section - Keep as is since we already enhanced it */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 hero-modern-gradient">
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3 mb-2 reveal-text reveal-delay-1">
                <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium badge-glow inline-flex items-center">
                  <code className="mr-1">{'<'}</code>IT Student<code className="ml-1">{'/>'}</code>
                </span>
                <span className="px-4 py-1.5 bg-brand-yellow/10 text-brand-yellow rounded-full text-sm font-medium badge-glow inline-flex items-center">
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
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:ancycp2004@gmail.com" 
                  aria-label="Email"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className="relative hidden md:flex items-center justify-center">
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-blue/10 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-brand-purple/20"></div>
              
              {/* Profile image */}
              <div className="relative z-10">
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-3xl blur-md transform rotate-6 scale-105"></div>
                  <div className="relative bg-white rounded-3xl p-3 shadow-xl">
                    <img 
                      src={profileImageUrl} 
                      alt="Ancy C P" 
                      className="w-80 h-auto object-cover rounded-2xl hero-profile-image"
                    />
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-6 -right-8 bg-white p-3 rounded-xl shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <Code size={18} className="text-brand-blue" />
                    </div>
                    <span className="font-medium">Developer</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-white p-3 rounded-xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-yellow/10 rounded-full flex items-center justify-center">
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
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </section>
      
      {/* About Section - Enhanced */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll about-image-border">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&h=700&q=80" 
                alt="About Ancy" 
                className="rounded-2xl shadow-xl w-full object-cover transform hover:scale-[1.02] transition-all duration-500"
              />
            </div>
            
            <div className="animate-on-scroll space-y-8">
              <div className="inline-block mb-4 px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium">
                About Me
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
                Information Technology Student & Developer
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-brand-blue rounded-full"></span>
              </h2>
              
              <p className="text-muted-foreground">
                I am an Information Technology student with a passion for creating innovative digital solutions. My journey in tech began with a curiosity about how applications work, which led me to explore various programming languages and design tools.
              </p>
              
              <p className="text-muted-foreground">
                I specialize in UI/UX design, web development, and mobile app development, always striving to create seamless user experiences while maintaining clean code.
              </p>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="w-6 h-1 bg-brand-blue rounded-full mr-2"></span>
                  My Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["React", "Node.js", "Spring Boot", "Figma", "UI/UX", "JavaScript", "HTML/CSS", "Java", "Python", "Mobile Development"].map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
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
      
      {/* Services Section - Enhanced */}
      <section id="services" className="py-24 services-bg">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Services I Offer" 
            subtitle="Specialized expertise to help bring your digital vision to life" 
            center
            className="mb-16"
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
          
          <div className="mt-20 flex flex-col items-center animate-on-scroll">
            <h3 className="text-xl font-semibold mb-10 relative inline-block">
              Technologies I Work With
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-brand-blue rounded-full"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Figma size={28} className="text-brand-blue" />
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <path d="M12 2a10 10 0 1 0 10 10"></path>
                  <path d="M12 12v-8"></path>
                </svg>
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section - Enhanced */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Showcasing my best work and creative solutions" 
            center
            className="mb-16"
          />
          
          <div className="flex justify-center mb-10">
            <div className="inline-flex gap-2 p-1.5 bg-secondary rounded-full shadow-md">
              <button className="px-5 py-2 bg-white rounded-full text-sm font-medium shadow-sm">
                All Projects
              </button>
              <button className="px-5 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Web Apps
              </button>
              <button className="px-5 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Mobile Apps
              </button>
              <button className="px-5 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
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
          
          <div className="flex justify-center mt-14 animate-on-scroll">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 transition-colors group"
            >
              <span className="font-medium border-b border-transparent group-hover:border-brand-blue/80 transition-colors pb-1">View All Projects on GitHub</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Process Section - Enhanced */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="My Working Process" 
            subtitle="How I approach projects from concept to completion" 
            center
            className="mb-16"
          />
          
          <div className="relative z-10">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-brand-blue/30 -translate-y-1/2"></div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 relative">
              <div className="animate-on-scroll process-step relative">
                <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-8 w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mt-6 mb-4">Research & Strategy</h3>
                  <p className="text-muted-foreground">Understanding project requirements and researching the best approach and technologies.</p>
                </div>
              </div>
              
              <div className="animate-on-scroll process-step relative">
                <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-8 w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mt-6 mb-4">Design & Prototype</h3>
                  <p className="text-muted-foreground">Creating wireframes, mockups and interactive prototypes for visualization and feedback.</p>
                </div>
              </div>
              
              <div className="animate-on-scroll process-step relative">
                <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-8 w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mt-6 mb-4">Development</h3>
                  <p className="text-muted-foreground">Implementing the solution using appropriate technologies while ensuring code quality.</p>
                </div>
              </div>
              
              <div className="animate-on-scroll process-step relative">
                <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-8 w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mt-6 mb-4">Test & Deploy</h3>
                  <p className="text-muted-foreground">Rigorous testing for bugs and performance issues before final deployment to production.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* Achievements Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll space-y-8">
              <div className="inline-block mb-4 px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium">
                Skills & Experience
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
                My Academic Journey & Achievements
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-brand-blue rounded-full"></span>
              </h2>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Throughout my academic journey, I've had the opportunity to work on diverse projects and develop a wide range of skills that have prepared me for real-world challenges.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 about-card pl-4 py-1">
                  <div className="text-brand-blue shrink-0 mt-1">
                    <CheckCircle size={22} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Education</h4>
                    <p className="text-muted-foreground">Bachelor's degree in Information Technology with focus on software development and system design.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 about-card pl-4 py-1">
                  <div className="text-brand-blue shrink-0 mt-1">
                    <CheckCircle size={22} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Technical Skills</h4>
                    <p className="text-muted-foreground">Proficient in front-end and back-end development, with experience in modern frameworks and design tools.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 about-card pl-4 py-1">
                  <div className="text-brand-blue shrink-0 mt-1">
                    <CheckCircle size={22} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Projects</h4>
                    <p className="text-muted-foreground">Completed several notable projects including the Instagram Fake Profile Detection Tool and mobile applications.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-on-scroll">
              <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <Figma size={24} className="text-brand-blue" />
                  </div>
                  <h4 className="font-semibold">UI/UX Design</h4>
                </div>
                <p className="text-muted-foreground text-sm">Expert in creating user-centered designs with Figma.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <Code size={24} className="text-brand-blue" />
                  </div>
                  <h4 className="font-semibold">Web Dev</h4>
                </div>
                <p className="text-muted-foreground text-sm">Skilled in building responsive web applications.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <Smartphone size={24} className="text-brand-blue" />
                  </div>
                  <h4 className="font-semibold">Mobile Apps</h4>
                </div>
                <p className="text-muted-foreground text-sm">Experience in creating native and cross-platform mobile apps.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
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
      
      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Get In Touch" 
            subtitle="Let's discuss your project or just say hello" 
            center
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl contact-card">
                <h3 className="text-2xl font-semibold mb-8 inline-flex items-center">
                  <span className="w-6 h-1 bg-brand-blue rounded-full mr-2"></span>
                  Send Me a Message
                </h3>
                <ContactForm />
              </div>
            </div>
            
            <div className="animate-on-scroll flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-10 inline-flex items-center">
                <span className="w-6 h-1 bg-brand-blue rounded-full mr-2"></span>
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md contact-info-item">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-lg">Email</h4>
                    <a 
                      href="mailto:ancycp2004@gmail.com" 
                      className="text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center group"
                    >
                      <span className="border-b border-transparent group-hover:border-brand-blue transition-all">ancycp2004@gmail.com</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md contact-info-item">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-lg">Phone</h4>
                    <a 
                      href="tel:7806996150" 
                      className="text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center group"
                    >
                      <span className="border-b border-transparent group-hover:border-brand-blue transition-all">+91 7806996150</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md contact-info-item">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <Linkedin size={24} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-lg">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/ancycp78" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center group"
                    >
                      <span className="border-b border-transparent group-hover:border-brand-blue transition-all">linkedin.com/in/ancycp78</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md contact-info-item">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <Github size={24} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-lg">GitHub</h4>
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center group"
                    >
                      <span className="border-b border-transparent group-hover:border-brand-blue transition-all">github.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-40 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
