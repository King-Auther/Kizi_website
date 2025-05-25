import React from 'react';
import heroImage from '../assets/brand_recog/Screenshot 2025-05-25 131618.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-accent-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-10 bg-pattern"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 py-20 pt-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-block mb-6 px-4 py-2 bg-accent-100 rounded-full">
              <span className="text-accent-600 font-semibold">Welcome to Kizi Apparels</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
              Empowering Women Through<br />
              <span className="text-accent-600 relative">
                Elegant Fashion
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3C50 3 50 3 100 3C150 3 150 3 200 3" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Join Kizi Apparels on our journey to revolutionize women's fashion through sustainable practices,
              innovative designs, and premium quality - creating value while empowering women globally.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-primary-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-primary-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Sustainable Fashion</span>
              </div>
              <div className="flex items-center gap-2 text-primary-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Innovative Designs</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Modern fashion workshop" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;