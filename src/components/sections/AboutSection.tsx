
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll about-image-border">
            <div className="overflow-hidden rounded-2xl w-full shadow-xl h-[80vh] max-h-[700px]">
              <img 
                src="https://i.ibb.co/g10zqHw" 
                alt="About Ancy" 
                className="rounded-2xl w-full h-full object-cover transform hover:scale-[1.02] transition-all duration-500"
              />
            </div>
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
  );
};

export default AboutSection;
