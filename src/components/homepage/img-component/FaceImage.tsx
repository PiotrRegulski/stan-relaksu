import React from 'react';
import Image from 'next/image';
const FaceImage = () => {
    return (
        <div className="relative  h-full w-full ">
        <Image
          src="/mainpagemasaztwaz.jpg"
          alt="Kinga Wołoszka- fizjoterapeutka"
          fill
          className=" object-cover object-top  h-full w-full"
          priority={true}
        />
      </div>
    );
};

export default FaceImage;