import React from "react";
import { LiaClinicMedicalSolid } from "react-icons/lia";
interface KeyListProps {
  benefits_list_1?: string;
  benefits_list_2?: string;
  benefits_list_3?: string;
  benefits_list_title?: string;
}

const KeyList: React.FC<KeyListProps> = ({
  benefits_list_1,
  benefits_list_2,
  benefits_list_3,
  benefits_list_title,
}) => {
  return (
    <div className=" flex flex-col justify-center items-center w-full lg:ml-4 space-y-4 my-8">
      <div className="w-full ">
        {" "}
        <h3 className="font-semibold text-lg">{benefits_list_title}</h3>
      </div>

      <ul className=" flex flex-col  text-base my-2 space-y-4 sm:w-3/4 lg:w-[85%] ">
        <li className="w-full   gap-1 font-bold flex flex-col lg:flex-row ">
          <div className="flex w-full justify-start items-center">
            {" "}
            <div className="flex-shrink-0 h-10 w-10 lg:h-14 lg:w-14 text-green-600">
              {" "}
              <LiaClinicMedicalSolid className="h-full w-full" />{" "}
            </div>
            <p className=" px-4 py-3">{benefits_list_1}</p>
          </div>
        </li>
        <li className="flex w-full   gap-1 font-bold flex-col lg:flex-row">
        <div className="flex w-full justify-start items-center">
            {" "}
            <div className="flex-shrink-0 h-10 w-10 lg:h-14 lg:w-14 text-green-600">
              {" "}
              <LiaClinicMedicalSolid className="h-full w-full" />{" "}
            </div>
            <p className=" px-4 py-3">{benefits_list_2}</p>
          </div>
        </li>
        <li className="flex w-full   gap-1 font-bold  flex-col lg:flex-row">
        <div className="flex w-full justify-start items-center">
            {" "}
            <div className="flex-shrink-0 h-10 w-10 lg:h-14 lg:w-14 text-green-600">
              {" "}
              <LiaClinicMedicalSolid className="h-full w-full" />{" "}
            </div>
            <p className=" px-4 py-3">{benefits_list_3}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default KeyList;
