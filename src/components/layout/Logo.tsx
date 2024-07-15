import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div className=" flex w-full justify-center">
      {" "}
      <Image
        src="/logo-stan-relaksu-kolo.png"
        width={150}
        height={125}
        className=""
        alt="Screenshots of the dashboard project showing desktop version"
        priority={true}
      />
    </div>
  );
};

export default Logo;
