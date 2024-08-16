import React from "react";
import Image from "next/image";
const AboutImageCard = () => {
  return (
    <Image
      src="/hero.jpg"
      alt="Kinga Wołoszka- fizjoterapeutka"
      fill
      className="  object-cover objet-top md:object-fill rounded-full  md:rounded-xl"
      priority={true}
    />
  );
};

export default AboutImageCard;
