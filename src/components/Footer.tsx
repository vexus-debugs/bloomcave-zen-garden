
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-spa-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-playfair font-semibold">
              <span className="text-spa-gold">Bloom</span>cave
            </h2>
            <p className="text-white/60 mt-2">Luxury Spa & Wellness Center</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <a href="#home" className="text-white/80 hover:text-spa-gold transition-colors duration-300">Home</a>
            <a href="#services" className="text-white/80 hover:text-spa-gold transition-colors duration-300">Services</a>
            <a href="#about" className="text-white/80 hover:text-spa-gold transition-colors duration-300">About</a>
            <a href="#testimonials" className="text-white/80 hover:text-spa-gold transition-colors duration-300">Testimonials</a>
            <a href="#booking" className="text-white/80 hover:text-spa-gold transition-colors duration-300">Book Now</a>
            <a href="#contact" className="text-white/80 hover:text-spa-gold transition-colors duration-300">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Bloomcave Spa. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-spa-gold transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-spa-gold transition-colors duration-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
