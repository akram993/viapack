import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-gray-900 hover:bg-gray-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out z-50 group"
          aria-label="Scroll to top"
          style={{
            backgroundColor: '#0ea298',
            '--hover-bg': '#0c8a82', // Slightly darker shade for hover
          }}
        >
          <ArrowUp 
            size={24}
            className="transform group-hover:-translate-y-1 transition-transform duration-300"
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;