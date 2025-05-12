
import { useEffect } from 'react';

const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('show');
        }
      });
    };
    
    // Initial check for elements in viewport
    animateElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateElements);
    
    // Clean up
    return () => window.removeEventListener('scroll', animateElements);
  }, []);
};

export default useAnimateOnScroll;
