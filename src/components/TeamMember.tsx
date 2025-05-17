import React from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
  bio: string;
  linkedin?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, imageSrc, bio, linkedin }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0 bg-primary-900 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
          >
            <span className="sr-only">LinkedIn Profile</span>
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </div>
      <h3 className="text-lg font-semibold text-primary-900">{name}</h3>
      <p className="text-accent-600 mb-2">{position}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );
};

export default TeamMember;