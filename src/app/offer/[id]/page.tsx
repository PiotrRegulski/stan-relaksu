import React from "react";

interface OfferDetailsPageProps {
  params: {
    id: string;
  };
}

const OfferDetailsPage: React.FC<OfferDetailsPageProps> = ({ params }) => {
  const offerId: string = params.id;
  return (
    <div>
      <h1>Szczegóły oferty</h1>
      <p>Offer{offerId}</p>
    </div>
  );
};

export default OfferDetailsPage;
