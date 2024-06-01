import React from 'react';

interface PageHeaderProps {
  children: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  return (
    <header
      id="offer-header"
      className="grid grid-cols-1 gap-2 place-items-center sm:h-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/ofertabg.png')" }}
    >
      <h1 className="px-4 py-3 md:text-4xl text-xl text-center font-bold uppercase text-gray-600">
        {children}
      </h1>
    </header>
  );
};

export default PageHeader;
