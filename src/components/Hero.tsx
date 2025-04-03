
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
    
    // Set up image rotation
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const heroImages = [
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&q=80"
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url('${image}')`,
            opacity: loaded && currentImage === index ? 1 : 0,
            zIndex: 0
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/70 to-spa-dark/40"></div>
        </div>
      ))}

      {/* Image Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index ? "w-8 bg-spa-gold" : "bg-white/50"
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative h-full flex flex-col justify-center items-center px-6 text-center text-white z-10 transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-semibold mb-6">
          Experience <span className="text-spa-gold">Tranquility</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-10 text-white/90">
          Welcome to Bloomcave, Nigeria's premier spa sanctuary in Benin. 
          Immerse yourself in luxury treatments designed to rejuvenate your body, mind, and spirit.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <button 
            onClick={() => navigate('/services')}
            className="px-8 py-4 bg-spa-gold text-white rounded-md font-poppins font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Our Services
          </button>
          
          <button 
            onClick={() => navigate('/booking')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-poppins font-medium hover:bg-white/10 transition-all duration-300"
          >
            Book Now
          </button>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center space-y-4 animate-float">
          <span className="text-sm text-white/80">Discover More</span>
          <button onClick={scrollToBottom} className="text-white/80 hover:text-white transition-colors">
            <div className="scroll-indicator">
              <span className="sr-only">Scroll down</span>
              <ArrowDown className="animate-bounce mt-2" size={18} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
