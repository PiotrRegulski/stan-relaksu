import React from 'react';
import Image from 'next/image';
const ImageItem = () => {
    return (
        <div className="hidden relative lg:flex flex-row   h-full lg:w-2/3 justify-center items-center ">
        {" "}
        <div className="absolute lg:-left-[7%] xl:-left-[12%] z-20 2xl:-left-[15%] top-5 2xl:-top-[5%] w-full lg:w-32 xl:w-36 2xl:w-44 flex ">
          <Image
            src="/terapeuticPlace.jpg" // Zmień ścieżkę na właściwe public\public\
            alt="Kinga Wołoszka"
            width={200}
            height={200}
            className="  object-cover border-4 border-white rounded-md"
          />
        </div>
        <div className="w-full lg:w-64 xl:w-3/4 flex z-10 justify-center items-center">
          <Image
            src="/hero.jpg" // Zmień ścieżkę na właściwe zdjęcie
            alt="Kinga Wołoszka"
            width={350}
            height={350}
            className="rounded-lg  object-cover border-4 border-white "
          />
        </div>
        <div className=" absolute lg:bottom-[10%] lg:right-[0%] xl:bottom-0 2xl:-bottom-[5%] bottom-0 z-20 w-full lg:w-32 xl:w-36 2xl:w-40 flex justify-center items-center ">
          <Image
            src="/mainpagemasazplecy.jpg" // Zmień ścieżkę na właściwe public\
            alt="Kinga Wołoszka"
            width={200}
            height={200}
            className="  object-cover border-4 border-white rounded"
          />
        </div>
        {/* <div className=" absolute left-[55%] -top-[10%] z-20  w-full xl:w-1/3 flex justify-center items-center  ">
          <Image
            src="/aboutmemainpage.jpg" // Zmień ścieżkę na właściwe public/public/aboutmemainpage.jpg
            alt="Kinga Wołoszka"
            width={200}
            height={200}
            className="  object-cover border-8 border-white rounded"
          />
        </div> */}
        
      </div>
    );
};

export default ImageItem;
