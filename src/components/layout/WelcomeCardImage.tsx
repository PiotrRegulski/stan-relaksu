import React from "react";
import Image from "next/image";
const WelcomeCardImage = () => {
  return (
    <Image
      src="/firstMainPage.jpg"
      alt="zdjęcie pacjenta podczas masażu szyji"
      fill
      className="  object-cover lg:object-cover "
      priority={true}
    />
  );
};

export default WelcomeCardImage;
