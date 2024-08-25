import React from "react";
import BackImage from "../homepage/img-component/BackImage";
import PageHeader from "../homepage/PageHeader";
import ImageCard from "../about/ImageCard";

const OffersHeader = () => {
  return (
    <div className="bg-white">
      <PageHeader id={"offer"}>Oferta</PageHeader>
      <div className=" relative flex flex-col md:flex-row  bg-secondary  mb-4 lg:mx-[5rem] my-5 rounded">
        <div className="absolute  flex flex-col  z-30 md:left-[10rem] md:right-[10rem] md:top-[25%] bg-secondary bg-opacity-90 border-white border-4 rounded-xl h-full md:h-[20rem] justify-center">
          <p className="w-full tracking-wide text-center  text-xl font-[Lato] font-bold md:3xl lg:text-4xl  indent-4 animate-fadeIn rounded-xl transition-transform duration-1000 ease-in-out  ">
            Czekam na Ciebie z terapią manualną, masażem powięziowym, masażem
            tkanek głębokich.
          </p>
          <p className=" w-full tracking-wide text-center text-xl font-[Lato] md:text-xl   mx-2  sm:px-1 sm:py-1 indent-4 animate-fadeIn rounded-xl transition-transform duration-1000 ease-in-out  ">
            Głęboko odprężającymi technikami masażu twarzy Kobido, masażu
            relaksacyjnego, które pozwolą Ci osiągnąć<strong> Stan Relaksu</strong>.</p> 
        </div>
        <div className=" w-full flex justify-center bg-white ">
          <div className="relative  md:w-[35rem] w-full h-[20rem] md:h-[35rem] my-2 md:mx-2 opacity-80 ">
            <ImageCard src={"/offersheader1.jpg"} alt={"masaż powięziowy"} />
          </div>
          <div className=" relative  md:w-[35rem] w-full h-[20rem] md:h-[35rem] my-2 mx-1 md:mx-2 opacity-80">
            <ImageCard src={"/offersheader2.jpg"} alt={"zabieg na twarz"} />
          </div>
          <div className="relative  md:w-[35rem] w-full h-[20rem] md:h-[35rem] my-2 md:mx-2 opacity-80 ">
            <BackImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersHeader;
