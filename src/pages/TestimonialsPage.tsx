
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const TestimonialsPage = () => {
  useEffect(() => {
    document.title = 'Testimonials | Bloomcave Spa';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <div className="pt-20 md:pt-24">
        <Testimonials />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TestimonialsPage;
