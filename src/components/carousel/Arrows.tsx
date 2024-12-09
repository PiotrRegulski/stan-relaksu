import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 right-1 z-40 `}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    >
      {/* <IoIosArrowForward className="text-black text-4xl hover:text-gray-400 cursor-pointer" /> */}
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2  left-1 z-40  `}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      {/* <IoIosArrowBack className="text-black text-4xl hover:text-gray-400 cursor-pointer" /> */}
    </div>
  );
};

export { NextArrow, PrevArrow };
