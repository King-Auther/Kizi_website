import React, { useState, useEffect } from 'react';
import { FileText, Download, TrendingUp, PieChart, Calendar, Bell, BarChart2 } from 'lucide-react';

const InvestorPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // PDF files paths
  const pdfFiles = {
    shareholdingPattern: '/shareholding_exl/shareholding_exl/SHAREHOLDING_PATTERN_AS_ON_31.12.2024.pdf',
    prospectus: '/pdf_links/Prospectus.pdf',
    reportSep2024: '/pdf_links/HALF_YEARLY_RESULTS_IST_HALF_FY_2024-25.pdf',
    reportMarch2024: '/pdf_links/ANNUAL_REPORT_KIZI_31.03.2024.pdf',
    reportJune2023: '/pdf_links/For The Period Ended 30 June, 2023.pdf',
    reportMarch2023: '/pdf_links/For The Period Ended 31 March, 2023.pdf',
    whistleBlowerPolicy: '/pdf_links/Whistle_Blower_Policy_57e5872e-49ce-4ebe-8c30-bf619aed5dd9.pdf',
    codeForIndependentDirectors: '/pdf_links/Code_for_Independet_Director_2ed8caea-60d8-4179-8ca4-3f0661e2ce7b.pdf',
    nominationPolicy: '/pdf_links/Nomination_Remuneration_Policy_c12b1c82-b394-471f-b07e-5072faa24ce1.pdf',
    insiderTradingCode: '/pdf_links/Code_of_Internal_Procedure_Conduct_for_Prevention_of_Insider_Trading_13176027-33ae-4bdb-a146-96c44b8eac32.pdf',
    materialEventsPolicy: '/pdf_links/Draft_Policy_on_Determing_the_Material_Events_9c0bb525-0fb0-43d7-8d64-9c5e04934efd.pdf',
    relatedPartyTransactionPolicy: '/pdf_links/Related_Party_Transaction_Policy_2ebc94d8-4f02-48d9-8055-f709eb3f05da.pdf',
    upsiDisclosurePolicy: '/pdf_links/Policy_on_Disclosure_of_UPSI_959006c6-f462-4347-9e10-062e13373845.pdf',
    familiarizationProgram: '/pdf_links/Familarization_Programme_for_ID_19c92f5c-d18a-4fe0-86e0-cd4bf5100955.pdf',
    boardDiversityPolicy: '/pdf_links/Policy_on_Board_diversity_bea25369-2acf-49fe-9f26-251596009aef.pdf',
    codeOfConduct: '/pdf_links/Code_of_conduct_da798e77-4a6a-4ce4-9d60-cf4f05307ae7.pdf',
    performanceEvaluationPolicy: '/pdf_links/Performance_Evaluation_Policy_964831f3-af8b-47be-8b9f-862a931ac7ef.pdf'
  };

  const financialReports = [
    { 
      name: 'For The period Ended 30th Sep 2024', 
      date: 'September 30, 2024', 
      size: '1.7 MB',
      url: pdfFiles.reportSep2024
    },
    { 
      name: 'For The Period Ended 31 March, 2024', 
      date: 'March 31, 2024', 
      size: '3.1 MB',
      url: pdfFiles.reportMarch2024
    },
    { 
      name: 'For The Period Ended 30 June, 2023', 
      date: 'June 30, 2023', 
      size: '20 MB',
      url: pdfFiles.reportJune2023
    },
    { 
      name: 'For The Period Ended 31 March, 2023', 
      date: 'March 31, 2023', 
      size: '9.9 MB',
      url: pdfFiles.reportMarch2023
    }
  ];

  const announcements = [
    { title: 'Q1 2024 Earnings Call Schedule', date: 'Apr 5, 2024', type: 'Upcoming' },
    { title: 'New Sustainable Manufacturing Facility', date: 'Mar 20, 2024', type: 'Press Release' },
    { title: 'Board Meeting Notice', date: 'Mar 10, 2024', type: 'Regulatory' },
  ];

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        // Simulate loading content
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (err) {
        setError('Failed to load content. Please try again later.');
        setLoading(false);
      }
    };

    loadContent();
  }, [activeTab]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

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
                  onClick={() => setActiveTab('shareholding')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                    activeTab === 'shareholding' ? 'bg-primary-50 text-primary-900' : 'hover:bg-gray-50'
                  }`}
                >
                  <BarChart2 className="h-5 w-5 mr-3" />
                  Shareholding Pattern
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
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mt-2">₹245.60</p>
                    <p className="text-sm text-green-600">+2.5% today</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">Market Cap</h3>
                      <PieChart className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mt-2">₹2.4B</p>
                    <p className="text-sm text-gray-500">As of today</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">52W High</h3>
                      <TrendingUp className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mt-2">₹268.30</p>
                    <p className="text-sm text-gray-500">Last month</p>
                  </div>
                </div>

                

                {/* Company Prospectus Section */}
                <div className="bg-white rounded-lg shadow-md mt-6">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Prospectus</h2>
                    <div className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-6 w-6 text-gray-400 mr-3" />
                          <div>
                            <h3 className="font-medium text-gray-900">Initial Public Offering Prospectus</h3>
                            <p className="text-sm text-gray-500">Important document containing detailed information about the company's business, financial statements, and the terms of its public offering.</p>
                          </div>
                        </div>
                        <a 
                          href={pdfFiles.prospectus}
                          className="flex items-center text-blue-600 hover:text-blue-800 ml-4"
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

                {/* List of Creditors Section */}
                <div className="bg-white rounded-lg shadow-md mt-6">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">List of Creditors</h2>
                    <div className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-6 w-6 text-gray-400 mr-3" />
                          <div>
                            <h3 className="font-medium text-gray-900">List of Creditors PDF</h3>
                            <p className="text-sm text-gray-500">Download the latest list of creditors in PDF format.</p>
                          </div>
                        </div>
                        <a 
                          href="/creditors/list_of_creditors.pdf"
                          className="flex items-center text-blue-600 hover:text-blue-800 ml-4"
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
                          <span className="text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700">
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
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Financial Reports</h2>
                  <div className="space-y-4">
                    {financialReports.map((report, index) => (
                      <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <p className="font-medium text-gray-900">{report.name}</p>
                            <p className="text-sm text-gray-500">Published: {report.date}</p>
                          </div>
                        </div>
                        <a 
                          href={report.url}
                          className="flex items-center text-blue-600 hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="h-5 w-5 mr-1" />
                          <span>View PDF</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'shareholding' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-gray-900">Shareholding Pattern</h2>
                      <a
                        href="/shareholding_exl/shareholding_exl/SHAREHOLDING_PATTERN_AS_ON_31.12.2024.pdf"
                        className="flex items-center text-blue-600 hover:text-blue-800 text-xs font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        type="application/pdf"
                      >
                        <Download className="h-5 w-5 mr-1" />
                        <span>Download PDF</span>
                      </a>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-max border text-xs">
                        <thead>
                          <tr className="bg-gray-50">
                            <th rowSpan={2} className="px-2 py-2 border">Category<br/>(I)</th>
                            <th rowSpan={2} className="px-2 py-2 border">Category of shareholder<br/>(II)</th>
                            <th rowSpan={2} className="px-2 py-2 border">No. of Shareholders<br/>(III)</th>
                            <th rowSpan={2} className="px-2 py-2 border">No. of fully paid up equity Share held<br/>(IV)</th>
                            <th rowSpan={2} className="px-2 py-2 border">No. of partly paid-up equity Share held<br/>(V)</th>
                            <th rowSpan={2} className="px-2 py-2 border">No. of shares underlying Depository Receipts<br/>(VI)</th>
                            <th rowSpan={2} className="px-2 py-2 border">Total no. shares held (VII) = (IV)+(V)+(VI)</th>
                            <th rowSpan={2} className="px-2 py-2 border">Shareholding as a % of total no. of shares (calculated as per SCRR, 1957) (VIII) As a % of (A+B+C2)</th>
                            <th colSpan={3} className="px-2 py-2 border">Number of Voting Rights held in each class of securities (IX)</th>
                            <th rowSpan={2} className="px-2 py-2 border">No. of Shares Underlying Outstanding convertible securities (including Warrants) (X)</th>
                            <th rowSpan={2} className="px-2 py-2 border">Shareholding as a % assuming full conversion of convertible securities (as a % of diluted share capital) (XI) = (VII)+(X) As a % of (A+B+C2)</th>
                            <th colSpan={2} className="px-2 py-2 border">Number of Locked in shares (XII)</th>
                            <th colSpan={2} className="px-2 py-2 border">Number of Shares pledged or otherwise encumbered (XIII)</th>
                            <th rowSpan={2} className="px-2 py-2 border">Number of equity shares held in dematerialized form (XIV)</th>
                          </tr>
                          <tr className="bg-gray-50">
                            <th className="px-2 py-2 border">Class Equity x</th>
                            <th className="px-2 py-2 border">Class Others y</th>
                            <th className="px-2 py-2 border">Total</th>
                            <th className="px-2 py-2 border">No. (a)</th>
                            <th className="px-2 py-2 border">As a % of total shares held (b)</th>
                            <th className="px-2 py-2 border">No. (a)</th>
                            <th className="px-2 py-2 border">As a % of total shares held (b)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {/* Promoter & Promoter Group */}
                          <tr>
                            <td className="border px-2 py-1">(A)</td>
                            <td className="border px-2 py-1">Promoter & Promoter Group</td>
                            <td className="border px-2 py-1">3</td>
                            <td className="border px-2 py-1">4,405,800</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">4,405,800</td>
                            <td className="border px-2 py-1">56.3459</td>
                            <td className="border px-2 py-1">4,405,800</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">4,405,800</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">56.3459</td>
                            <td className="border px-2 py-1">4,405,800</td>
                            <td className="border px-2 py-1">100.0000</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">4,405,800</td>
                          </tr>
                          {/* Public */}
                          <tr>
                            <td className="border px-2 py-1">(B)</td>
                            <td className="border px-2 py-1">Public</td>
                            <td className="border px-2 py-1">303</td>
                            <td className="border px-2 py-1">3,413,400</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">3,413,400</td>
                            <td className="border px-2 py-1">43.6541</td>
                            <td className="border px-2 py-1">3,413,400</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">3,413,400</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">43.6541</td>
                            <td className="border px-2 py-1">755,400</td>
                            <td className="border px-2 py-1">22.1304</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">3,413,400</td>
                          </tr>
                          {/* Non Promoter-Non Public */}
                          <tr>
                            <td className="border px-2 py-1">(C)</td>
                            <td className="border px-2 py-1">Non Promoter-Non Public</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">0</td>
                          </tr>
                          {/* Shares underlying DRs */}
                          <tr>
                            <td className="border px-2 py-1">(C1)</td>
                            <td className="border px-2 py-1">Shares underlying DRs</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">NA</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">NA</td>
                            <td className="border px-2 py-1">0</td>
                          </tr>
                          {/* Shares held by Employee Trusts */}
                          <tr>
                            <td className="border px-2 py-1">(C2)</td>
                            <td className="border px-2 py-1">Shares held by Employee Trusts</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">NA</td>
                            <td className="border px-2 py-1">0</td>
                          </tr>
                          {/* Total */}
                          <tr className="bg-gray-100 font-semibold">
                            <td className="border px-2 py-1">Total</td>
                            <td className="border px-2 py-1"></td>
                            <td className="border px-2 py-1">306</td>
                            <td className="border px-2 py-1">7,819,200</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">7,819,200</td>
                            <td className="border px-2 py-1">100.0000</td>
                            <td className="border px-2 py-1">7,819,200</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">7,819,200</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">100.0000</td>
                            <td className="border px-2 py-1">5,161,200</td>
                            <td className="border px-2 py-1">66.0068</td>
                            <td className="border px-2 py-1">0</td>
                            <td className="border px-2 py-1">0.0000</td>
                            <td className="border px-2 py-1">7,819,200</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">* As on [Date]</p>
                  </div>
                </div>

                {/* Historical Shareholding Pattern */}
                <div className="bg-white rounded-lg shadow-md">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Historical Shareholding Pattern</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <p className="font-medium text-gray-900">Shareholding Pattern as on March 31, 2024</p>
                            <p className="text-sm text-gray-500">Published: March 31, 2024</p>
                          </div>
                        </div>
                        <a 
                          href={pdfFiles.shareholdingPattern}
                          className="flex items-center text-blue-600 hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          type="application/pdf"
                        >
                          <Download className="h-5 w-5 mr-1" />
                          <span>Download PDF</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Investor Calendar</h2>
                <div className="text-gray-600">
                  <p>No events scheduled at this time.</p>
                  <p>Check back later for upcoming investor events and important dates.</p>
                </div>
              </div>
            )}

            {activeTab === 'policies' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Corporate Policies</h2>
                <div className="space-y-6">
                  {Object.entries({
                    'Whistle Blower Policy': pdfFiles.whistleBlowerPolicy,
                    'Code for Independent Directors': pdfFiles.codeForIndependentDirectors,
                    'Nomination and Remuneration Policy': pdfFiles.nominationPolicy,
                    'Code of Prevention of Insider Trading': pdfFiles.insiderTradingCode,
                    'Draft Policy on Determining Material Events': pdfFiles.materialEventsPolicy,
                    'Related Party Transaction Policy': pdfFiles.relatedPartyTransactionPolicy,
                    'Policy on Disclosure of UPSI': pdfFiles.upsiDisclosurePolicy,
                    'Familiarization Program for Independent Directors': pdfFiles.familiarizationProgram,
                    'Policy on Board Diversity': pdfFiles.boardDiversityPolicy,
                    'Code of Conduct': pdfFiles.codeOfConduct,
                    'Performance Evaluation Policy': pdfFiles.performanceEvaluationPolicy
                  }).map(([title, pdfUrl], index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-6 w-6 text-gray-400 mr-3" />
                          <div>
                            <h3 className="font-medium text-gray-900">{title}</h3>
                            <p className="text-sm text-gray-500">Last Updated: Feb 2024</p>
                          </div>
                        </div>
                        <a 
                          href={pdfUrl}
                          className="flex items-center text-blue-600 hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="h-5 w-5 mr-1" />
                          <span>View PDF</span>
                        </a>
                      </div>
                    </div>
                  ))}
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