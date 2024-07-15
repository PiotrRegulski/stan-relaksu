import React from 'react';

interface PageHeaderProps {
  children: React.ReactNode;
  id:any;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children,id }) => {
  return (
    <header
      id={id}
      className="grid grid-cols-1 gap-2 place-items-center md:h-32 md:bg-cover md:bg-center backdrop-contrast-200"
      // style={{ backgroundImage: "url('/ofertabg.png')" }}
    >
      <h1 className="px-4 py-3 md:text-4xl text-xl text-center font-semibold   text-gray-950 underline">
        {children}
      </h1>
    </header>
  );
};

export default PageHeader;
