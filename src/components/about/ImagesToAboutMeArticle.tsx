const imgURLs = [
  {
    src: "/terapia-manualna-kolano.jpg",
    label: "terapia manualna kolano",
  },
  {
    src: "/terapia-manualna.jpg",
    label: "terapia manualna",
  },
  {
    src: "/terapia-wisceralna.jpg",
    label: "terapia wisceralna",
  },
  {
    src: "/terapia-uro.jpg",
    label: "terapia uro",
  },
];

import React from "react";
import ImageCard from "./ImageCard";

const ImagesToAboutMeArticle = () => {
  return (
    <div className="flex overflow-x-auto w-full py-12 bg-secondary border-2  shadow-lg shadow-primary  ">
      {imgURLs.map((imgUrl) => (
        <div
          key={imgUrl.label}
          className="relative  flex-shrink-0 w-96 md:w-[22rem] h-[34rem] md:h-[34rem] md:ml-5 items-center shadow-lg shadow-gray-400 border-white border-4 "
        >
          
            {" "}
            <ImageCard key={imgUrl.label} src={imgUrl.src} alt={imgUrl.label} />
         
        </div>
      ))}
    </div>
  );
};

export default ImagesToAboutMeArticle;
