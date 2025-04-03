
import React from 'react';
import { Layers, UserPlus, Sparkles, Leaf, Heart, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCategory {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const categories: ServiceCategory[] = [
  {
    id: 1,
    title: "Massage Therapies",
    description: "Various massage techniques to relieve tension and promote relaxation.",
    icon: Layers,
    color: "bg-gradient-to-br from-pink-500 to-rose-500"
  },
  {
    id: 2,
    title: "Facial Treatments",
    description: "Rejuvenating facials that cleanse, exfoliate and nourish the skin.",
    icon: Sparkles,
    color: "bg-gradient-to-br from-blue-500 to-indigo-500"
  },
  {
    id: 3,
    title: "Body Treatments",
    description: "Full-body services including scrubs, wraps, and exfoliation treatments.",
    icon: UserPlus,
    color: "bg-gradient-to-br from-amber-500 to-yellow-500"
  },
  {
    id: 4,
    title: "Wellness Rituals",
    description: "Holistic experiences that balance energy and promote inner peace.",
    icon: Leaf,
    color: "bg-gradient-to-br from-green-500 to-emerald-500"
  },
  {
    id: 5,
    title: "Couples Treatments",
    description: "Shared experiences designed for couples to enjoy together.",
    icon: Heart,
    color: "bg-gradient-to-br from-red-500 to-pink-500"
  },
  {
    id: 6,
    title: "Premium Services",
    description: "Exclusive luxury treatments using premium products and techniques.",
    icon: Award,
    color: "bg-gradient-to-br from-purple-500 to-violet-500"
  }
];

const ServiceCategories = () => {
  return (
    <section id="service-categories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            Our Service <span className="text-spa-gold">Categories</span>
          </h2>
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Explore our diverse range of services tailored to meet your unique wellness needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-spa-beige/40 hover:-translate-y-1">
              <div className={cn("w-16 h-16 rounded-full flex items-center justify-center text-white mb-4", category.color)}>
                <category.icon size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-spa-dark text-center">{category.title}</h3>
              <p className="text-center text-spa-dark/70">{category.description}</p>
              <a href="#services" className="mt-4 text-spa-gold hover:text-spa-dark transition-colors duration-300 font-medium">View Services →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
