import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Conditions', path: '/conditions' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4`}>
      <nav 
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled || isOpen 
            ? 'bg-navy-950/80 backdrop-blur-md border-white/10 shadow-lg shadow-sky-900/10' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="images/image1.png" 
              alt="Ninja Motion Therapies" 
              className="h-10 w-auto transition-transform group-hover:scale-105" 
            />
            <span className="font-display font-bold text-xl text-white tracking-wide hidden sm:block">
              NINJA <span className="text-sky-500">MOTION</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path 
                    ? 'text-sky-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-sky-600/20 hover:shadow-sky-600/40 flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-lg font-medium ${
                  location.pathname === link.path ? 'text-sky-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="block w-full text-center bg-sky-600 text-white py-3 rounded-xl font-bold mt-4"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;