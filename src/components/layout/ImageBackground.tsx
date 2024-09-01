import React from "react";
import Image from "next/image";
interface ImageBackgroundCardProps {
  src: string;
  alt: string;
}
const ImageBackground: React.FC<ImageBackgroundCardProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={true}
      className="object-cover object-top w-full h-full"
      sizes="(max-width: 600px) 100vw, 50vw"
    />
  );
};

export default ImageBackground;
