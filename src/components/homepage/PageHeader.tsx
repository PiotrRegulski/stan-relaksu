import React from 'react';

interface PageHeaderProps {
  children: React.ReactNode;
  id:any;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children,id }) => {
  return (
    <header
      id={id}
      className="grid grid-cols-1 gap-2 place-items-center md:h-32  bg-gradient-to-l from-teal-400/50 via-teal-500/75 to-teal-400/50 pt-2 mt-1"
      // style={{ backgroundImage: "url('/ofertabg.png')" }}
    >
      <h1 className="px-4 py-3 md:text-4xl text-xl text-center font-semibold   text-white underline">
        {children}
      </h1>
    </header>
  );
};

export default PageHeader;
