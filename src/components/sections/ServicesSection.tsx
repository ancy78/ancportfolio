
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { Layout, Smartphone, Code, Figma } from 'lucide-react';

const ServicesSection = () => {
  return (
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
                <path d="M12 2a10 10 0 1 0 10 10"></path>
                <path d="M12 12v-8"></path>
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
