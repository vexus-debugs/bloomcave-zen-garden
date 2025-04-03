
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesHero = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative py-16 bg-spa-dark text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&q=80')`,
          opacity: loaded ? 0.3 : 0
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/90 to-spa-dark/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold mb-6">
            Luxury <span className="text-spa-gold">Spa Services</span>
          </h1>
          
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto">
            Discover our comprehensive range of premium spa and wellness treatments designed to rejuvenate 
            your body, mind, and spirit. Each service is meticulously crafted to provide a unique and 
            transformative experience.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-8">
            <button 
              onClick={() => navigate('/booking')}
              className="px-8 py-4 bg-spa-gold text-white rounded-md font-poppins font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Now
            </button>
            
            <button 
              onClick={() => {
                const element = document.getElementById('service-categories');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-poppins font-medium hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
