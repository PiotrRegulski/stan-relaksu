import React from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: any;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt}  fill priority={true} className=" w-full h-full rounded" />;
};

export default ImageCard;
