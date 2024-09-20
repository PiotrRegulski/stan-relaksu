import React from 'react';
import Image from 'next/image';
const FaceImage = () => {
    return (
        
        <Image
          src="/mainpagemasaztwaz.jpg"
          alt="Kinga Wołoszka- fizjoterapeutka"
          fill
          sizes="(max-width: 600px) 100vw, 50vw"
          className=" object-cover  md:object-cover w-full h-full  "
          priority={true}
        />
   
    );
};

export default FaceImage;