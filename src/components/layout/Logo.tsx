import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="grid-element">
      {" "}
      <Image
        src="/logo-stan-relaksu-kolo.png"
        width={60}
        height={60}
        className="bg-mainthemelogo rounded-full shadow-xl"
        alt="Screenshots of the dashboard project showing desktop version"
        priority={true}
      />
    </div>
  );
};

export default Logo;
