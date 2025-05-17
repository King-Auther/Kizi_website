import React from 'react';
import TeamMember from '../components/TeamMember';
import abhishekImage from '../assets/Abhishek_Nathani.jpg';
import kiranImage from '../assets/Kiran_Nathani.jpg';

const LeadershipSection: React.FC = () => {
  const executiveTeam = [
    {
      name: 'Abhishek Nathani',
      position: 'Founder & CEO',
      imageSrc: abhishekImage,
      bio: 'With 35+ years in the apparel industry, Rajiv has transformed Kizi Apparels from a small manufacturing unit to a global exporter.',
      linkedin: 'https://www.linkedin.com/in/abhisheknathani/'
    },
    {
      name: 'Kiran Nathani',
      position: 'Chief Financial Officer',
      imageSrc: kiranImage,
      bio: 'Former investment banker with expertise in financial strategy, M&A, and capital raising with a focus on the manufacturing sector.',
      linkedin: 'https://www.linkedin.com/in/kiran-nathani/'
    },
    {
      name: 'Vikram Choudhary',
      position: 'Chief Operations Officer',
      imageSrc: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Supply chain expert who has implemented Industry 4.0 technologies across our manufacturing facilities, increasing efficiency by 35%.',
      linkedin: '#'
    },
    {
      name: 'Ananya Patel',
      position: 'Chief Innovation Officer',
      imageSrc: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Leading our sustainability initiatives and technology integration, Ananya has been instrumental in our eco-friendly manufacturing transition.',
      linkedin: '#'
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-gray-600">
            Meet the visionaries and industry experts guiding Kizi Apparels' growth and strategic direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {executiveTeam.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              imageSrc={member.imageSrc}
              bio={member.bio}
              linkedin={member.linkedin}
            />
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">Board of Directors</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4">
                    <img 
                      src="https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Chairman" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-900">Dr. Suresh Menon</h4>
                    <p className="text-accent-600 mb-1">Chairman of the Board</p>
                    <p className="text-gray-600 text-sm">
                      Former Secretary of Textiles, Government of India, with extensive experience in industry policy and international trade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4">
                    <img 
                      src="https://images.pexels.com/photos/1586482/pexels-photo-1586482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Board Member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-900">Maria Rodriguez</h4>
                    <p className="text-accent-600 mb-1">Independent Director</p>
                    <p className="text-gray-600 text-sm">
                      Global retail executive with leadership roles at major fashion and apparel brands in Europe and North America.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4">
                    <img 
                      src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Board Member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-900">Akash Gupta</h4>
                    <p className="text-accent-600 mb-1">Independent Director</p>
                    <p className="text-gray-600 text-sm">
                      Venture capitalist with a focus on sustainable manufacturing and clean technology investments across Asia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">Advisors</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium text-primary-900 mb-2">Industry Expertise</h4>
                <p className="text-gray-600 mb-4">
                  Our team is supported by industry veterans and domain experts who provide strategic guidance in key areas:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sustainable Manufacturing</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>International Expansion</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Supply Chain Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>ESG Implementation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-primary-900 mb-2">Corporate Governance</h4>
                <p className="text-gray-600 mb-4">
                  We maintain the highest standards of corporate governance, transparency, and ethical business practices.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/ISO_9001.svg/240px-ISO_9001.svg.png" 
                      alt="ISO 9001 Certification" 
                      className="h-12"
                    />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/ISO_14001.svg/240px-ISO_14001.svg.png" 
                      alt="ISO 14001 Certification" 
                      className="h-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;