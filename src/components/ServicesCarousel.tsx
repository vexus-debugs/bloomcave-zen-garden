
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CarouselService {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  popular?: boolean;
}

const carouselServices: CarouselService[] = [
  {
    id: 1,
    title: "Aromatherapy Massage",
    description: "Relax and rejuvenate with our signature aromatherapy massage using premium essential oils.",
    image: "https://images.unsplash.com/photo-1519823551278-6eaa7e12e597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    price: "₦15,000",
    duration: "60 min",
    popular: true
  },
  {
    id: 2,
    title: "Deep Tissue Massage",
    description: "Release tension and chronic pain with our therapeutic deep tissue massage technique.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "₦18,000",
    duration: "75 min"
  },
  {
    id: 3,
    title: "Facial Treatment",
    description: "Revitalize your skin with our premium facial using organic Nigerian ingredients.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "₦20,000",
    duration: "60 min",
    popular: true
  },
  {
    id: 4,
    title: "Hot Stone Therapy",
    description: "Experience the healing power of warm basalt stones combined with massage therapy.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "₦22,000",
    duration: "90 min"
  },
  {
    id: 5,
    title: "Body Scrub & Wrap",
    description: "Exfoliate and nourish your skin with our luxurious body scrub and moisturizing wrap.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "₦25,000",
    duration: "120 min"
  },
  {
    id: 6,
    title: "Couples Massage",
    description: "Share a relaxing experience with a loved one in our special couples massage room.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "₦30,000",
    duration: "75 min",
    popular: true
  },
];

const ServicesCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
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
      { threshold: 0.1 }
    );
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    // Force show everything immediately
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll, .animate-child').forEach(el => {
        el.classList.add('is-visible');
      });
    }, 100);
    
    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={carouselRef}
      className="py-16 bg-gradient-to-b from-white to-spa-beige/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            Explore Our <span className="text-spa-gold">Luxury</span> Treatments
          </h2>
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Swipe through our range of premium services designed for your ultimate relaxation and rejuvenation.
          </p>
        </div>
        
        <div className="animate-scale-in">
          <Carousel 
            opts={{ loop: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {carouselServices.map((service) => (
                <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1 h-full">
                    <Card className="overflow-hidden h-full border-spa-beige hover:shadow-lg transition-all duration-300 group">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {service.popular && (
                          <Badge className="absolute top-2 right-2 bg-spa-gold hover:bg-spa-gold/90">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg font-playfair">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm p-4 pt-0">
                        <p>{service.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center p-4 border-t border-spa-beige/40">
                        <div className="flex flex-col">
                          <span className="text-spa-gold font-semibold">{service.price}</span>
                          <span className="text-xs text-muted-foreground">{service.duration}</span>
                        </div>
                        <button 
                          onClick={() => navigate('/booking')}
                          className="px-3 py-1.5 bg-spa-gold/90 text-white text-sm rounded hover:bg-spa-gold transition-colors"
                        >
                          Book Now
                        </button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 bg-white hover:bg-spa-gold hover:text-white border-spa-gold/30" />
              <CarouselNext className="-right-12 bg-white hover:bg-spa-gold hover:text-white border-spa-gold/30" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center mt-10 animate-fade-in delay-300">
          <button 
            onClick={() => navigate('/services')}
            className="spa-button"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
