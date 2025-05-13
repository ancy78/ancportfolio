
import React from 'react';
import { CheckCircle, Figma, Code, Smartphone, Instagram } from 'lucide-react';

const AchievementsSection = () => {
  return (
    <section className="py-24 bg-background">
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
  );
};

export default AchievementsSection;
