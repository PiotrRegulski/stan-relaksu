import React from 'react';
import Image from 'next/image';
const AboutImageCard = () => {
    return (
        <div className="relative  h-full w-full ">
        <Image
          src="/hero.jpg"
          alt="Kinga Wołoszka- fizjoterapeutka"
          fill
          className=" object-cover   h-full w-full"
          priority={true}
         
        />
      </div>
    );
};

export default AboutImageCard;