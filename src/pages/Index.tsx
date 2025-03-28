
import React, { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  // Refs for animation targets
  const featuredRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
            // Add staggered animations for child elements
            const children = entry.target.querySelectorAll('.animate-child');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('is-visible');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    
    // Apply animations immediately to make content visible on initial load
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('is-visible');
      el.classList.remove('opacity-0');
      (el as HTMLElement).style.transform = 'translateY(0)';
    });
    
    // Then set up the observer for scroll animations after the initial load
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    
    // Observe section refs
    if (featuredRef.current) observer.observe(featuredRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
      if (featuredRef.current) observer.unobserve(featuredRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
    };
  }, []);

  // Update document title
  useEffect(() => {
    document.title = 'Bloomcave Spa | Luxury Wellness in Benin City';
  }, []);

  // Add immediate visibility to all elements on first paint
  useEffect(() => {
    // Make all animated elements visible immediately
    const elements = document.querySelectorAll('[style*="opacity: 0"]');
    elements.forEach(el => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      
      <div className="relative">
        {/* Featured Services Section */}
        <section ref={featuredRef} className="section-padding bg-spa-beige opacity-100">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-on-scroll is-visible">
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
                Featured <span className="text-spa-gold">Experiences</span>
              </h2>
              <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-spa-dark/80">
                Indulge in our signature treatments designed to nurture your body, mind, and spirit.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Signature Massage */}
              <div className="spa-card overflow-hidden group animate-child is-visible">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Bloomcave Signature Massage"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-spa-dark">Bloomcave Signature Massage</h3>
                  <p className="text-spa-dark/70 mb-4">Our holistic approach combines traditional techniques with aromatic oils to release tension and restore balance.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-spa-gold font-medium">₦22,000</span>
                    <a 
                      href="/booking" 
                      className="inline-block font-medium text-spa-gold hover:text-spa-dark transition-colors duration-300"
                    >
                      Book Now →
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Gold Facial */}
              <div className="spa-card overflow-hidden group animate-child is-visible">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="24K Gold Facial"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-spa-dark">24K Gold Facial</h3>
                  <p className="text-spa-dark/70 mb-4">Luxurious gold-infused treatment that reduces fine lines and brightens your complexion for a radiant glow.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-spa-gold font-medium">₦28,000</span>
                    <a 
                      href="/booking" 
                      className="inline-block font-medium text-spa-gold hover:text-spa-dark transition-colors duration-300"
                    >
                      Book Now →
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Body Scrub */}
              <div className="spa-card overflow-hidden group animate-child is-visible">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Exfoliating Body Scrub"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-spa-dark">Exfoliating Body Scrub</h3>
                  <p className="text-spa-dark/70 mb-4">Renew your skin with our gentle exfoliating treatment using natural ingredients sourced from Nigerian farms.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-spa-gold font-medium">₦19,500</span>
                    <a 
                      href="/booking" 
                      className="inline-block font-medium text-spa-gold hover:text-spa-dark transition-colors duration-300"
                    >
                      Book Now →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 animate-child is-visible">
              <a href="/services" className="spa-button">
                View All Services
              </a>
            </div>
          </div>
        </section>
        
        {/* About Overview Section */}
        <section ref={aboutRef} className="section-padding bg-white opacity-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-child is-visible">
                <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                  Welcome to <span className="text-spa-gold">Bloomcave</span> Spa
                </h2>
                <div className="w-20 h-1 bg-spa-gold mb-8"></div>
                
                <p className="text-spa-dark/80 mb-6">
                  Nestled in the heart of Benin City, Bloomcave Spa is a sanctuary of tranquility 
                  designed to help you escape the stresses of everyday life and reconnect with your inner self.
                </p>
                
                <p className="text-spa-dark/80 mb-8">
                  Our experienced therapists blend traditional Nigerian wellness practices with modern techniques, 
                  using premium products to deliver transformative experiences that nurture your body, mind, and spirit.
                </p>
                
                <a href="/about" className="spa-button">
                  Discover Our Story
                </a>
              </div>
              
              <div className="relative animate-child is-visible">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Bloomcave Spa Reception"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-spa-gold/20 rounded-full z-0 animate-pulse"></div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-spa-sage/30 rounded-full z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section - Full Width */}
        <div ref={testimonialsRef} className="w-full bg-spa-dark/5 py-0">
          <Testimonials />
          
          <div className="text-center pb-12">
            <a href="/testimonials" className="spa-button">
              View More Testimonials
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

// Make sure animations work when page loads
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll, [style*="opacity: 0"]').forEach(el => {
      el.classList.add('is-visible');
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'translateY(0)';
    });
  }, 100); // Reduced timeout to make content appear faster
});

export default Index;
