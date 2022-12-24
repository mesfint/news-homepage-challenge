import React from "react";
import WebMobile from "../assets/images/image-web-3-mobile.jpg";

const Hero = () => {
  return (
    <>
      <div className="mx-8     ">
        <img
          src={WebMobile}
          alt=""
          className="md:object-cover md:w-full   md:h-[15rem] "
        />
      </div>
      <div className=" md:grid grid-cols-2  md:gap-4 mx-8 ">
        <div className=" ">
          <h1 className=" sm:text-6xl md:text-5xl text-2xl font-bold font-inter-ExtraBold  pt-3  leading-6 ">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div>
          <p className=" text-[12px] pt-3 md:text-[18px] sm:text-[22px]  md:leading-6 text-slate-500">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-softRed   text-[12px] p-2 mt-3    uppercase font-bold text-offWhite hover:bg-softRed-800 focus:outline-none">
            Read more
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
