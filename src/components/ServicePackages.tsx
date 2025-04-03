
import React from 'react';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Package {
  id: number;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  image: string;
}

const packages: Package[] = [
  {
    id: 1,
    name: "Bloomcave Signature Experience",
    price: "₦45,000",
    duration: "3 hours",
    description: "Our comprehensive signature package featuring a combination of our best treatments.",
    features: [
      "Full Body Massage",
      "Facial Treatment",
      "Body Scrub",
      "Steam Bath",
      "Refreshment"
    ],
    popular: true,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&q=80"
  },
  {
    id: 2,
    name: "Tranquility Retreat",
    price: "₦35,000",
    duration: "2.5 hours",
    description: "A refreshing retreat designed to relieve stress and promote deep relaxation.",
    features: [
      "Aromatherapy Massage",
      "Scalp Treatment",
      "Foot Reflexology",
      "Herbal Tea Service"
    ],
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&q=80"
  },
  {
    id: 3,
    name: "Couples Harmony",
    price: "₦60,000",
    duration: "2 hours",
    description: "Share a blissful experience with your partner in our luxurious couples suite.",
    features: [
      "Side-by-Side Massages",
      "Private Jacuzzi Session",
      "Champagne Service",
      "Chocolate Truffles"
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&q=80"
  }
];

const ServicePackages = () => {
  return (
    <section className="py-16 bg-spa-beige/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            Special <span className="text-spa-gold">Packages</span>
          </h2>
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Indulge in our carefully curated packages designed to provide a complete wellness experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="rounded-lg overflow-hidden bg-white shadow-lg border border-spa-beige/40 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/70 to-transparent"></div>
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-spa-gold hover:bg-spa-gold/90">
                    Most Popular
                  </Badge>
                )}
              </div>
              
              <div className="p-6 flex-1">
                <h3 className="text-xl font-playfair font-semibold mb-2">{pkg.name}</h3>
                <p className="text-spa-dark/70 text-sm mb-4">{pkg.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-spa-gold mt-1 mr-2 flex-shrink-0" />
                      <span className="text-spa-dark/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-spa-beige/10 border-t border-spa-beige/20">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-spa-gold font-semibold text-2xl">{pkg.price}</span>
                    <span className="text-xs text-spa-dark/60 ml-1">/ {pkg.duration}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.location.href = "/booking"}
                  className="w-full py-2.5 bg-spa-gold text-white rounded-md font-medium hover:bg-spa-gold/90 transition-all duration-300"
                >
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-spa-dark/70 italic mb-4">Looking for something more personalized?</p>
          <a href="/contact" className="inline-block px-6 py-3 border border-spa-gold text-spa-gold rounded-md hover:bg-spa-gold hover:text-white transition-all duration-300">
            Contact Us for Custom Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
