import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div>
      {" "}
      <Image
        src="/logo.png"
        width={150}
        height={150}
        className=""
        alt="Screenshots of the dashboard project showing desktop version"
        priority={true}
      />
    </div>
  );
};

export default Logo;
