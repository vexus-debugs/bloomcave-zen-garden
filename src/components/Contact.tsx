
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-spa-dark text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            Visit <span className="text-spa-gold">Bloomcave</span>
          </h2>
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            Find us in the heart of Benin City. Our tranquil sanctuary awaits your visit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="h-96 md:h-full rounded-lg overflow-hidden shadow-lg">
            {/* For a real website, embed an actual Google Maps iframe here */}
            <div className="bg-spa-dark/50 h-full w-full flex items-center justify-center border border-spa-gold/20">
              <div className="text-center p-8">
                <MapPin size={48} className="text-spa-gold mx-auto mb-4" />
                <h3 className="text-xl font-playfair mb-2">Bloomcave Spa</h3>
                <p className="text-white/80">
                  123 Sapele Road<br />
                  Benin City, Edo State<br />
                  Nigeria
                </p>
                <p className="mt-6 text-spa-gold">Google Maps Embed Would Appear Here</p>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-spa-dark/60 p-6 rounded-lg border border-spa-gold/20 hover:border-spa-gold/40 transition-all duration-300">
                <Phone size={28} className="text-spa-gold mb-4" />
                <h3 className="text-lg font-playfair font-semibold mb-2">Phone</h3>
                <p className="text-white/80">+234 123 456 7890</p>
                <p className="text-white/80">+234 987 654 3210</p>
              </div>
              
              <div className="bg-spa-dark/60 p-6 rounded-lg border border-spa-gold/20 hover:border-spa-gold/40 transition-all duration-300">
                <Mail size={28} className="text-spa-gold mb-4" />
                <h3 className="text-lg font-playfair font-semibold mb-2">Email</h3>
                <p className="text-white/80">info@bloomcave.com</p>
                <p className="text-white/80">bookings@bloomcave.com</p>
              </div>
              
              <div className="bg-spa-dark/60 p-6 rounded-lg border border-spa-gold/20 hover:border-spa-gold/40 transition-all duration-300">
                <Clock size={28} className="text-spa-gold mb-4" />
                <h3 className="text-lg font-playfair font-semibold mb-2">Hours</h3>
                <p className="text-white/80">Mon-Fri: 9:00 AM - 8:00 PM</p>
                <p className="text-white/80">Sat: 10:00 AM - 6:00 PM</p>
                <p className="text-white/80">Sun: 12:00 PM - 5:00 PM</p>
              </div>
              
              <div className="bg-spa-dark/60 p-6 rounded-lg border border-spa-gold/20 hover:border-spa-gold/40 transition-all duration-300">
                <div className="flex space-x-4 mb-4">
                  <Instagram size={28} className="text-spa-gold" />
                  <Facebook size={28} className="text-spa-gold" />
                </div>
                <h3 className="text-lg font-playfair font-semibold mb-2">Social Media</h3>
                <p className="text-white/80">@BloomcaveSpa</p>
                <p className="text-white/80">facebook.com/bloomcave</p>
              </div>
            </div>
            
            <div className="bg-spa-gold/10 p-6 rounded-lg border border-spa-gold/20">
              <h3 className="text-xl font-playfair font-semibold mb-4">Special Offers</h3>
              <p className="text-white/90 mb-4">
                Subscribe to our newsletter for exclusive deals and promotions. 
                Be the first to know about our seasonal packages and special events.
              </p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-4 py-2 rounded-md bg-spa-dark/50 border border-spa-gold/30 focus:outline-none focus:ring-2 focus:ring-spa-gold/50 text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-spa-gold text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
