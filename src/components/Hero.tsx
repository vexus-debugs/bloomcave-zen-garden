
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const headerText = document.querySelector('.hero-text');
    if (headerText) {
      headerText.classList.add('animate-fade-in');
    }
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/60 to-spa-dark/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center px-4 text-center text-white z-10">
        <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-6 opacity-0">
          Experience <span className="text-spa-gold">Tranquility</span>
        </h1>
        <p className="hero-text max-w-2xl text-lg md:text-xl opacity-0 animation-delay-300 animate-fade-in">
          Welcome to Bloomcave, Nigeria's premier spa sanctuary in Benin. 
          Immerse yourself in luxury treatments designed to rejuvenate your body, mind, and spirit.
        </p>
        
        <div className="mt-12 space-y-8">
          <button onClick={scrollToServices} className="spa-button">
            Explore Our Services
          </button>
          
          <div className="flex flex-col items-center space-y-4 animate-float">
            <span className="text-sm text-white/80">Scroll to discover</span>
            <div className="scroll-indicator flex justify-center">
              <span className="sr-only">Scroll down</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
