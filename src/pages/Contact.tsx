import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Globe, User, Building2, ClipboardCheck } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General Contact' },
    { id: 'investor', label: 'Investor Relations' },
    { id: 'auditor', label: 'Statutory Auditor' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Have questions about our products or services? We'd love to hear from you.
            Get in touch with our team and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-3 text-sm font-medium ${
                        activeTab === tab.id
                          ? 'border-b-2 border-primary-600 text-primary-600'
                          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'general' && (
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Visit Us</h3>
                        <p className="text-gray-600 mt-1">
                          123 Business Park, Sector 5,<br />
                          New Delhi, India - 110001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Call Us</h3>
                        <p className="text-gray-600 mt-1">
                          Customer Service: +91 98765 43210<br />
                          Sales Inquiries: +91 98765 43211
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Email Us</h3>
                        <p className="text-gray-600 mt-1">
                          General Inquiries: info@kiziapparels.co.in<br />
                          Support: support@kiziapparels.co.in
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Business Hours</h3>
                        <p className="text-gray-600 mt-1">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Globe className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Social Media</h3>
                        <div className="flex space-x-4 mt-2">
                          <a href="#" className="text-gray-600 hover:text-primary-600">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                          <a href="#" className="text-gray-600 hover:text-primary-600">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </a>
                          <a href="#" className="text-gray-600 hover:text-primary-600">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                            </svg>
                          </a>
                          <a href="#" className="text-gray-600 hover:text-primary-600">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'investor' && (
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <User className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Investor Contact</h3>
                        <p className="text-gray-600 mt-1">
                          Name: Monica Jain<br />
                          Email: Cs@kiziapparels.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Building2 className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Registrar and Share Transfer Agent</h3>
                        <div className="text-gray-600 mt-1">
                          <p className="font-medium">Bigshare Services Private Limited</p>
                          <p className="mt-2">
                            Office No. S6-2, 6th Floor, Pinnacle Business Park,<br />
                            Next to Ahura Center, Mahakali Caves Road,<br />
                            Andheri East, Mumbai-400093
                          </p>
                          <div className="mt-2">
                            <p>Tel: +91 22-62638200</p>
                            <p>Fax: +91 22-62638299</p>
                            <p>Website: <a href="http://www.bigshareonline.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">www.bigshareonline.com</a></p>
                            <p>Email: <a href="mailto:ipo@bigshareonline.com" className="text-primary-600 hover:text-primary-800">ipo@bigshareonline.com</a></p>
                            <p>Investor Grievance Email: <a href="mailto:investor@bigshareonline.com" className="text-primary-600 hover:text-primary-800">investor@bigshareonline.com</a></p>
                            <p>Contact Person: Asif Sayyed</p>
                            <p>SEBI Reg. No.: INR000001385</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'auditor' && (
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <ClipboardCheck className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Statutory Auditor</h3>
                        <div className="text-gray-600 mt-1">
                          <p className="font-medium">D G M S & Co.</p>
                          <p className="text-sm">Chartered Accountants</p>
                          
                          <div className="mt-3">
                            <p className="font-medium">Head Office:</p>
                            <p className="mt-1">
                              217/218, Manek Center, P.N Marg,<br />
                              Jamnagar, Gujarat-361008<br />
                              India
                            </p>
                          </div>

                          <div className="mt-3">
                            <p className="font-medium">Branch Office:</p>
                            <p className="mt-1">
                              B-15/16, 5th Floor, B Wing,<br />
                              Shree Siddhivinayak Plaza,<br />
                              Veera Desai Industrial Estate,<br />
                              Next to T Series Business Park,<br />
                              Andheri West, Mumbai<br />
                              Maharashtra- 400053
                            </p>
                          </div>

                          <div className="mt-2">
                            <p>Email: <a href="mailto:dgmsco.jam@gmail.com" className="text-primary-600 hover:text-primary-800">dgmsco.jam@gmail.com</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-primary-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 