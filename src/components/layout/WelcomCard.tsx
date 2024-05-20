import React from "react";
import Image from "next/image";
const WelcomCard = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-amber-200">
        <div className="flex justify-center">
          <Image
            src="/stan-relaksu-logo.png"
            width={300}
            height={300}
            className="justify-center border-8  rounded-full mx-3 my-3 "
            alt="Screenshots of the dashboard project showing desktop version"
            priority={true}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full bg-amber-200 ">
        <h2 className="text-center text-xl">Coś o mnie</h2>
        <div>
          {" "}
          <p className="w-1/3 flex justify-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            adipisci repudiandae mollitia! Veniam voluptate dolorem consequatur
            laborum animi, quos inventore ipsa, vero sunt enim, in ad debitis
            aspernatur odio perferendis?
          </p>
        </div>

        <div>
          <button className="flex items-center justify-center text-sm gap-4 text-black bg-amber-500 rounded-full px-4 py-3 focus:outline-none focus:shadow-outline">
            O mnie
          </button>
          <button className="flex items-center justify-center text-sm gap-4 text-black bg-white rounded-full px-4 py-3 focus:outline-none focus:shadow-outline">
            Oferta
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomCard;
