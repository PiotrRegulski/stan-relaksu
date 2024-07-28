import React from 'react';
import Image from 'next/image';
const WelcomeCardImage = () => {
    return (
        <div className="relative flex items-center">
        <Image
          src="/mirror.png"
          alt="zdjęcie twórcy Stanu Relaksu"
          fill
          className="object-cover h-full w-full"
          priority={true}
          sizes="(max-width: 600px) 100vw,"
        />
      </div>
    );
};

export default WelcomeCardImage;