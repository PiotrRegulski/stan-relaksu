import React from 'react';
import Image from 'next/image';
const FaceImage = () => {
    return (
        
        <Image
          src="/mainpagemasaztwaz.jpg"
          alt="Kinga Wołoszka- fizjoterapeutka"
          fill
          sizes="(max-width: 600px) 100vw, 50vw"
          className=" object-cover w-full h-full rounded border-2 border-white"
          priority={true}
        />
   
    );
};

export default FaceImage;