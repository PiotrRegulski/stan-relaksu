
import Image from "next/image";
import React from "react";

interface ImageHeaderProps {
  children: React.ReactNode;
  src: string;
  alt?: string;
  id?: string;
}

const ImageHeader: React.FC<ImageHeaderProps> = ({ children, src, alt = "", id }) => {
  return (
    <div
      id={id}
      className="relative w-full h-[25rem] sm:h-[18rem] xl:h-[22rem] overflow-hidden rounded"
    >
      {/* Obraz tła – bez animacji */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Lekka nakładka */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Tekst */}
      <div className="absolute inset-0 flex justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl xl:text-7xl text-white font-semibold drop-shadow-md">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default ImageHeader;
