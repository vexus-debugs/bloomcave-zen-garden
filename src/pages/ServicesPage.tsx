
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ServicesHero from '@/components/ServicesHero';
import ServiceCategories from '@/components/ServiceCategories';
import ServicePackages from '@/components/ServicePackages';
import ServiceFAQ from '@/components/ServiceFAQ';
import ServiceCTA from '@/components/ServiceCTA';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Services | Bloomcave Spa';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <div className="pt-20 md:pt-24">
        <ServicesHero />
        <ServiceCategories />
        <Services />
        <ServicePackages />
        <ServiceFAQ />
        <ServiceCTA />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;
