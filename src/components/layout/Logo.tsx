import React from 'react';
import Image from 'next/image';
const Logo = () => {
    return (
        <div>
            <Image
        src="/logo.png"
        width={200}
        height={200}
        className="justify-center  mx-1 my-1 "
        alt="Screenshots of the dashboard project showing desktop version"
        priority={true}
      />
            
        </div>
    );
};

export default Logo;