import React from "react";
import ImageCard from "./ImageCard";
const imageURLs = [
  {
    src: "/banka-twarzy.jpg",
    label: "banka twarzy",
  },
  {
    src: "/ kobido-omnie.jpg",
    label: "masaz kobido",
  },
  {
    src: "/kobido-kinesiotaping-omnie.jpg",
    label: "kobido kinesiotaping",
  },
];
const ImagesToAboutMeLast = () => {
  return (
    <div className="flex overflow-x-auto w-full py-12  ">
      {imageURLs.map((imgUrl) => (
        <div
          key={imgUrl.label}
          className="relative  flex-shrink-0 w-96 md:w-[34rem] h-72 md:h-96 mx-2 items-center shadow-xl shadow-black"
        >
         
          <ImageCard key={imgUrl.label} src={imgUrl.src} alt={imgUrl.label} />
        </div>
      ))}
    </div>
  );
};

export default ImagesToAboutMeLast;
