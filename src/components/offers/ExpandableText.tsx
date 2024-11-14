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
      <p className="text-black md:text-lg">
        {isExpanded ? text  : text? `${text.substring(0, maxLength)}...`:''}
      </p>
      <button
        onClick={toggleExpansion}
        className="mt-1 text-black  hover:underline italic text-sm"
      >
        {isExpanded ? 'Zwiń' : 'Rozwiń'}
      </button>
    </div>
  );
};

export default ExpandableText;
