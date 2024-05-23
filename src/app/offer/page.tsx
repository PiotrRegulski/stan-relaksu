import React from 'react';

interface OfferProps {
  // Tutaj możesz dodać właściwości, jeśli są potrzebne
}

const Offer: React.FC<OfferProps> = () => {
  return (
    <header className="bg-cover bg-center h-28" style={{ backgroundImage: "url('/ofertabg.png')" }}>
      <h2>Oferta</h2>
      <h2>Oferta</h2>
      <h2>Oferta</h2>
      <h2>Oferta</h2>
    </header>
  );
};

export default Offer;
