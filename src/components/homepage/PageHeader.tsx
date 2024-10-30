import React from "react";
import { Noto } from "../fonts";
interface PageHeaderProps {
  children: React.ReactNode;
  id: any;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, id }) => {
  return (
    <header
      id={id}
      className="grid grid-cols-1 gap-2 place-items-center md:h-24 bg-white  "
      // style={{ backgroundImage: "url('/ofertabg.png')" }}
    >
      <div
        className={`${Noto.className}px-4 py-3 text-3xl md:text-2xl xl:text-2xl text-center   bg-opacity-75 rounded-xl font-bold  text-black`}
      >
        <p className={`${Noto.className}`}>{children}</p>
      </div>
    </header>
  );
};

export default PageHeader;
