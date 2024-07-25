import React from 'react';

interface PageHeaderProps {
  children: React.ReactNode;
  id:any;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children,id }) => {
  return (
    <header
      id={id}
      className="grid grid-cols-1 gap-2 place-items-center md:h-[5em]  bg-gradient-to-r from-teal-700/80 via-teal-500/75 to-teal-400/80 shadow-md shadow-gray-400 border-t-4 border-gray-400"
      // style={{ backgroundImage: "url('/ofertabg.png')" }}
    >
      <header className="px-4 py-3 xl:text-4xl text-xl text-center font-semibold bg-gradient-to-l from-teal-300/50 bg-opacity-75 rounded-xl  text-black underline">
        {children}
      </header>
    </header>
  );
};

export default PageHeader;
