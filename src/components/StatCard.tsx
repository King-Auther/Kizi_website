import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  caption?: string;
  percentage?: string;
  isPositive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, caption, percentage, isPositive }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-primary-800 text-lg font-medium mb-2">{title}</h3>
      <div className="flex items-end">
        <p className="text-3xl font-bold text-primary-900">{value}</p>
        {percentage && (
          <span className={`ml-2 text-sm font-medium ${isPositive ? 'text-success-500' : 'text-error-500'}`}>
            {isPositive ? '+' : ''}{percentage}
          </span>
        )}
      </div>
      {caption && <p className="text-gray-500 mt-1 text-sm">{caption}</p>}
    </div>
  );
};

export default StatCard;