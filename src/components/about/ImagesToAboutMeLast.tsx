import React from "react";
import ImageCard from "./ImageCard";
const imageURLs = [
  {
    src: "/banka-twarzy.jpg",
    label: "banka twarzy",
    caption:"Masaż twarzy bańką chińską"
  },
  {
    src: "/offers-photo/kobido-omnie.jpg",
    label: "masaz kobido",
    caption:"Masaż Kobido"

  },
  {
    src: "/kobido-kinesiotaping-omnie.jpg",
    label: "kobido kinesiotaping",
    caption:"Masaż Kobido z kinesiotapingiem"

  },
];
const ImagesToAboutMeLast = () => {
  return (
    <div className="flex overflow-x-auto w-full py-12 2xl:ml-4  ">
      {imageURLs.map((imgUrl) => (
        <div
          key={imgUrl.label}
          className="relative  flex-shrink-0 w-96 sm:w-72 sm:h-80 md:w-96 h-72 md:h-72 lg:w-[32rem] 2xl:w-[31rem] mx-2 items-center shadow-xl shadow-black"
        >
         
          <ImageCard key={imgUrl.label} src={imgUrl.src} alt={imgUrl.label} caption={imgUrl.caption}/>
        </div>
      ))}
    </div>
  );
};

export default ImagesToAboutMeLast;
