import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kizi<span className="text-accent-500">Apparels</span></h3>
            <p className="text-gray-300 mb-4">
              A leading manufacturer and exporter of premium apparel products, committed to quality and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kiziapparels/" className="text-white hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/Kiziapparels" className="text-white hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-accent-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#brand-presence" className="text-gray-300 hover:text-accent-500 transition-colors">Brand Presence</a>
              </li>
              <li>
                <a href="#leadership" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-accent-500 mt-0.5" />
                <span className="text-gray-300">
                  H629, Sitapura Industrial Area, Sitapura,<br /> Jaipur, Rajasthan 302022
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent-500" />
                <span className="text-gray-300">9983023939</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent-500" />
                <span className="text-gray-300">info@kiziapparels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Kizi Apparels. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-accent-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;