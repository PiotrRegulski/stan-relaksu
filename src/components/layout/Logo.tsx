import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="grid-element mt-24">
      {" "}
      <Image
        src="/logo-stan-relaksu-kolo.png"
        width={200}
        height={200}
        sizes="(max-width: 600px) 100vw, 50vw"
        className=" rounded-full shadow-xl "
        alt="Screenshots of the dashboard project showing desktop version"
        priority={true}
      />
    </div>
  );
};

export default Logo;
