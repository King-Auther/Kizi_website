import React from 'react';
import brandImage from '../assets/brand_recog/image.png';


const BrandRecog: React.FC = () => {
  return (
    <section id="brand-presence" className="bg-white">
      {/* BRAND HIGHLIGHTS SECTION */}
      <div className="relative w-full bg-gradient-to-br from-primary-50 to-primary-100 pb-0 mb-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12 pt-12 pb-0 gap-8">
          {/* Brand Image */}
          <div className="flex-1 flex justify-center items-center relative z-10">
            <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl h-[480px] md:h-[600px] relative">
              <img 
                src={brandImage}
                alt="Kizi Apparels Collection" 
                className="w-full h-full object-cover" 
              />
              {/* Influencer Badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg flex items-center gap-3">
                <img 
                  src="https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Geetika Sobti Prasad" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
                />
                <div>
                  <p className="font-semibold text-primary-900">Featured by</p>
                  <p className="text-sm text-primary-700">Geetika Sobti Prasad</p>
                </div>
              </div>
            </div>
          </div>
          {/* Brand Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-20 mt-8 md:mt-0">
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-900 leading-tight mb-4">
                Why Choose Kizi?
              </h1>
              <p className="text-lg md:text-xl text-primary-800 mb-6">
                Discover the perfect blend of style, comfort, and sustainability
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Premium Quality</h3>
                  <p className="text-gray-700">Experience luxury with our carefully selected fabrics and meticulous craftsmanship.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Sustainable Fashion</h3>
                  <p className="text-gray-700">Committed to eco-friendly practices and sustainable manufacturing processes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Quick Delivery</h3>
                  <p className="text-gray-700">Pan-India shipping with reliable delivery partners for timely arrivals.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Community Driven</h3>
                  <p className="text-gray-700">Our customers are our brand ambassadors, sharing their love for Kizi with the world.</p>
                </div>
              </div>
            </div>

            <a
              href="https://kiziapparels.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 w-full md:w-auto text-center text-lg font-semibold py-3 px-8 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200 shadow-md"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </div>

      {/* AVAILABLE ON SECTION */}
      <div className="max-w-5xl mx-auto mt-[-60px] md:mt-[-80px] mb-20 relative z-30">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 text-center">
            Available On
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl">
            Shop our exclusive collections across India's leading e-commerce platforms
          </p>
          <div className="flex flex-wrap justify-center gap-8 w-full mb-4">
            <div className="flex flex-col items-center">
              <span className="text-primary-700 font-bold text-lg mb-1">Flipkart</span>
              <span className="text-gray-500 text-sm">Premium Collection</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-primary-700 font-bold text-lg mb-1">Myntra</span>
              <span className="text-gray-500 text-sm">Trending Styles</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-primary-700 font-bold text-lg mb-1">AJIO</span>
              <span className="text-gray-500 text-sm">Exclusive Range</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-primary-700 font-bold text-lg mb-1">Kizi Website</span>
              <span className="text-gray-500 text-sm">Official Store</span>
            </div>
          </div>
          <a
            href="https://kiziapparels.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 w-full sm:w-auto text-center text-lg font-semibold py-3 px-8 rounded-lg bg-primary-100 hover:bg-primary-200 text-primary-900 transition-colors duration-200 shadow-md"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* INFLUENCER COLLABORATION SECTION */}
      <div className="max-w-4xl mx-auto mb-20 px-4">
        <div className="bg-primary-50 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Featured by Fashion Influencers</h3>
              <p className="text-gray-700 mb-6">
                Our collections have caught the attention of leading fashion influencers, including Geetika Sobti Prasad, who shares our passion for sustainable and stylish fashion. These collaborations help us reach more fashion-conscious women who value quality and sustainability.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Fashion Influencer" 
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <img 
                    src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Fashion Influencer" 
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-700 font-semibold">+5</span>
                  </div>
                </div>
                <span className="text-primary-700 font-medium">Trusted by Fashion Leaders</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full h-[300px] rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
                  alt="Aesthetic Fashion Background" 
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 flex items-end z-10">
                  <div className="w-full bg-black/70 rounded-b-xl p-6 md:p-8">
                    <blockquote className="text-white text-xl md:text-2xl font-semibold italic mb-4 drop-shadow-md">
                      "Kizi Apparels is my go-to for sustainable, stylish fashion. Their commitment to quality and the environment is truly inspiring!"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-primary-200 text-lg md:text-xl drop-shadow-md">Geetika Sobti Prasad</p>
                      <p className="text-sm md:text-base text-primary-100 drop-shadow-md">Fashion Influencer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOMER REVIEWS SECTION */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-900 rounded-2xl p-8 md:p-12 shadow-xl max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Our Brand Ambassadors
          </h3>
          <p className="text-primary-100 mb-6 text-lg">
            Every Kizi customer is a brand ambassador, sharing their style and love for fashion
          </p>
          {/* Metrics Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="bg-white/10 p-6 rounded-lg min-w-[140px]">
              <p className="text-white text-2xl font-bold mb-1">4.5+</p>
              <p className="text-primary-100 text-sm">Average Rating</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg min-w-[140px]">
              <p className="text-white text-2xl font-bold mb-1">1000+</p>
              <p className="text-primary-100 text-sm">Total Reviews</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg min-w-[140px]">
              <p className="text-white text-2xl font-bold mb-1">4+</p>
              <p className="text-primary-100 text-sm">Platforms</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg min-w-[140px]">
              <p className="text-white text-2xl font-bold mb-1">50K+</p>
              <p className="text-primary-100 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
        {/* Review Cards */}
        <div className="mt-8">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary-700 scrollbar-track-primary-900">
            {/* Review 1 */}
            <div className="min-w-[340px] max-w-md bg-primary-950 text-white rounded-2xl p-8 flex flex-col items-center shadow-lg">
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="mb-6 text-center">
                "The attention to detail is impressive. The stitching, the fall of the fabric, the subtle design—everything screams finesse. Their tops are now a staple in my wardrobe."
              </p>
              <span className="font-bold text-primary-200">Tanya</span>
            </div>
            {/* Review 2 */}
            <div className="min-w-[340px] max-w-md bg-primary-950 text-white rounded-2xl p-8 flex flex-col items-center shadow-lg">
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="mb-6 text-center">
                "I ordered a co-ord set and was blown away by the fabric quality and fit. It feels premium without being flashy. Got so many compliments!"
              </p>
              <span className="font-bold text-primary-200">Rhea S</span>
            </div>
            {/* Review 3 */}
            <div className="min-w-[340px] max-w-md bg-primary-950 text-white rounded-2xl p-8 flex flex-col items-center shadow-lg">
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="mb-6 text-center">
                "The dress I bought looked exactly like the pictures and fit like a glove. Super breathable and perfect for both work and brunch dates."
              </p>
              <span className="font-bold text-primary-200">Ankita</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandRecog;