
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596178060671-7a58b126afb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80')` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/80 to-spa-dark/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold mb-4">
            Contact <span className="text-spa-gold">Us</span>
          </h1>
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            We're here to assist you with any questions or bookings
          </p>
        </div>
      </section>
    
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <span className="text-spa-gold font-medium mb-2 inline-block">GET IN TOUCH</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                Contact <span className="text-spa-gold">Information</span>
              </h2>
              <div className="w-20 h-1 bg-spa-gold mb-8"></div>
              
              <p className="text-spa-dark/80 mb-8">
                We would love to hear from you! Whether you have questions about our services, 
                need to make a booking, or want to provide feedback, our team is here to help.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-playfair font-semibold mb-1">Our Location</h3>
                    <p className="text-spa-dark/80">123 Sapele Road<br />Benin City, Edo State<br />Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-playfair font-semibold mb-1">Phone</h3>
                    <p className="text-spa-dark/80">+234 123 456 7890</p>
                    <p className="text-spa-dark/80">+234 987 654 3210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-playfair font-semibold mb-1">Email</h3>
                    <p className="text-spa-dark/80">info@bloomcave.com</p>
                    <p className="text-spa-dark/80">bookings@bloomcave.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-spa-gold rounded-full flex items-center justify-center text-white">
                    <Clock size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-playfair font-semibold mb-1">Hours</h3>
                    <p className="text-spa-dark/80">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-spa-dark/80">Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-spa-dark/80">Sunday: 12:00 PM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-playfair font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-spa-gold/90 hover:bg-spa-gold rounded-full flex items-center justify-center text-white transition-all duration-300">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-spa-gold/90 hover:bg-spa-gold rounded-full flex items-center justify-center text-white transition-all duration-300">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-spa-gold/90 hover:bg-spa-gold rounded-full flex items-center justify-center text-white transition-all duration-300">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="bg-spa-beige/60 rounded-lg p-8 shadow-lg border border-spa-beige">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Send Us a Message</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-spa-dark mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-spa-dark mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-spa-dark mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-spa-dark mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-spa-dark mb-1">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-spa-gold text-white rounded-md font-poppins font-medium hover:bg-spa-dark transition-all duration-300"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 relative">
        <div className="absolute inset-0 bg-spa-dark/10 flex items-center justify-center z-10">
          <div className="text-center bg-white/90 p-8 rounded-lg shadow-lg backdrop-blur-sm">
            <MapPin size={36} className="text-spa-gold mx-auto mb-4" />
            <h3 className="text-xl font-playfair mb-2">Visit Our Spa</h3>
            <p className="text-spa-dark/80">
              123 Sapele Road, Benin City<br />
              Edo State, Nigeria
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-spa-gold text-white rounded-md text-sm hover:bg-opacity-90 transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
        
        {/* Map placeholder - would be replaced by a real Google Maps embed */}
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/3.32,6.38,13,0/1200x600?access_token=pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2s4YnE4NHZqMDBsZjNkcDJkMDc2d2tmNiJ9.gCx2gkujuHyItZ4nZ5rPLQ")' }}></div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section-padding bg-spa-beige">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-semibold mb-4">
              Subscribe to Our <span className="text-spa-gold">Newsletter</span>
            </h2>
            <p className="text-spa-dark/80 mb-8">
              Get exclusive offers, spa tips, and updates on new services delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-4 py-3 border border-spa-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-spa-gold text-white rounded-md font-poppins font-medium hover:bg-spa-dark transition-all duration-300 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-sm text-spa-dark/60 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive our marketing emails.
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
