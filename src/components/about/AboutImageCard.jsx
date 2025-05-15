import React from "react";
import Image from "next/image";
const AboutImageCard = () => {
  return (
    <Image
      src="/hero.jpg"
      alt="Kinga Wołoszka"
      fill
      sizes="(max-width: 600px) 100vw, 50vw"
      className="  object-cover objet-top md:object-fill rounded-full  md:rounded-xl"
      priority={true}
    />
  );
};

export default AboutImageCard;
