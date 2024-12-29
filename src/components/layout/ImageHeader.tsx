import React,{ ReactNode }  from "react";
interface ImageHeaderProps{
    children:React.ReactNode;
    BgImage:string;
}
const ImageHeader:React.FC<ImageHeaderProps> = ({children,BgImage}) => {
  return (
    <div>
      <div className={`container mx-auto ${BgImage} bg-no-repeat bg-cover h-[25rem] 2xl:h-[35rem]`}>
        <div className="w-full h-full flex justify-center items-center ">
          <h1 className="text-7xl text-white">{children}</h1>
        </div>
      </div>
    </div>
  );
};

export default ImageHeader;
