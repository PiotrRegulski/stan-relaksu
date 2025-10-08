"use client";
import Image from "next/image";
import React, { useState } from "react";

interface ImageHeaderProps {
  children: React.ReactNode;
  src: string;
  alt?: string;
  id?: string;
}

const ImageHeader: React.FC<ImageHeaderProps> = ({ children, src, alt = "", id }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      id={id}
      className="relative w-full h-[25rem] sm:h-[18rem] xl:h-[22rem] overflow-hidden rounded"
    >
      {/* Obraz w tle */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />

      {/* Półprzezroczysta nakładka */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Tekst na środku */}
      <div className="absolute inset-0 flex justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl xl:text-7xl text-white font-semibold drop-shadow-md">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default ImageHeader;
