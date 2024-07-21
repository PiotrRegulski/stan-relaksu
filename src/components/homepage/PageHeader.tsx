import React from 'react';

interface PageHeaderProps {
  children: React.ReactNode;
  id:any;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children,id }) => {
  return (
    <header
      id={id}
      className="grid grid-cols-1 gap-2 place-items-center md:h-32  bg-gradient-to-r from-teal-300/50 to-teal-300/70 rounded-xl"
      // style={{ backgroundImage: "url('/ofertabg.png')" }}
    >
      <h1 className="px-4 py-3 md:text-4xl text-xl text-center font-semibold bg-gradient-to-l from-teal-300/50 bg-opacity-75 rounded-xl  text-black underline">
        {children}
      </h1>
    </header>
  );
};

export default PageHeader;
