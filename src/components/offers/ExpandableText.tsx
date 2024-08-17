"use client";

import { useState } from 'react';

interface ExpandableTextProps {
  text?: string;
  maxLength?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  if (!text) {
    return null;
  }

  return (
    <div className="p-4">
      <p className="text-gray-700">
        {isExpanded ? text  : text? `${text.substring(0, maxLength)}...`:''}
      </p>
      <button
        onClick={toggleExpansion}
        className="mt-2 text-blue-500 hover:underline"
      >
        {isExpanded ? 'Zwiń' : 'Rozwiń'}
      </button>
    </div>
  );
};

export default ExpandableText;
