import React from 'react';
import Image from 'next/image';
const WelcomeCardImage = () => {
    return (
        <div className="relative flex items-center h-full w-full">
        <Image
          src="/mirror.png"
          alt="zdjęcie twórcy Stanu Relaksu"
          fill
          className="object-cover h-full w-full"
          priority={true}
         
        />
      </div>
    );
};

export default WelcomeCardImage;