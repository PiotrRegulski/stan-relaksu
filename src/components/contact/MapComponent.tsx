import React from "react";

const MapComponent: React.FC = () => {
  return (
    
      <iframe
        className=" w-full h-96 border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.1189982324863!2d20.93029777691218!3d52.2048849595116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471934b25f5a4887%3A0x347be37ef7370ac2!2sNaukowa%2020%2F2%2C%2002-463%20Warszawa!5e0!3m2!1spl!2spl!4v1717182637030!5m2!1spl!2spl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
  
  );
};

export default MapComponent;
