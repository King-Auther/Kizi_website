import React from 'react';
import Button from '../components/Button';
import pinkModel from '../assets/KIZI_MODEL_PINK.webp';
import blazerModel from '../assets/KIZI_MODEL_BLAZER.webp';
import coOrdModel from '../assets/KIZI_MODEL_CO-ORD_SET.webp';
import orangeModel from '../assets/KIZI_MODEL_ORANGE.webp';

const imageLinks = [
  {
    src: pinkModel,
    alt: "Manufacturing facility",
    href: "https://kiziapparels.com/collections/midi-dresses"
  },
  {
    src: blazerModel,
    alt: "Apparel design",
    href: "https://kiziapparels.com/collections/blazers"
  },
  {
    src: coOrdModel,
    alt: "Quality control",
    href: "https://kiziapparels.com/collections/co-ord-sets"
  },
  {
    src: orangeModel,
    alt: "Shipping and logistics",
    href: "https://kiziapparels.com/collections/bestseller"
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our Journey to Excellence
          </h2>
          <p className="text-gray-600">
            From humble beginnings to becoming one of India's leading apparel manufacturers and exporters,
            Kizi Apparels has been committed to excellence for over three decades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {imageLinks.map((img, idx) => (
              <a
                key={img.src}
                href={img.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  [
                    "rounded-lg overflow-hidden shadow-md group transition-transform duration-300",
                    idx === 0 || idx === 2 ? "transform translate-y-8" : "",
                    idx === 3 ? "transform -translate-y-0" : ""
                  ].join(" ")
                }
                tabIndex={0}
                aria-label={img.alt}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90 cursor-pointer"
                />
              </a>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary-900 mb-2">Our Story</h3>
              <p className="text-gray-600">
              At KIZI Apparels, we blend craftsmanship, passion, and empowerment to create more than just clothing—we create wearable stories. From visionary design to careful craftsmanship, each piece reflects elegance, individuality, and purpose.
              Every garment embodies our commitment to excellence and becomes a symbol of confidence and self-expression. When you wear KIZI, you're not just choosing style—you're embracing a journey of creativity and empowerment.
              Join us in weaving dreams and telling your unique story, one stitch at a time.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To revolutionize the apparel industry through sustainable and ethical manufacturing
                practices while delivering premium quality products to global markets, creating value
                for our stakeholders and positive impact on communities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
              KIZI Apparels envisions a world where every woman is empowered to confidently express her
              individuality through timeless and elegant fashion. Our mission is to go beyond trends by
              creating styles that celebrate authenticity, inspire self-expression, and resonate with the diverse identities 
              of women across the globe. We aspire to become a global symbol of refined fashion, redefining contemporary style while fostering confidence, 
              creativity, and inclusivity in every garment we create.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-primary-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-2">Production Capacity</h4>
                <p className="text-4xl font-bold text-accent-600">250K+</p>
                <p className="text-gray-600">Units per month</p>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-2">Global Reach</h4>
                <p className="text-4xl font-bold text-accent-600">30+</p>
                <p className="text-gray-600">Countries served</p>
              </div>
            </div>

            <Button variant="secondary" size="lg">
              Download Company Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;