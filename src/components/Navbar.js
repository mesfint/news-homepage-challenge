import React, { useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/images/logo.svg";
import Modal from "./Modal";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const showMenu = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className=" mx-[18px] md:mt-10 md:mx-[100px]  p-4 px-2 ">
        <div className="flex justify-between  md:w-full ">
          {/* <h1 className="font-bold md:text-6xl sm:text-4xl text-5xl  ">W.</h1> */}
          <img
            src={Logo}
            alt=""
            className="w-[40px] sm:w-[80px]  md:grid-cols-2  "
          />

          <ul className="md:flex  hidden">
            <li className="py-2 px-2 text-slate-400 font-bold">Home</li>
            <li className="py-2 px-2 text-slate-400 font-bold">New</li>
            <li className="py-2 px-2 text-slate-400 font-bold">Popular</li>
            <li className="py-2 px-2 text-slate-400 font-bold">Trending</li>
            <li className="py-2 px-2 text-slate-400 font-bold">Categories</li>
          </ul>
          <div className="block z-10 md:hidden " onClick={showMenu}>
            {nav ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineAlignRight size={30} />
            )}
          </div>
        </div>

        <Modal nav={nav} />
      </nav>
    </>
  );
};

export default Navbar;
