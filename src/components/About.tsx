
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/80 to-spa-dark/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold mb-4">
            About <span className="text-spa-gold">Us</span>
          </h1>
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            Discover the story, values, and expertise behind Bloomcave Spa
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section id="story" className="section-padding bg-spa-sage/10">
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
              <div className="absolute top-10 -left-10 p-4 glass bg-white rounded-lg backdrop-blur-sm border border-spa-gold/20 shadow-lg w-40 font-playfair">
                <p className="text-4xl font-semibold text-spa-gold">10+</p>
                <p className="text-spa-dark">Years of Excellence</p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <span className="text-spa-gold font-medium mb-2 inline-block">OUR JOURNEY</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                The <span className="text-spa-gold">Bloomcave</span> Story
              </h2>
              <div className="w-20 h-1 bg-spa-gold mb-8"></div>
              
              <p className="text-spa-dark/80 mb-6">
                Nestled in the heart of Benin City, Bloomcave Spa was established in 2013 with a vision to create 
                a sanctuary where clients can escape the hustle and bustle of everyday life. 
              </p>
              
              <p className="text-spa-dark/80 mb-6">
                Our founder, Elizabeth Okonkwo, after years of international spa management experience, returned to her 
                hometown with a dream to create a world-class wellness center that celebrates Nigerian culture and 
                incorporates local ingredients and traditions into luxury treatments.
              </p>
              
              <p className="text-spa-dark/80 mb-6">
                Our spa combines traditional Nigerian wellness practices with modern techniques to provide 
                an authentic and luxurious experience. We source local ingredients and employ skilled 
                therapists who understand the art of relaxation and rejuvenation.
              </p>
              
              <a href="#mission" className="inline-flex items-center gap-2 font-medium text-spa-gold hover:text-spa-dark transition-colors duration-300 group">
                Discover Our Mission
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section id="mission" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-spa-gold font-medium mb-2 inline-block">OUR PURPOSE</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Mission & <span className="text-spa-gold">Values</span>
            </h2>
            <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-spa-dark/80">
              We're committed to delivering exceptional spa experiences that honor our Nigerian heritage
              while meeting international standards of wellness and luxury.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Mission */}
            <div className="animate-on-scroll">
              <div className="flex-shrink-0 w-16 h-16 bg-spa-gold rounded-full flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Our Mission</h3>
              <p className="text-spa-dark/80 mb-6">
                To provide a sanctuary of wellness that nurtures the body, mind, and spirit through authentic Nigerian spa experiences, 
                exceptional service, and sustainable practices, helping our clients achieve balance and rejuvenation.
              </p>
              <p className="text-spa-dark/80">
                We aim to showcase the richness of Nigerian wellness traditions on a global stage while supporting our local 
                communities and environment.
              </p>
            </div>
            
            {/* Vision */}
            <div className="animate-on-scroll delay-100">
              <div className="flex-shrink-0 w-16 h-16 bg-spa-gold rounded-full flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Our Vision</h3>
              <p className="text-spa-dark/80 mb-6">
                To be recognized as Nigeria's premier spa destination, setting the gold standard for wellness experiences 
                across West Africa, and to pioneer innovative treatments that blend traditional wisdom with contemporary luxury.
              </p>
              <p className="text-spa-dark/80">
                We envision a future where Nigerian wellness practices are celebrated globally, and where Bloomcave Spa 
                leads this cultural and wellness renaissance.
              </p>
            </div>
            
            {/* Values */}
            <div className="animate-on-scroll md:col-span-2 mt-8">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-center">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-spa-beige p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
                  </div>
                  <h4 className="text-lg font-playfair font-semibold mb-2">Authenticity</h4>
                  <p className="text-spa-dark/80">Honoring our Nigerian heritage and bringing genuine practices to our treatments.</p>
                </div>
                
                <div className="bg-spa-beige p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <h4 className="text-lg font-playfair font-semibold mb-2">Excellence</h4>
                  <p className="text-spa-dark/80">Delivering uncompromising quality in every treatment and service we provide.</p>
                </div>
                
                <div className="bg-spa-beige p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sprout"><path d="M7 20.5a7 7 0 0 0 7-7h-7Z"/><path d="M7 8.8V8a3 3 0 0 1 5.5-1.65"/><path d="M11.5 3.5A6 6 0 0 1 17 9.3v.7"/><path d="M17 9a10 10 0 0 1-15.28 7"/></svg>
                  </div>
                  <h4 className="text-lg font-playfair font-semibold mb-2">Sustainability</h4>
                  <p className="text-spa-dark/80">Embracing eco-friendly practices and supporting local communities and farmers.</p>
                </div>
                
                <div className="bg-spa-beige p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h4 className="text-lg font-playfair font-semibold mb-2">Inclusivity</h4>
                  <p className="text-spa-dark/80">Creating a welcoming space for all, where every client feels valued and respected.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="section-padding bg-spa-sage/10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-spa-gold font-medium mb-2 inline-block">OUR EXPERTS</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Meet The <span className="text-spa-gold">Team</span>
            </h2>
            <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-spa-dark/80">
              Our skilled therapists and staff members are dedicated to providing you with exceptional care and personalized attention.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="animate-on-scroll group">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80" 
                  alt="Elizabeth Okonkwo" 
                  className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-playfair font-semibold">Elizabeth Okonkwo</h3>
                <p className="text-spa-gold">Founder & Spa Director</p>
                <p className="text-spa-dark/70 mt-3">With over 15 years of international spa management experience, Elizabeth brings global wellness standards to Bloomcave.</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="animate-on-scroll group delay-100">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
                  alt="Amara Nwachukwu" 
                  className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-playfair font-semibold">Amara Nwachukwu</h3>
                <p className="text-spa-gold">Head Massage Therapist</p>
                <p className="text-spa-dark/70 mt-3">Certified in both traditional Nigerian and Western massage techniques, Amara specializes in deep tissue and aromatherapy treatments.</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="animate-on-scroll group delay-200">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Ngozi Adeyemi" 
                  className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-playfair font-semibold">Ngozi Adeyemi</h3>
                <p className="text-spa-gold">Facial Specialist</p>
                <p className="text-spa-dark/70 mt-3">With a background in dermatology and aesthetics, Ngozi creates customized facial treatments for all skin types and concerns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-spa-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Experience <span className="text-spa-gold">Bloomcave</span> Today
            </h2>
            <p className="text-white/80 mb-8">
              Ready to indulge in the ultimate relaxation experience? Book your appointment now and begin your journey to wellness and rejuvenation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/booking" className="spa-button">
                Book an Appointment
              </a>
              <a href="/contact" className="px-6 py-3 bg-transparent border-2 border-spa-gold text-spa-gold rounded-md font-poppins font-medium hover:bg-spa-gold/10 transition-all duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
