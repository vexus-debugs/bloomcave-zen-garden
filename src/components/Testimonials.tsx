
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amara Okafor",
    role: "Regular Client",
    comment: "I've been to many spas across Nigeria, but Bloomcave truly stands out. The aromatherapy massage was divine, and the staff went above and beyond to ensure I was comfortable throughout my visit.",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Emmanuel Adeyemi",
    role: "First-time Visitor",
    comment: "My wife surprised me with a couples massage at Bloomcave, and it was an exceptional experience. The ambiance, the skill of the therapists, and the attention to detail were all impressive.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Chioma Nwosu",
    role: "Monthly Member",
    comment: "As someone who regularly deals with stress, my monthly sessions at Bloomcave have become essential to my wellbeing. Their deep tissue massage has significantly improved my chronic back pain.",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    rating: 4
  },
  {
    id: 4,
    name: "Oluwaseun Adeleke",
    role: "Business Traveler",
    comment: "Whenever I'm in Benin for business, I make sure to book a session at Bloomcave. Their facial treatments are outstanding, using natural ingredients that leave my skin glowing for days.",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    rating: 5
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
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
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section 
      id="testimonials" 
      ref={testimonialsRef}
      className="w-full py-20 relative overflow-hidden animate-on-scroll opacity-100"
    >
      {/* Background decor */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-spa-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-spa-lavender/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll is-visible">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            What Our <span className="text-spa-gold">Clients</span> Say
          </h2>
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Discover what makes Bloomcave a favorite among our clients. Read authentic testimonials 
            from people who have experienced our services.
          </p>
        </div>
        
        <div ref={sliderRef} className="w-full relative px-4">
          {/* Testimonial Slider - Full Width */}
          <div className="overflow-hidden relative w-full bg-gradient-to-r from-spa-beige/30 via-white to-spa-beige/30 py-12">
            <div 
              className="transition-all duration-500 ease-in-out flex w-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4 md:px-12"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto">
                    <div className="md:w-1/4 flex flex-col items-center md:mr-8 mb-6 md:mb-0">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-20 h-20 object-cover rounded-full border-2 border-spa-gold mb-4 hover:scale-105 transition-transform duration-300"
                      />
                      
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={16}
                            className={i < testimonial.rating ? "text-spa-gold fill-spa-gold" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      
                      <div className="text-center md:text-left">
                        <h4 className="font-playfair font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-spa-dark/60 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <blockquote className="text-spa-dark/80 italic text-lg md:text-xl relative">
                        <span className="absolute -top-6 -left-6 text-5xl text-spa-gold/20 font-serif">"</span>
                        {testimonial.comment}
                        <span className="absolute -bottom-10 -right-6 text-5xl text-spa-gold/20 font-serif">"</span>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows - Repositioned for full width */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-spa-gold hover:text-white transition-all duration-300 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-spa-gold hover:text-white transition-all duration-300 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentSlide ? "bg-spa-gold w-6" : "bg-spa-gold/30"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
