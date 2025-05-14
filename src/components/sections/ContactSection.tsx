
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
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
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl shadow-xl contact-card">
              <h3 className="text-2xl font-semibold mb-8 inline-flex items-center text-foreground">
                <span className="w-6 h-1 bg-brand-blue rounded-full mr-2"></span>
                Send Me a Message
              </h3>
              <ContactForm />
            </div>
          </div>
          
          <div className="animate-on-scroll flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-10 inline-flex items-center text-foreground">
              <span className="w-6 h-1 bg-brand-blue rounded-full mr-2"></span>
              Contact Information
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-md contact-info-item">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-lg text-foreground">Email</h4>
                  <a 
                    href="mailto:ancycp2004@gmail.com" 
                    className="text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center group"
                  >
                    <span className="border-b border-transparent group-hover:border-brand-blue transition-colors pb-1">ancycp2004@gmail.com</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-md contact-info-item">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-lg text-foreground">Phone</h4>
                  <a 
                    href="tel:7806996150" 
                    className="text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center group"
                  >
                    <span className="border-b border-transparent group-hover:border-brand-blue transition-colors pb-1">+91 7806996150</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-md contact-info-item">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                  <Linkedin size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-lg text-foreground">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/ancycp78" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center group"
                  >
                    <span className="border-b border-transparent group-hover:border-brand-blue transition-colors pb-1">linkedin.com/in/ancycp78</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-md contact-info-item">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                  <Github size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-lg text-foreground">GitHub</h4>
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center group"
                  >
                    <span className="border-b border-transparent group-hover:border-brand-blue transition-colors pb-1">github.com</span>
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
  );
};

export default ContactSection;
