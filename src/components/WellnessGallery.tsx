import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  largeSpan?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Tranquil Spaces",
    category: "Ambiance",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&q=80",
    largeSpan: true
  },
  {
    id: 2,
    title: "Premium Products",
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&q=80"
  },
  {
    id: 3,
    title: "Expert Therapists",
    category: "Team",
    image: "https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixlib=rb-4.0.3&q=80"
  },
  {
    id: 4,
    title: "Relaxation Pools",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1610708275938-e6dfa4c890db?ixlib=rb-4.0.3&q=80",
    largeSpan: true
  },
  {
    id: 5,
    title: "Aromatherapy",
    category: "Treatments",
    image: "https://images.unsplash.com/photo-1636377435946-b5d838bf6229?ixlib=rb-4.0.3&q=80"
  },
  {
    id: 6,
    title: "Refreshments",
    category: "Services",
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&q=80"
  }
];

const WellnessGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
            // Add staggered animations for child elements
            const children = entry.target.querySelectorAll('.gallery-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('is-visible');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
    // Force immediate visibility
    setTimeout(() => {
      document.querySelectorAll('.gallery-item').forEach(el => {
        el.classList.add('is-visible');
      });
    }, 100);
    
    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <section 
      className="py-16 bg-spa-sage/10"
      ref={galleryRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            Wellness <span className="text-spa-gold">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Take a visual journey through our spa and wellness facilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={cn(
                "gallery-item opacity-0 translate-y-8 transition-all duration-700 ease-out overflow-hidden rounded-lg shadow-md",
                item.largeSpan && "md:col-span-2"
              )}
            >
              <div className="group relative overflow-hidden h-80">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-sm font-medium bg-spa-gold px-2 py-0.5 rounded">{item.category}</span>
                  <h3 className="text-2xl font-playfair mt-2">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/about" className="inline-flex items-center gap-2 text-spa-dark hover:text-spa-gold transition-colors duration-300 font-medium">
            <span>Learn more about our facilities</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WellnessGallery;
