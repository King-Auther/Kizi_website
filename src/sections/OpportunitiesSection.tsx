import React from 'react';
import Button from '../components/Button';

const OpportunitiesSection: React.FC = () => {
  return (
    <section id="opportunities" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Investment Opportunities
          </h2>
          <p className="text-gray-600">
            Discover compelling reasons to invest in Kizi Apparels and be part of our growth story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-3">
            <div className="bg-primary-900 rounded-xl overflow-hidden">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Strategic Expansion Plan</h3>
                <p className="mb-6">
                  Our 5-year expansion plan aims to establish Kizi Apparels as a global leader in sustainable
                  apparel manufacturing with a 3x increase in production capacity and market reach.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="border border-white/20 rounded-lg p-4">
                    <p className="text-accent-400 text-sm mb-1">Phase 1 (2024-25)</p>
                    <p className="text-lg font-medium">Capacity Expansion</p>
                  </div>
                  <div className="border border-white/20 rounded-lg p-4">
                    <p className="text-accent-400 text-sm mb-1">Phase 2 (2025-26)</p>
                    <p className="text-lg font-medium">Market Diversification</p>
                  </div>
                  <div className="border border-white/20 rounded-lg p-4">
                    <p className="text-accent-400 text-sm mb-1">Phase 3 (2026-28)</p>
                    <p className="text-lg font-medium">Vertical Integration</p>
                  </div>
                </div>

                <Button variant="secondary" size="lg">
                  Request Investor Presentation
                </Button>
              </div>
              <div className="h-48 lg:h-64 relative">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Business planning" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Sustainable Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Our commitment to eco-friendly practices and certifications positions us favorably in the
                rapidly growing sustainable apparel market, projected to reach $150 billion by 2030.
              </p>
              <div className="flex items-center text-accent-600">
                <span className="mr-2">Expected CAGR: 22%</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Technology Integration</h3>
              <p className="text-gray-600 mb-4">
                Our investments in AI-driven design, Industry 4.0 manufacturing, and supply chain
                optimization create significant competitive advantages and operational efficiencies.
              </p>
              <div className="flex items-center text-accent-600">
                <span className="mr-2">Efficiency Gains: 35%</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Global Export Expansion</h3>
              <p className="text-gray-600 mb-4">
                Strategic partnerships with leading international retailers and expansion into high-growth
                markets in Europe and North America drive our robust export growth strategy.
              </p>
              <div className="flex items-center text-accent-600">
                <span className="mr-2">Target Growth: 40%</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-800 to-primary-900 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Invest in Our Growth?
              </h3>
              <p className="text-primary-100 mb-6">
                Join us on our journey to redefine the future of apparel manufacturing while
                generating sustainable returns for our investors.
              </p>
              <Button variant="secondary" size="lg">
                Schedule an Investor Call
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-white text-3xl font-bold">30%</p>
                <p className="text-primary-100">Projected 3-year ROI</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-white text-3xl font-bold">₹250M</p>
                <p className="text-primary-100">Investment Opportunity</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-white text-3xl font-bold">3x</p>
                <p className="text-primary-100">5-Year Growth Target</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-white text-3xl font-bold">12%</p>
                <p className="text-primary-100">Annual Dividend Target</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;