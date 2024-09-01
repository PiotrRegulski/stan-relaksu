const imgURLs = [
  {
    src: "/terapia-manualna-kolano.jpg",
    label: "terapia manualna kolano",
    caption:"Terapia manualna kolana"
  },
  {
    src: "/terapia-manualna.jpg",
    label: "terapia manualna",
    caption:"Terapia manualna"
  },
  {
    src: "/terapia-wisceralna.jpg",
    label: "terapia wisceralna",
    caption:"Terapia wisceralna"
  },
  {
    src: "/terapia-uro.jpg",
    label: "terapia uro",
    caption:"Terapia uroginekologiczna"
  },
];

import React from "react";
import ImageCard from "./ImageCard";

const ImagesToAboutMeArticle = () => {
  return (
    <div className="flex overflow-x-auto w-full py-12 bg-secondary border-2 lg:mx-24 md:gap-4  shadow-lg shadow-primary  ">
      {imgURLs.map((imgUrl) => (
        <div
          key={imgUrl.label}
          className="relative  flex-shrink-0 2xl:flex-shrink w-80 md:w-[22rem] h-[24rem] md:h-[24rem] lg:w-[23rem] xl:w-[20rem] xl:h-[30rem] 2xl:w-[35rem] 2xl:h-[40rem] md:ml-5 2xl:ml-0 items-center shadow-lg shadow-gray-400 border-white border-4 "
        >
          
            {" "}
            <ImageCard key={imgUrl.label} src={imgUrl.src} alt={imgUrl.label} caption={imgUrl.caption}/>
         
        </div>
      ))}
    </div>
  );
};

export default ImagesToAboutMeArticle;
