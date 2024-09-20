import React from "react";
import BackImage from "../homepage/img-component/BackImage";
import PageHeader from "../homepage/PageHeader";
import ImageCard from "../about/ImageCard";

const OffersHeader = () => {
  return (
    <div className="bg-white mt-[5rem]">
      <PageHeader id={"offer"}>Oferta</PageHeader>
      <div className=" relative flex flex-col md:flex-row  bg-secondary   lg:mx-[1rem] my-2 rounded">
        <div className="absolute  flex flex-col  z-30 md:left-[0] md:right-[0] md:top-[0] lg:left-[0] lg:right-[0] lg:top-[0] bg-white bg-opacity-40 border-white border-4 rounded-xl h-full md:h-[16rem] lg:h-[16rem] 2xl:h-[21rem] justify-center">
          <p className="w-full md:px-16 lg:px-24  xl:px-48 tracking-wide text-center font-serif text-lg md:text-xl font-bold  lg:text-2xl   animate-fadeIn rounded-xl transition-transform duration-1000 ease-in-out  ">
            Czekam na Ciebie z terapią manualną, masażem powięziowym, masażem
            tkanek głębokich.
          </p>
          <p className=" w-full md:px-16 lg:px-24 tracking-wide text-center text-lg font-serif font-semibold md:text-xl mx-2  sm:px-1 py-2 sm:py-1  animate-fadeIn rounded-xl transition-transform duration-1000 ease-in-out  ">
            Głęboko odprężającymi technikami masażu twarzy Kobido, masażu
            relaksacyjnego, które pozwolą Ci osiągnąć<strong> Stan Relaksu</strong>.</p> 
        </div>
        <div className=" w-full flex justify-center bg-white ">
          <div className="relative  md:w-[43rem] lg:w-[50rem] w-full h-[10rem] sm:h-[12rem] md:h-[15rem] 2xl:h-[20rem] my-2 md:mx-2 opacity-40 lg:opacity-40 ">
            <ImageCard src={"/offersheader1.jpg"} alt={"masaż powięziowy"} />
          </div>
          <div className=" relative  md:w-[43rem] lg:w-[50rem] w-full h-[10rem] sm:h-[12rem] md:h-[15rem] 2xl:h-[20rem] my-2 mx-1 md:mx-2 opacity-40 lg:opacity-40">
            <ImageCard src={"/offersheader2.jpg"} alt={"zabieg na twarz"} />
          </div>
          <div className="relative  md:w-[43rem] lg:w-[50rem] w-full h-[10rem] sm:h-[12rem] md:h-[15rem] 2xl:h-[20rem] my-2 md:mx-2 opacity-40 lg:opacity-40 ">
            <BackImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersHeader;
