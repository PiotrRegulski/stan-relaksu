import React from "react";
import Image from "next/image";
const BackImage = () => {
  return (
    <Image
      src="/mainpagemasazplecy.jpg"
      alt="Kinga Wołoszka- fizjoterapeutka"
      fill
      sizes="(max-width: 600px) 100vw, 50vw"
      className=" object-fill h-full w-full"
      priority={true}
    />
  );
};

export default BackImage;
