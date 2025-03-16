import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className=" relative grid-element lg:h-52 lg:w-52  xl:h-[14rem] xl:w-[14rem] 2xl:h-[16rem] 2xl:w-[16rem] mx-4" >
      {" "}
      <Image
        src="/logo-stan-relaksu-kolo.png"
      fill
        sizes="(max-width: 600px) 100vw, 50vw"
        className="bg-mainthemelogo rounded-full  z-20 shadow-gray-100 shadow-sm   "
        alt="Stan Relaksu Gabinet terapii manualnej i masażu"
     
      />
    </div>
  );
};

export default Logo;
