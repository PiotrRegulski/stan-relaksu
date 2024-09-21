import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="grid-element mt-24">
      {" "}
      <Image
        src="/logo-stan-relaksu-kolo.png"
        width={180}
        height={180}
        sizes="(max-width: 600px) 100vw, 50vw"
        className="bg-mainthemelogo rounded-full  shadow-xl  "
        alt="Screenshots of the dashboard project showing desktop version"
        priority={true}
      />
    </div>
  );
};

export default Logo;
