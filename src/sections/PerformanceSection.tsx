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
            Our consistent growth and strong financial performance demonstrate our commitment to
            creating sustainable value for our shareholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            title="Annual Revenue" 
            value="₹120M" 
            percentage="18%" 
            isPositive={true} 
            caption="FY 2023-24"
          />
          <StatCard 
            title="Net Profit Margin" 
            value="15.8%" 
            percentage="2.3%" 
            isPositive={true} 
            caption="Year-over-Year"
          />
          <StatCard 
            title="EBITDA" 
            value="₹32.5M" 
            percentage="22%" 
            isPositive={true} 
            caption="FY 2023-24"
          />
          <StatCard 
            title="Dividend Yield" 
            value="4.2%" 
            percentage="0.5%" 
            isPositive={true} 
            caption="Current"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">5-Year Growth Trajectory</h3>
            <div className="h-80 relative">
              {/* This would typically be a chart component from a library like Chart.js or Recharts */}
              {/* For now, we'll use a placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
                <p className="text-gray-500">Growth chart visualization would be rendered here</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="font-semibold text-primary-900 mb-2">Revenue CAGR</h4>
              <p className="text-4xl font-bold text-accent-600">16.5%</p>
              <p className="text-gray-600">5-year period</p>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="font-semibold text-primary-900 mb-2">Return on Equity</h4>
              <p className="text-4xl font-bold text-accent-600">22.3%</p>
              <p className="text-gray-600">Current</p>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="font-semibold text-primary-900 mb-2">Debt-to-Equity</h4>
              <p className="text-4xl font-bold text-accent-600">0.38</p>
              <p className="text-gray-600">Strong balance sheet</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-primary-900 font-medium hover:text-accent-600 transition-colors"
          >
            View Detailed Financial Reports
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;