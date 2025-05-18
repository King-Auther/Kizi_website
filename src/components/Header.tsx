import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/kizi_logo.jpeg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="block">
              <img 
                src={logo} 
                alt="Kizi Apparels" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <a href="#about" className="text-primary-900 hover:text-accent-600 font-medium transition-colors">
                  About
                </a>
                <a href="#performance" className="text-primary-900 hover:text-accent-600 font-medium transition-colors">
                  Performance
                </a>
                <a href="#opportunities" className="text-primary-900 hover:text-accent-600 font-medium transition-colors">
                  Opportunities
                </a>
                <a href="#leadership" className="text-primary-900 hover:text-accent-600 font-medium transition-colors">
                  Leadership
                </a>
              </>
            ) : null}
            <Link to="/contact" className="text-primary-900 hover:text-accent-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link 
              to="/investor-portal" 
              className="px-6 py-2 bg-primary-900 text-white rounded hover:bg-primary-800 transition-colors"
            >
              Investor Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary-900" />
            ) : (
              <Menu className="h-6 w-6 text-primary-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-slideDown">
            <nav className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <a 
                    href="#about" 
                    className="text-primary-900 hover:text-accent-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#performance" 
                    className="text-primary-900 hover:text-accent-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Performance
                  </a>
                  <a 
                    href="#opportunities" 
                    className="text-primary-900 hover:text-accent-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Opportunities
                  </a>
                  <a 
                    href="#leadership" 
                    className="text-primary-900 hover:text-accent-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Leadership
                  </a>
                </>
              ) : null}
              <Link 
                to="/contact" 
                className="text-primary-900 hover:text-accent-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/investor-portal" 
                className="px-6 py-2 bg-primary-900 text-white rounded hover:bg-primary-800 transition-colors inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Investor Portal
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;