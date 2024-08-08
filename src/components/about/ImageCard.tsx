import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
  className: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt,className }) => {
  return (

      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={true}
      />
   
  );
};

export default ImageCard; 
