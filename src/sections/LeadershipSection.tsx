import React from 'react';
import TeamMember from '../components/TeamMember';
import abhishekImage from '../assets/ABHISHEK-PIC.jpg';
import kiranImage from '../assets/Kiran_Nathani.jpg';
import juhiImage from '../assets/JUHI.jpg';
import avaniImage from '../assets/AVANI.jpg';

const LeadershipSection: React.FC = () => {
  const executiveTeam = [
    {
      name: 'Abhishek Nathani',
      position: 'Managing Director ',
      imageSrc: abhishekImage,
      bio: 'Experienced logistics and supply chain director with over 20 years of expertise in fleet management, procurement, and operational optimization, known for driving cost efficiencies and streamlining logistics for leading organizations.',
      linkedin: 'https://www.linkedin.com/in/abhisheknathani/'
    },
    {
      name: 'Kiran Nathani',
      position: 'Director & CFO',
      imageSrc: kiranImage,
      bio: 'Strategic and results-driven professional with 18 years of experience across marketing, business development, production, and HR, currently leading marketing and operations at Aaika Creations.',
      linkedin: 'https://www.linkedin.com/in/kiran-nathani/'
    },
    {
      name: 'Avani Ashwinkumar Shah',
      position: 'Director',
      imageSrc: avaniImage,
      bio: 'She is an Independent Director of the Company with over 10 years of administrative experience and currently serves with the Freight Corridor Corporation of India Limited under the Ministry of Railways since 2012.',
      linkedin: '#'
    },
    {
      name: 'Juhi Sawajani',
      position: 'Director',
      imageSrc: juhiImage,
      bio: "She is an Independent Director and an Associate Member of the Institute of Company Secretaries of India, with a Master's in Commerce. Currently serving as Company Secretary at Sky Textiles India Pvt. Ltd., she brings expertise in secretarial compliance, GST, and trademark registration.",
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

        {/* Executive Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary-900 mb-8 text-center">Executive Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>

        {/* Board of Directors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary-900 mb-8 text-center">Board of Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4">
                  <img 
                    src="https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg" 
                    alt="Company Secretary" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary-900">Monica Mahaveer Jain</h4>
                  <p className="text-accent-600 mb-1">Company Secretary</p>
                  <p className="text-gray-600 text-sm">
                    Experienced company secretary ensuring compliance with corporate governance and regulatory requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4">
                  <img 
                    src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg" 
                    alt="Additional Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary-900">Ajay Mishra</h4>
                  <p className="text-accent-600 mb-1">Additional Director</p>
                  <p className="text-gray-600 text-sm">
                    Bringing extensive industry experience and strategic insights to the board.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advisors Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;