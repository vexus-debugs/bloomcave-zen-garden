
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const BookingPage = () => {
  useEffect(() => {
    document.title = 'Book an Appointment | Bloomcave Spa';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <div className="pt-20 md:pt-24">
        <Booking />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BookingPage;
