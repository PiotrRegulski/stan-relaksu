import React from 'react';
import Image from 'next/image'; 
const ImageItemMobile = () => {
    return (
         <div className="flex flex-row lg:hidden my-4 ">
               {" "}
             
               <div className="w-full h-full flex justify-center items-center  ">
                 <Image
                   src="/heroMobile.jpg" // Zmień ścieżkę na właściwe zdjęcie
                   alt="Kinga Wołoszka"
                   width={400}
                   height={200}
                   className="rounded-lg  object-cover border-8 border-white "
                 />
               </div>
             
               
             </div>
    );
};

export default ImageItemMobile;