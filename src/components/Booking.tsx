
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    
    // In a real app, you would send this data to your server
    // Here we'll just show a toast notification
    toast({
      title: "Booking Request Sent",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: '',
    });
  };

  return (
    <section id="booking" className="section-padding bg-spa-beige relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-spa-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-spa-sage/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            Book Your <span className="text-spa-gold">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Reserve your spot for a rejuvenating experience at Bloomcave. 
            Fill out the form below, and our team will contact you to confirm your appointment.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&q=80" 
                  alt="Spa Booking"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-spa-dark/30 flex flex-col items-center justify-center text-white p-8">
                  <h3 className="text-2xl font-playfair font-semibold mb-4">Opening Hours</h3>
                  <ul className="space-y-2 text-center">
                    <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                    <li>Saturday: 10:00 AM - 6:00 PM</li>
                    <li>Sunday: 12:00 PM - 5:00 PM</li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/30 w-full text-center">
                    <p className="font-playfair text-lg mb-2">Contact Us</p>
                    <p>+234 123 456 7890</p>
                    <p>info@bloomcave.com</p>
                  </div>
                </div>
              </div>
              
              {/* Form Section */}
              <div className="p-8">
                <h3 className="text-xl font-playfair font-semibold mb-6">Request an Appointment</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User size={18} className="absolute top-3 left-3 text-spa-dark/50" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail size={18} className="absolute top-3 left-3 text-spa-dark/50" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50"
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone size={18} className="absolute top-3 left-3 text-spa-dark/50" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50"
                    />
                  </div>
                  
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full pl-4 pr-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50 appearance-none"
                    >
                      <option value="" disabled>Select a Service</option>
                      <option value="aromatherapy">Aromatherapy Massage</option>
                      <option value="deep-tissue">Deep Tissue Massage</option>
                      <option value="facial">Facial Treatment</option>
                      <option value="hot-stone">Hot Stone Therapy</option>
                      <option value="body-scrub">Body Scrub & Wrap</option>
                      <option value="couples">Couples Massage</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Calendar size={18} className="absolute top-3 left-3 text-spa-dark/50" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50"
                      />
                    </div>
                    
                    <div className="relative">
                      <Clock size={18} className="absolute top-3 left-3 text-spa-dark/50" />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <MessageCircle size={18} className="absolute top-3 left-3 text-spa-dark/50" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Special Requests or Notes"
                      className="w-full pl-10 pr-4 py-2 border border-spa-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-gold/50 min-h-[100px]"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3 bg-spa-gold text-white rounded-md font-poppins font-medium hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Request Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
