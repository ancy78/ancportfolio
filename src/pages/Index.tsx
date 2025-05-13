
import { useEffect } from 'react';
import Footer from '@/components/Footer';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';
import NavbarWithThemeToggle from '@/components/NavbarWithThemeToggle';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ProcessSection from '@/components/sections/ProcessSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  useAnimateOnScroll();
  
  return (
    <div className="min-h-screen">
      <NavbarWithThemeToggle />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
