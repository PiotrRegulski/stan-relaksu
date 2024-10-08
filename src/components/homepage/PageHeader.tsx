import React from 'react';

interface PageHeaderProps {
  children: React.ReactNode;
  id:any;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children,id }) => {
  return (
    <header
      id={id}
      className="grid grid-cols-1 gap-2 place-items-center md:h-24 bg-white  "
      // style={{ backgroundImage: "url('/ofertabg.png')" }}
    >
      <header className="px-4 py-3 text-3xl md:text-3xl xl:text-4xl font-thin  font-serif text-center   bg-opacity-75 rounded-xl  text-black ">
        {children}
      </header>
    </header>
  );
};

export default PageHeader;
