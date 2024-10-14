
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
interface ToHomePageProps{
    children: React.ReactNode;
   
  }
const ToHomePage: React.FC<ToHomePageProps> = ({children}) => {
    const router = useRouter();
    return (
        <div className="flex justify-center">
        <button
          onClick={()=>router.push("/")}
          className=" flex text-sm md:text-xl underline decoration-solid underline-offset-8 font-semibold my-2  text-center  text-black hover:text-gray-400 "
        >
         {children}
        </button>
      </div>
    );
};

export default ToHomePage;