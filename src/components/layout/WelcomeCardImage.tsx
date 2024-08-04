import React from 'react';
import Image from 'next/image';
const WelcomeCardImage = () => {
    return (
        <div className="relative flex items-center h-full w-full">
        <Image
          src="/firstMainPage.jpg"
          alt="zdjęcie pacjenta podczas masażu szyji"
          fill
          className="object-cover object-center sm:object-cover sm:object-top xl:object-fill"
          priority={true}
          style={{ aspectRatio: '16/9' }}
        />
      </div>
    );
};

export default WelcomeCardImage;