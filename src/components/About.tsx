
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-spa-sage/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1596178060671-7a58b126afb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80"
                alt="Bloomcave Spa Interior"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-64 h-64 z-0">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Spa Treatments"
                className="rounded-lg shadow-lg w-full h-full object-cover float-image"
              />
            </div>
            <div className="absolute top-10 -left-10 p-4 glass bg-spa-gold/10 rounded-lg backdrop-blur-sm border border-spa-gold/20 shadow-lg w-40 font-playfair">
              <p className="text-4xl font-semibold text-spa-gold">10+</p>
              <p className="text-spa-dark">Years of Excellence</p>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
              About <span className="text-spa-gold">Bloomcave</span>
            </h2>
            <div className="w-20 h-1 bg-spa-gold mb-8"></div>
            
            <p className="text-spa-dark/80 mb-6">
              Nestled in the heart of Benin City, Bloomcave Spa was established in 2013 with a vision to create 
              a sanctuary where clients can escape the hustle and bustle of everyday life. 
            </p>
            
            <p className="text-spa-dark/80 mb-6">
              Our spa combines traditional Nigerian wellness practices with modern techniques to provide 
              an authentic and luxurious experience. We source local ingredients and employ skilled 
              therapists who understand the art of relaxation and rejuvenation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-playfair font-semibold mb-1">Premium Quality</h3>
                  <p className="text-spa-dark/80">We use only the finest products and equipment</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-playfair font-semibold mb-1">Expert Therapists</h3>
                  <p className="text-spa-dark/80">Professionally trained and certified staff</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-playfair font-semibold mb-1">Personalized Care</h3>
                  <p className="text-spa-dark/80">Treatments tailored to your unique needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-playfair font-semibold mb-1">Tranquil Atmosphere</h3>
                  <p className="text-spa-dark/80">Peaceful environment for ultimate relaxation</p>
                </div>
              </div>
            </div>
            
            <a href="#booking" className="spa-button">
              Book Your Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
