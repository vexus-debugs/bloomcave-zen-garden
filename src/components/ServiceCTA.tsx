
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-spa-dark text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-spa-dark to-spa-dark/70"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-spa-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-spa-gold/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold mb-6">
            Begin Your Wellness <span className="text-spa-gold">Journey</span> Today
          </h2>
          
          <p className="mb-8 text-lg text-white/80">
            Transform your routine with our rejuvenating spa experiences. From therapeutic massages to 
            revitalizing facials, we offer the perfect escape from everyday stress.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/booking')}
              className="px-8 py-4 bg-spa-gold text-white rounded-md font-poppins font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Experience
            </button>
            
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-poppins font-medium hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div className="text-center px-4">
              <p className="text-2xl font-playfair font-semibold text-spa-gold">1200+</p>
              <p className="text-white/70 text-sm">Happy Clients</p>
            </div>
            
            <div className="text-center px-4">
              <p className="text-2xl font-playfair font-semibold text-spa-gold">15+</p>
              <p className="text-white/70 text-sm">Expert Therapists</p>
            </div>
            
            <div className="text-center px-4">
              <p className="text-2xl font-playfair font-semibold text-spa-gold">25+</p>
              <p className="text-white/70 text-sm">Luxury Treatments</p>
            </div>
            
            <div className="text-center px-4">
              <p className="text-2xl font-playfair font-semibold text-spa-gold">8</p>
              <p className="text-white/70 text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
