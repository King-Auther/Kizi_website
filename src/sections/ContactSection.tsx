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
                      123 Business Park, Sector 5,<br />
                      New Delhi, India - 110001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent-500 mt-0.5 mr-4" />
                  <div>
                    <h4 className="font-medium text-primary-900">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent-500 mt-0.5 mr-4" />
                  <div>
                    <h4 className="font-medium text-primary-900">Email</h4>
                    <p className="text-gray-600">investors@kiziapparels.co.in</p>
                    <p className="text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-900 p-8 rounded-lg shadow-sm text-white">
              <h3 className="text-xl font-semibold mb-4">Investor Resources</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center group">
                    <svg className="w-5 h-5 mr-3 text-accent-400 group-hover:text-accent-300 transition-colors" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                    </svg>
                    <span className="group-hover:text-accent-300 transition-colors">Annual Report 2023-24</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center group">
                    <svg className="w-5 h-5 mr-3 text-accent-400 group-hover:text-accent-300 transition-colors" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                    </svg>
                    <span className="group-hover:text-accent-300 transition-colors">Quarterly Results Q1 2024</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center group">
                    <svg className="w-5 h-5 mr-3 text-accent-400 group-hover:text-accent-300 transition-colors" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                    </svg>
                    <span className="group-hover:text-accent-300 transition-colors">Investor Presentation</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center group">
                    <svg className="w-5 h-5 mr-3 text-accent-400 group-hover:text-accent-300 transition-colors" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                    </svg>
                    <span className="group-hover:text-accent-300 transition-colors">Corporate Governance Report</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center group">
                    <svg className="w-5 h-5 mr-3 text-accent-400 group-hover:text-accent-300 transition-colors" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <span className="group-hover:text-accent-300 transition-colors">Investor FAQs</span>
                  </a>
                </li>
              </ul>
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