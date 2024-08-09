import React from "react";
import {
  FaLaptop,
  FaMobileAlt,
  FaCamera,
  FaTv,
  FaHome,
  FaHeadphones,
  FaGamepad,
} from "react-icons/fa";

const Accesories = () => {
  return (
    <div className="p-8 lg:p-24 text-center">
      <h2 className="text-2xl lg:text-4xl font-extrabold mb-4 font-prompt text-[36px] lg:text-[74px]">
        What <span className="text-purple-600">we</span> provide?
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-8 lg:mt-16">
        <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-auto">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex justify-center items-center">
            <FaLaptop size={24}/>
          </div>
          <span className="font-monserrat text-sm lg:text-[18px] mt-4">
            Computer & Laptop
          </span>
        </div>
        <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-auto">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex justify-center items-center">
            <FaMobileAlt size={24} />
          </div>
          <span className="font-monserrat text-sm lg:text-[18px] mt-4">
            Mobile & Phone
          </span>
        </div>
        <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-auto">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex justify-center items-center">
            <FaCamera size={24}/>
          </div>
          <span className="font-monserrat text-sm lg:text-[18px] mt-4">Camera</span>
        </div>
        <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-auto">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex justify-center items-center">
            <FaTv size={24}  />
          </div>
          <span className="font-monserrat text-sm lg:text-[18px] mt-4">
            TV & Smart Box
          </span>
        </div>
        <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-auto">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex justify-center items-center">
            <FaHome size={24}  />
          </div>
          <span className="font-monserrat text-sm lg:text-[18px] mt-4">
            Home Appliance
          </span>
        </div>
        <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-auto">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex justify-center items-center">
            <FaHeadphones size={24}  />
          </div>
          <span className="font-monserrat text-sm lg:text-[18px] mt-4">Accessories</span>
        </div>
        <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-auto">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex justify-center items-center">
            <FaGamepad size={24} />
          </div>
          <span className="font-monserrat text-sm lg:text-[18px] mt-4">
            Other Categories
          </span>
        </div>
      </div>
    </div>
  );
};

export default Accesories;
