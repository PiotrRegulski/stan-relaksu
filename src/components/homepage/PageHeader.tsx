import React from 'react';

interface PageHeaderProps {
  children: React.ReactNode;
  id:any;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children,id }) => {
  return (
    <header
      id={id}
      className="grid grid-cols-1 gap-2 place-items-center md:h-[5em] bg-headercolor shadow-md shadow-gray-700 border-t-4 border-gray-400"
      // style={{ backgroundImage: "url('/ofertabg.png')" }}
    >
      <header className="px-4 py-3 text-xl xl:text-2xl font-bold  text-center   bg-opacity-75 rounded-xl  text-amber-900 ">
        {children}
      </header>
    </header>
  );
};

export default PageHeader;
