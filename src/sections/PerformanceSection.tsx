import React from 'react';
import StatCard from '../components/StatCard';

const PerformanceSection: React.FC = () => {
  return (
    <section id="performance" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Financial Performance
          </h2>
          <p className="text-gray-600">
            Latest financial and stock performance of Kizi Apparels Ltd. as per BSE filings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <StatCard 
            title="Share Price (23 May 2025)" 
            value="₹20.35" 
            caption="BSE: 544221"
          />
          <StatCard 
            title="Market Cap" 
            value="₹15.91 Cr" 
            caption="As of 23 May 2025"
          />
          <StatCard 
            title="P/E Ratio" 
            value="22.12" 
            caption="As of 23 May 2025"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <StatCard 
            title="52 Week High" 
            value="₹45.60" 
            caption="Past 1 year"
          />
          <StatCard 
            title="52 Week Low" 
            value="₹15.20" 
            caption="Past 1 year"
          />
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;