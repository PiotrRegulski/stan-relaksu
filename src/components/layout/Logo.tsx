import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className=" relative grid-element lg:h-52 lg:w-52  xl:h-[14rem] xl:w-[14rem]" >
      {" "}
      <Image
        src="/logo-stan-relaksu-kolo.png"
      fill
        sizes="(max-width: 600px) 100vw, 50vw"
        className="bg-mainthemelogo rounded-full  shadow-lg mt-16 xl:mt-24  shadow-secondary   "
        alt="Screenshots of the dashboard project showing desktop version"
        priority={true}
      />
    </div>
  );
};

export default Logo;
