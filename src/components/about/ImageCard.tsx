import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
  href?:string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, caption,href }) => {
  if (!href) {
    return null; // or some default behavior
  }
  return (
    <Link href={href.toString()}>
      {" "}
      <div className="relative w-full h-full rounded overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={false}
          className="object-cover  w-full h-full "
          sizes="(max-width: 600px) 100vw, 50vw"
        />
        {caption && (
          <div className="absolute bottom-0 left-0 w-full z-20 bg-secondary bg-opacity-70  text-black text-center p-2">
            {caption}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ImageCard;
