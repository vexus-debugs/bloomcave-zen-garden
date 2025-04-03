import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Aromatherapy Massage",
    description: "Relax and rejuvenate with our signature aromatherapy massage using premium essential oils.",
    image: "https://images.unsplash.com/photo-1519823551278-6eaa7e12e597?ixlib=rb-4.0.3&q=80",
    price: "₦15,000"
  },
  {
    id: 2,
    title: "Deep Tissue Massage",
    description: "Release tension and chronic pain with our therapeutic deep tissue massage technique.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&q=80",
    price: "₦18,000"
  },
  {
    id: 3,
    title: "Facial Treatment",
    description: "Revitalize your skin with our premium facial using organic Nigerian ingredients.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&q=80",
    price: "₦20,000"
  },
  {
    id: 4,
    title: "Hot Stone Therapy",
    description: "Experience the healing power of warm basalt stones combined with massage therapy.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&q=80",
    price: "₦22,000"
  },
  {
    id: 5,
    title: "Body Scrub & Wrap",
    description: "Exfoliate and nourish your skin with our luxurious body scrub and moisturizing wrap.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&q=80",
    price: "₦25,000"
  },
  {
    id: 6,
    title: "Couples Massage",
    description: "Share a relaxing experience with a loved one in our special couples massage room.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&q=80",
    price: "₦30,000"
  },
];

const Services = () => {
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
    <section 
      id="services" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-spa-beige to-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            Our <span className="text-spa-gold">Premium</span> Services
          </h2>
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Discover our range of luxurious treatments designed to pamper, relax, and rejuvenate. 
            Each service is expertly crafted to provide a unique experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={cn(
                "spa-card overflow-hidden group animate-on-scroll",
                index % 3 === 0 ? "delay-100" : index % 3 === 1 ? "delay-200" : "delay-300"
              )}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 bg-spa-gold text-white px-3 py-1 rounded font-medium">
                  {service.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2 text-spa-dark">{service.title}</h3>
                <p className="text-spa-dark/70 mb-4">{service.description}</p>
                <a 
                  href="#booking" 
                  className="inline-block font-medium text-spa-gold hover:text-spa-dark transition-colors duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-spa-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  Book Service
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
