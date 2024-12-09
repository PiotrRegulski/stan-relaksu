import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className=" relative grid-element lg:h-52 lg:w-52  xl:h-[14rem] xl:w-[14rem] 2xl:h-[18rem] 2xl:w-[18rem] ml-4 2xl:ml-28" >
      {" "}
      <Image
        src="/logo-stan-relaksu-kolo.png"
      fill
        sizes="(max-width: 600px) 100vw, 50vw"
        className="bg-mainthemelogo rounded-full  z-20   "
        alt="Logo gabinetu terapii manualnej i masażu"
        priority={true}
      />
    </div>
  );
};

export default Logo;
