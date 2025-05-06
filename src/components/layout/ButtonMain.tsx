import React, { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react";
import { Noto } from "../fonts";

interface ButtonMainProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  px?: string;
  py?: string;
}

const ButtonMain: React.FC<ButtonMainProps> = ({ children, onClick, type = "button", px="px-2",py="py-1", disabled = false, ...rest }) => {
  return (
    <button
      className={`${Noto.className} flex items-center justify-center lg:min-h-[48px] lg:min-w-[48px] md:px-4 md:py-3  my-2 font-semibold text-sm lg:text-lg border-2 border-primary hover:border-2 hover:border-black  bg-primary text-black hover:text-black hover:bg-white rounded py-1 px-3 xl:py-3 shadow-gray-400 shadow-md`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonMain;
