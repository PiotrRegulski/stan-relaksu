import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="grid-element">
      {" "}
      <Image
        src="/logo-stan-relaksu-kolo.png"
        width={93}
        height={93}
        className="bg-mainthemelogo rounded-full shadow-xl"
        alt="Screenshots of the dashboard project showing desktop version"
        priority={true}
      />
    </div>
  );
};

export default Logo;
