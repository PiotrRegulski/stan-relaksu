import React from "react";
import Image from "next/image";
const HomepageImage = () => {
  return (
    <div className=" relative w-full h-full shadow-lg my-2">
      <Image
        src="/mainImage.png"
        fill
        className="rounded-xl border-4 border-white shadow-xl shadow-gray-400/75"
        alt="Screenshots of the dashboard project showing desktop version"
        priority={true}
        object-fit="contein"
      />
    </div>
  );
};

export default HomepageImage;
