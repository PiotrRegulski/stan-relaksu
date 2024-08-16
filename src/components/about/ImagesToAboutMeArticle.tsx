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
    <div className="flex overflow-x-auto  mx-auto py-6 md:py-12 bg-triadgray border-headercolor border-4 md:px-48">
     
        {imgURLs.map((imgUrl) => (
          <div key={imgUrl.label} className="relative  flex-shrink-0 w-72 h-72 md:w-72 md:h-96 mx-2 md:mx-2  shadow-lg shadow-black  ">
           
            <ImageCard key={imgUrl.label} src={imgUrl.src} alt={imgUrl.label} />
          </div>
        ))}
     
    </div>
  );
};

export default ImagesToAboutMeArticle;
