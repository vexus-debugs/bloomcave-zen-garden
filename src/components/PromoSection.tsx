
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PromoSection = () => {
  const promoRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
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
    
    if (promoRef.current) {
      observer.observe(promoRef.current);
    }
    
    // Force immediate visibility
    setTimeout(() => {
      document.querySelectorAll('.promo-animate').forEach(el => {
        el.classList.add('is-visible');
      });
    }, 100);
    
    return () => {
      if (promoRef.current) {
        observer.unobserve(promoRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={promoRef}
      className="py-20 w-full relative overflow-hidden"
    >
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&q=80)' }}
      ></div>
      <div className="absolute inset-0 bg-spa-dark/70 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-white promo-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
              Special <span className="text-spa-gold">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-spa-gold mx-auto mb-4"></div>
            <p className="text-white/90 promo-animate opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out">
              Limited time promotion to welcome new clients
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
            <div className="promo-animate opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out">
              <h3 className="text-2xl font-playfair text-white mb-2">20% Off First Visit</h3>
              <p className="text-white/80 mb-4">
                Experience our luxury treatments at a special introductory price.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle size={18} className="text-spa-gold" />
                  <span>Valid for all treatments</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle size={18} className="text-spa-gold" />
                  <span>Includes complimentary refreshments</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle size={18} className="text-spa-gold" />
                  <span>Access to all spa facilities</span>
                </div>
              </div>
            </div>
            
            <div className="promo-animate opacity-0 translate-y-6 transition-all duration-700 delay-300 ease-out">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                <div className="text-center">
                  <h4 className="font-playfair text-xl text-white mb-4">Promotion Details</h4>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <CalendarDays size={18} className="text-spa-gold" />
                    <span className="text-white">Valid until June 30, 2025</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Clock size={18} className="text-spa-gold" />
                    <span className="text-white">Booking hours: 9AM - 8PM</span>
                  </div>
                  <div className="text-2xl font-playfair text-spa-gold font-semibold mb-6">
                    Use code: <span className="bg-white/10 px-3 py-1 rounded">BLOOM20</span>
                  </div>
                  <Button 
                    onClick={() => navigate('/booking')}
                    className="bg-spa-gold hover:bg-spa-gold/90 text-white w-full py-2.5"
                  >
                    Book Your Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center text-white/70 text-sm promo-animate opacity-0 translate-y-6 transition-all duration-700 delay-400 ease-out">
            <p>*Terms and conditions apply. Discount valid for first-time clients only. Cannot be combined with other offers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
