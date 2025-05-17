import React from 'react';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="absolute inset-0 z-0 opacity-10 bg-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-8 py-20 pt-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
              Empowering Women Through<br />
              <span className="text-accent-600">Elegant Fashion</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8">
              Join Kizi Apparels on our journey to revolutionize women's fashion through sustainable practices,
              innovative designs, and premium quality - creating value while empowering women globally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Investment Opportunities
              </Button>
              <Button variant="outline" size="lg">
                View Financial Reports
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-800">35+</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-800">18%</p>
                <p className="text-gray-600">YoY Growth</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-800">120M+</p>
                <p className="text-gray-600">Annual Revenue</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern fashion workshop" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -top-10 -right-10 bg-accent-500 text-white p-4 md:p-6 rounded-full shadow-lg transform hover:rotate-3 transition-transform duration-300">
              <p className="text-xl md:text-2xl font-bold">25%</p>
              <p className="text-sm">ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;