import React from 'react';
import ImageCard from '../about/ImageCard';
const imgURLs = [
    {
      src: "/contact/wygląd-gabinet-szafa.jpg",
      label: "Wygląd gabinetu",
      caption:"Terapia manualna kolana"
    },
    {
      src: "/contact/wyglad-gabinet-meble.jpg",
      label: "Wygląd gabinetu",
      caption:"Terapia manualna"
    },
    {
      src: "/contact/wygląd-gabinet-lozko.jpg",
      label: "Wygląd gabinetu",
      caption:"Terapia wisceralna"
    },
    {
      src: "/contact/wygląd-cwieczenie-yogi.jpg",
      label: "ćwiczenie yogi",
      caption:"Terapia uroginekologiczna"
    },
  ];
const OfficeAppearance = () => {
    return (
        <div className="flex  md:flex-row overflow-x-auto overflow-hidden max-w-full 2xl:max-w-full py-12 bg-secondary  md:gap-4    ">
        {imgURLs.map((imgUrl) => (
          <div
            key={imgUrl.label}
            className="relative  flex  flex-shrink-0  w-full h-[48rem] sm:w-[28rem] md:w-[22rem]   lg:w-[32rem] xl:w-[20rem] 2xl:w-[35rem]  md:ml-5 2xl:ml-0 items-center shadow-lg shadow-gray-400 border-white border-4 "
          >
            
              {" "}
              <ImageCard key={imgUrl.label} src={imgUrl.src} alt={imgUrl.label} />
           
          </div>
        ))}
      </div>
    );
};

export default OfficeAppearance;