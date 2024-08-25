import React from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: any;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt}  fill priority={true} className=" object-cover object-top   w-full h-full rounded " sizes="(max-width: 600px) 100vw, 50vw"/>;
};

export default ImageCard;
