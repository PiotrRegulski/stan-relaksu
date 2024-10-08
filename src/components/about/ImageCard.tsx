import React from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, caption }) => {
  return (
    <div className="relative w-full h-full rounded overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={true}
        className="object-cover object-top w-full h-full"
        sizes="(max-width: 600px) 100vw, 50vw"
      />
      {caption && (
        <div className="absolute bottom-0 left-0 w-full z-20 bg-black bg-opacity-50 text-white text-center p-2">
          {caption}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
