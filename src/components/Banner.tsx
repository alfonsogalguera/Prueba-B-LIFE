import React from "react";
import img1 from "../assets/imgbanner1.png";
import img2 from "../assets/imagenbanner2.png";
import img3 from "../assets/imagenbanner3.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center bg-gray-100 py-16 z-20 overflow-hidden">
    {/* Texto */}
    <div className="max-w-lg px-4 lg:px-0">
      <h1 className="text-[40px] lg:text-[60px] font-extrabold mb-4 font-prompt leading-tight">
        <span className="block">
          Grab <span className="text-white bg-purple-600 rounded-full px-4 py-1 inline-block">50%</span>
        </span>
        <span className="block">Off Smartphone</span>
        <span className="block">Collection</span>
      </h1>
      <p className="text-gray-700 mb-6 font-monserrat font-extralight text-[16px] lg:text-[18px]">
        Lorem ipsum dolor sit amet consectetur. 
        <p>Eleifend nec morbi tellus vitae leo nunc.</p>
      </p>
      <div className="flex items-center space-x-4">
        <img src={img1} alt="Xiphone 14 Edition" className="w-20 h-20 lg:w-24 lg:h-24 object-contain" />
        <span className="font-semibold font-prompt text-[24px] lg:text-[33px]">Xiphone 14 <p>Edition </p></span>
      </div>
    </div>
  
    {/* Imágenes */}
    <div className="relative flex items-end justify-center mt-6 lg:mt-0 h-[300px] lg:h-[400px]">
      <img
        src={img3}
        alt="iPhone"
        className="w-[300px] lg:w-[400px] object-contain z-0 rotate-45"
        style={{ transform: 'translateY(20%)' }}
      />
      <img
        src={img2}
        alt="Highest Quality"
        className="w-[150px] lg:w-[200px] z-10 absolute top-1/2 left-1/2 transform -translate-x-[200px] -translate-y-[20%] lg:-translate-x-[330px] lg:-translate-y-1/8"
      />
    </div>
  </div>
  
  );
};

export default Banner;
