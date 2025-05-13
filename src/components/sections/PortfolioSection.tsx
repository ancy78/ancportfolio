
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
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
              imageSrc="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&h=400&q=80"
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
  );
};

export default PortfolioSection;
