import React from "react";
import Image from "next/image";
const BackImage = () => {
  return (
    <Image
      src="/mainpagemasazplecy.jpg"
      alt="Kinga Wołoszka- fizjoterapeutka"
      fill
      className=" object-fill h-full w-full"
      priority={true}
    />
  );
};

export default BackImage;
