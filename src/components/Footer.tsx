import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="p-8 m-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-2/5 mb-6 md:mb-0">
          <h2 className="text-[30px] font-bold">S P H E R E</h2>
          <p className="mt-4 lg:pr-[37%] text-justify text-[18px] font-extralight font-monserrat">Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.</p>
        </div>
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-[22px] font-monserrat">Company</h3>
          <ul className="mt-4 space-y-2 text-[18px] font-monserrat font-extralight">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Product Digital</a></li>
            <li><a href="#">Customer Reviews</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-[22px] font-monserrat">Information</h3>
          <ul className="mt-4 space-y-2 text-[18px] font-monserrat font-extralight">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">Return & Refund</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h3 className="text-xl font-bold text-[22px] font-monserrat">Contact</h3>
          <ul className="mt-4 space-y-2 text-[18px] font-monserrat font-extralight">
            <li className='flex flex-row items-center'><FaPhone/>(+1) 123-456-7890</li>
            <li className='flex flex-row items-center'><MdEmail/>email@youremail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
