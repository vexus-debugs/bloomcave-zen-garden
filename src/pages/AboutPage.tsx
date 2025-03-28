
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | Bloomcave Spa';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <div className="pt-20 md:pt-24">
        <About />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;
