import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/kizi_logo.jpeg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="block">
              <img 
                src={logo} 
                alt="Kizi Apparels" 
                className="h-16.1 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-primary-900 hover:text-accent-600 font-medium transition-colors ${
                isHomePage ? 'text-accent-600' : ''
              }`}
            >
              Home
            </Link>
            {isHomePage ? (
              <>
                <a href="#about" className="text-primary-900 hover:text-accent-600 font-medium transition-colors">
                  About
                </a>
                <a href="#performance" className="text-primary-900 hover:text-accent-600 font-medium transition-colors">
                  Performance
                </a>
                <a href="#brand-presence" className="text-primary-900 hover:text-accent-600 font-medium transition-colors">Brand Presence</a>
                <a href="#leadership" className="text-primary-900 hover:text-accent-600 font-medium transition-colors">
                  Leadership
                </a>
              </>
            ) : null}
            <Link 
              to="/contact" 
              className={`text-primary-900 hover:text-accent-600 font-medium transition-colors ${
                location.pathname === '/contact' ? 'text-accent-600' : ''
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/investor-portal" 
              className={`px-6 py-2 bg-primary-900 text-white rounded hover:bg-primary-800 transition-colors ${
                location.pathname === '/investor-portal' ? 'bg-primary-800' : ''
              }`}
            >
              Investor Portal
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <nav className="flex flex-col space-y-4 py-4">
              <Link 
                to="/" 
                className={`px-4 text-primary-900 hover:text-accent-600 font-medium transition-colors ${
                  isHomePage ? 'text-accent-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {isHomePage ? (
                <>
                  <a 
                    href="#about" 
                    className="px-4 text-primary-900 hover:text-accent-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#performance" 
                    className="px-4 text-primary-900 hover:text-accent-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Performance
                  </a>
                  <a 
                    href="#brand-presence" 
                    className="px-4 text-primary-900 hover:text-accent-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Brand Presence
                  </a>
                  <a 
                    href="#leadership" 
                    className="px-4 text-primary-900 hover:text-accent-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Leadership
                  </a>
                </>
              ) : null}
              <Link 
                to="/contact" 
                className={`px-4 text-primary-900 hover:text-accent-600 font-medium transition-colors ${
                  location.pathname === '/contact' ? 'text-accent-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4">
                <Link 
                  to="/investor-portal" 
                  className={`w-full block text-center px-6 py-2 bg-primary-900 text-white rounded hover:bg-primary-800 transition-colors ${
                    location.pathname === '/investor-portal' ? 'bg-primary-800' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Investor Portal
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;