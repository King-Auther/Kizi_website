import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Investor Relations
          </h2>
          <p className="text-gray-600">
            Our investor relations team is dedicated to providing timely information and support.
            Contact us with your inquiries or to schedule a call with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-primary-50 p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent-500 mt-0.5 mr-4" />
                  <div>
                    <h4 className="font-medium text-primary-900">Corporate Headquarters</h4>
                    <p className="text-gray-600">
                      H629, Sitapura Industrial Area, Sitapura,<br />
                      Jaipur, Rajasthan 302022
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent-500 mt-0.5 mr-4" />
                  <div>
                    <h4 className="font-medium text-primary-900">Phone</h4>
                    <p className="text-gray-600">9983023939</p>
                    <p className="text-gray-600">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent-500 mt-0.5 mr-4" />
                  <div>
                    <h4 className="font-medium text-primary-900">Email</h4>
                    <p className="text-gray-600">info@kiziapparels.com</p>
                    <p className="text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">Get in Touch</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;