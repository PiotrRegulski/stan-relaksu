"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Noto } from "../fonts";
interface PageBackLinkProps {
  children: React.ReactNode;
}
const BackLink: React.FC<PageBackLinkProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <button
        onClick={() => router.push("/offer")}
        className={`${Noto.className} flex text-sm md:text-lg underline decoration-solid underline-offset-8 font-semibold  text-center px-2 py-3 mx-3 my-4 text-black hover:text-gray-400`}
      >
        {children}
      </button>
    </div>
  );
};

export default BackLink;
