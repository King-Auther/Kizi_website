import React from 'react';
import Button from '../components/Button';
import influencerImage from '../assets/brand_recog/image.png';
import instaHandleImage from '../assets/brand_recog/image1.png';

const BrandRecog: React.FC = () => {
  return (
    <section id="brand-presence" className="bg-white">
      {/* HERO SECTION: Influencer as the Centerpiece */}
      <div className="relative w-full bg-gradient-to-br from-primary-50 to-primary-100 pb-0 mb-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12 pt-12 pb-0 gap-8">
          {/* Influencer Hero Image */}
          <div className="flex-1 flex justify-center items-center relative z-10">
            <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl h-[480px] md:h-[600px] border-8 border-white">
              <img src={influencerImage} alt="Geetika Sobti Prasad wearing Kizi Apparels" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Hero Content Overlay */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-20 mt-8 md:mt-0">
            <div className="flex items-center gap-4 mb-4">
              <img src={instaHandleImage} alt="Geetika Sobti Prasad Instagram Handle" className="w-16 h-16 rounded-full border-4 border-primary-700 bg-black object-contain" />
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-primary-900 leading-tight mb-1">Geetika Sobti Prasad</h1>
                <p className="text-primary-700 font-semibold text-lg">@geetikasobtiprasad</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-primary-800 mb-6 max-w-xl">
              <span className="font-semibold text-primary-700">237,000+ followers</span> | Fashion Influencer | Sustainable Style Icon
            </p>
            <p className="text-gray-700 mb-8 max-w-lg">
              We are proud to collaborate with Geetika Sobti Prasad, whose passion for sustainable fashion inspires thousands. Explore our exclusive collection as seen on Geetika!
            </p>
            <a
              href="https://www.instagram.com/reel/DI88H8cS4Y6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto text-center text-lg font-semibold py-3 px-8 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200 shadow-md"
            >
              View Instagram Feature
            </a>
          </div>
        </div>
      </div>

      {/* DIGITAL PRESENCE SECTION: Trusted By/Available On */}
      <div className="max-w-5xl mx-auto mt-[-60px] md:mt-[-80px] mb-20 relative z-30">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 text-center">
            As Seen On & Available At
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl">
            Shop the collection featured by Geetika on India's top e-commerce platforms and our official website.
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

      {/* QUOTE/ENDORSEMENT SECTION */}
      <div className="max-w-4xl mx-auto mb-20 px-4">
        <div className="bg-primary-50 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center">
          <img src={influencerImage} alt="Geetika Sobti Prasad" className="w-24 h-24 rounded-full object-cover border-4 border-primary-700 mb-4" />
          <blockquote className="text-xl md:text-2xl font-semibold text-primary-900 mb-4">
            "Kizi Apparels is my go-to for sustainable, stylish fashion. Their commitment to quality and the environment is truly inspiring!"
          </blockquote>
          <span className="text-primary-700 font-bold">— Geetika Sobti Prasad</span>
        </div>
      </div>

      {/* REVIEWS SECTION: What Geetika's Followers & Our Customers Say */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-900 rounded-2xl p-8 md:p-12 shadow-xl max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            What Geetika's Followers & Our Customers Say
          </h3>
          <p className="text-primary-100 mb-6 text-lg">
            Real reviews from Geetika's community and our satisfied customers across all platforms.
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
              <p className="text-white text-2xl font-bold mb-1">237K+</p>
              <p className="text-primary-100 text-sm">Influencer Reach</p>
            </div>
          </div>
        </div>
        {/* Text-Based Review Cards */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold text-white mb-6 text-center">
            Loved by everyone, everywhere. Don't miss out.
          </h4>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary-700 scrollbar-track-primary-900">
            {/* Review 1 */}
            <div className="min-w-[340px] max-w-md bg-primary-950 text-white rounded-2xl p-8 flex flex-col items-center shadow-lg">
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="mb-6 text-center">
                "Honestly, the attention to detail is impressive. The stitching, the fall of the fabric, the subtle design—everything screams finesse. Their tops are now a staple in my wardrobe. Loving the vibe!"
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
                "I ordered a co-ord set from Kizi Apparels and was blown away by the fabric quality and fit. It feels <span className='italic'>premium</span> without being flashy. Got so many compliments the first time I wore it—definitely coming back for more!"
              </p>
              <span className="font-bold text-primary-200">Rhea S</span>
            </div>
            {/* Review 3 */}
            <div className="min-w-[340px] max-w-md bg-primary-950 text-white rounded-2xl p-8 flex flex-col items-center shadow-lg">
              <div className="flex mb-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
                <span className="text-gray-500 text-xl">★</span>
              </div>
              <p className="mb-6 text-center">
                "I was skeptical about online shopping, but Kizi changed that. The dress I bought looked exactly like the pictures and fit like a glove. Super breathable and perfect for both work and brunch dates."
              </p>
              <span className="font-bold text-primary-200">Ankita</span>
            </div>
            {/* Review 4 */}
            <div className="min-w-[340px] max-w-md bg-primary-950 text-white rounded-2xl p-8 flex flex-col items-center shadow-lg">
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="mb-6 text-center">
                "Absolutely love the sustainable approach! The packaging was eco-friendly and the clothes are so comfortable. Kizi is my new favorite for guilt-free shopping."
              </p>
              <span className="font-bold text-primary-200">Priya M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandRecog;