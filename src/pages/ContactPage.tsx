
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | Bloomcave Spa';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <div className="pt-20 md:pt-24">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
