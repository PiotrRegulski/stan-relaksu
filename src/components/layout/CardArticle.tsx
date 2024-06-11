import React, { ReactNode } from "react";

interface CardArticleProps {
  children: ReactNode;
}

const CardArticle: React.FC<CardArticleProps> = ({ children }) => {
  return (
    <div className="grid justify-items-center content-center my-2 mx-2 sm:my-2 sm:mx-2 bg-primary/45 shadow-xl rounded border-4 border-white  shadow-gray-400/75 min-h-1/3 sm:min-h-max ">
      <p className="  text-xl font-[Lato] md:px-10 md:mr-12 leading-loose text-pretty text-gray-900/70">
        {children}
      </p>
    </div>
  );
};

export default CardArticle;
