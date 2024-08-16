import React from 'react';
import Image from 'next/image';
const FaceImage = () => {
    return (
        
        <Image
          src="/mainpagemasaztwaz.jpg"
          alt="Kinga Wołoszka- fizjoterapeutka"
          fill
          className=" object-fill w-full h-full rounded-xl"
          priority={true}
        />
   
    );
};

export default FaceImage;