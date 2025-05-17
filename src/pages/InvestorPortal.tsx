import React, { useState } from 'react';
import { FileText, Download, TrendingUp, PieChart, Calendar, Bell } from 'lucide-react';

const InvestorPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const financialReports = [
    { name: 'Annual Report 2023', date: 'Mar 15, 2024', size: '4.2 MB' },
    { name: 'Q4 2023 Results', date: 'Feb 1, 2024', size: '2.1 MB' },
    { name: 'Q3 2023 Results', date: 'Nov 15, 2023', size: '1.8 MB' },
  ];

  const announcements = [
    { title: 'Q1 2024 Earnings Call Schedule', date: 'Apr 5, 2024', type: 'Upcoming' },
    { title: 'New Sustainable Manufacturing Facility', date: 'Mar 20, 2024', type: 'Press Release' },
    { title: 'Board Meeting Notice', date: 'Mar 10, 2024', type: 'Regulatory' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                    activeTab === 'dashboard' ? 'bg-primary-50 text-primary-900' : 'hover:bg-gray-50'
                  }`}
                >
                  <TrendingUp className="h-5 w-5 mr-3" />
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('reports')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                    activeTab === 'reports' ? 'bg-primary-50 text-primary-900' : 'hover:bg-gray-50'
                  }`}
                >
                  <FileText className="h-5 w-5 mr-3" />
                  Reports
                </button>
                <button
                  onClick={() => setActiveTab('calendar')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                    activeTab === 'calendar' ? 'bg-primary-50 text-primary-900' : 'hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  Calendar
                </button>
                <button
                  onClick={() => setActiveTab('policies')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                    activeTab === 'policies' ? 'bg-primary-50 text-primary-900' : 'hover:bg-gray-50'
                  }`}
                >
                  <FileText className="h-5 w-5 mr-3" />
                  Policies
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">Stock Price</h3>
                      <TrendingUp className="h-5 w-5 text-success-500" />
                    </div>
                    <p className="text-3xl font-bold text-primary-900 mt-2">₹245.60</p>
                    <p className="text-sm text-success-600">+2.5% today</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">Market Cap</h3>
                      <PieChart className="h-5 w-5 text-primary-500" />
                    </div>
                    <p className="text-3xl font-bold text-primary-900 mt-2">₹2.4B</p>
                    <p className="text-sm text-gray-500">As of today</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">52W High</h3>
                      <TrendingUp className="h-5 w-5 text-primary-500" />
                    </div>
                    <p className="text-3xl font-bold text-primary-900 mt-2">₹268.30</p>
                    <p className="text-sm text-gray-500">Last month</p>
                  </div>
                </div>

                {/* Recent Reports */}
                <div className="bg-white rounded-lg shadow-md">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Reports</h2>
                    <div className="space-y-4">
                      {financialReports.map((report, index) => (
                        <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-gray-400 mr-3" />
                            <div>
                              <p className="font-medium text-gray-900">{report.name}</p>
                              <p className="text-sm text-gray-500">{report.date}</p>
                            </div>
                          </div>
                          <button className="flex items-center text-primary-600 hover:text-primary-800">
                            <Download className="h-5 w-5 mr-1" />
                            <span className="text-sm">{report.size}</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Announcements */}
                <div className="bg-white rounded-lg shadow-md">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Announcements</h2>
                    <div className="space-y-4">
                      {announcements.map((announcement, index) => (
                        <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <Bell className="h-5 w-5 text-gray-400 mr-3" />
                            <div>
                              <p className="font-medium text-gray-900">{announcement.title}</p>
                              <p className="text-sm text-gray-500">{announcement.date}</p>
                            </div>
                          </div>
                          <span className="text-sm px-3 py-1 rounded-full bg-primary-50 text-primary-700">
                            {announcement.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'reports' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Financial Reports</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Half Yearly Report 2024</h3>
                          <p className="text-sm text-gray-500">Published: May 17, 2024</p>
                        </div>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1MzwwORRCBtIXI2CzST7BGxmuDh0DHu2H/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Annual Report 2024</h3>
                          <p className="text-sm text-gray-500">Published: May 17, 2024</p>
                        </div>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1Px8aiRzyqwP7_AtIiei5QD4boC3bFdXR/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF </span>
                      </a>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Q2 2023 Financial Report</h3>
                          <p className="text-sm text-gray-500">Published: Jul 15, 2023</p>
                        </div>
                      </div>
                      <a 
                        href="/reports/q2-2023-report.pdf" 
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="h-5 w-5 mr-1" />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Investor Calendar</h2>
                {/* Calendar content */}
                <p className="text-gray-600">Calendar section content will go here</p>
              </div>
            )}

            {activeTab === 'policies' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Corporate Policies</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Whistle Blower Policy</h3>
                          <p className="text-sm text-gray-500">Last Updated: Jan 2024</p>
                        </div>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1xvEYZ3ITDwKBLGHsi0gWv4dx59ZAfHGY/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Code for Independent Directors</h3>
                          <p className="text-sm text-gray-500">Last Updated: Dec 2023</p>
                        </div>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1RHnxbz6iHnlUbI2FiXSyWdL3XOdknV6U/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Nomination and Remuneration Policy</h3>
                          <p className="text-sm text-gray-500">Last Updated: Mar 2024</p>
                        </div>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1nvEXXOLRz5FsgDP5lT_Ll3KWtzb9JLmR/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Code of Prevention of Insider Trading</h3>
                          <p className="text-sm text-gray-500">Last Updated: Feb 2024</p>
                        </div>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1wffvJB9sqTFhTUYfM_X9l3Nvrku9iGwh/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Draft Policy on Determing the Material Events</h3>
                          <p className="text-sm text-gray-500">Last Updated: Feb 2024</p>
                        </div>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1XQ0FMWQXskXgAgHRFNF59P-_nVtKd732/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Policy on Disclosure of UPSI</h3>
                          <p className="text-sm text-gray-500">Last Updated: Feb 2024</p>
                        </div>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/16B8PlAVyQ7H0HlwaK86cvkilJFhq96ec/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Familiarization Program for Independent Directors</h3>
                          <p className="text-sm text-gray-500">Last Updated: Feb 2024</p>
                        </div>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/17ypl2gJ0gL9_jT6kRbZ07lH4kVigJsxC/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Policy on Board diversity</h3>
                          <p className="text-sm text-gray-500">Last Updated: Feb 2024</p>
                        </div>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1AkJ-O5SUZlDruUBbaLJ6EikXhmynr_eB/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Code of conduct</h3>
                          <p className="text-sm text-gray-500">Last Updated: Feb 2024</p>
                        </div>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1QVNXzovaQyZOrb6vDnncdGOEbWV2Rxtr/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">Performance Evaluation Policy</h3>
                          <p className="text-sm text-gray-500">Last Updated: Feb 2024</p>
                        </div>
                      </div>
                      <a  
                        href="https://drive.google.com/file/d/1vKzntQlAm_WMncEDt3XaG7eEVQrvA1jt/preview"
                        className="flex items-center text-primary-600 hover:text-primary-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-5 w-5 mr-1" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorPortal;