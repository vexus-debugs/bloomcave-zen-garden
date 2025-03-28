
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-playfair font-semibold text-spa-dark">
            <span className="text-spa-gold">Bloom</span>cave
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-all duration-300 relative',
                  isScrolled ? 'text-spa-dark hover:text-spa-gold' : 
                              location.pathname === '/' ? 'text-white hover:text-spa-gold' : 'text-spa-dark hover:text-spa-gold',
                  'after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-spa-gold after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full',
                  location.pathname === link.href && 'after:w-full text-spa-gold'
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button - Desktop */}
        <Link
          to="/booking"
          className="hidden md:block spa-button"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-spa-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-0 left-0 w-full h-screen bg-spa-beige z-40 transform transition-transform duration-300 md:hidden pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <ul className="flex flex-col items-center space-y-6 p-8">
          {navLinks.map((link, index) => (
            <li key={index} className="w-full">
              <Link
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-xl font-medium text-spa-dark hover:text-spa-gold transition-colors duration-300 block text-center py-2",
                  location.pathname === link.href && 'text-spa-gold'
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="w-full pt-4">
            <Link
              to="/booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="spa-button w-full block text-center"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
