import React from "react";
import { Noto } from "../fonts";
interface PageHeaderProps {
  children: React.ReactNode;
  id: any;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, id }) => {
  return (
    <div
      id={id}
      className="grid grid-cols-1 gap-2 place-items-center  bg-transparent rounded-xl  "
      // style={{ backgroundImage: "url('/ofertabg.png')" }}
    >
      <div
        className={`${Noto.className} px-4 py-3 text-2xl md:text-2xl xl:text-2xl text-center font-bold  text-black`}
      >
        <div className={`${Noto.className}`}>{children}</div>
      </div>
    </div>
  );
};

export default PageHeader;
