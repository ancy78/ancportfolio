
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const ProcessSection = () => {
  return (
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
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative z-10">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-8 w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-4 dark:text-white">Research & Strategy</h3>
                <p className="text-muted-foreground dark:text-gray-300">Understanding project requirements and researching the best approach and technologies.</p>
              </div>
            </div>
            
            <div className="animate-on-scroll process-step relative">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative z-10">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-8 w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-4 dark:text-white">Design & Prototype</h3>
                <p className="text-muted-foreground dark:text-gray-300">Creating wireframes, mockups and interactive prototypes for visualization and feedback.</p>
              </div>
            </div>
            
            <div className="animate-on-scroll process-step relative">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative z-10">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-8 w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-4 dark:text-white">Development</h3>
                <p className="text-muted-foreground dark:text-gray-300">Implementing the solution using appropriate technologies while ensuring code quality.</p>
              </div>
            </div>
            
            <div className="animate-on-scroll process-step relative">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative z-10">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-8 w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-4 dark:text-white">Test & Deploy</h3>
                <p className="text-muted-foreground dark:text-gray-300">Rigorous testing for bugs and performance issues before final deployment to production.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ProcessSection;
