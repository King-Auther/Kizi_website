import React from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, imageSrc, bio }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-lg font-semibold text-primary-900">{name}</h3>
      <p className="text-accent-600 mb-2">{position}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );
};

export default TeamMember;