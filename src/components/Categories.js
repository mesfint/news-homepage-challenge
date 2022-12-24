import React from "react";
import Retro from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import Game from "../assets/images/image-gaming-growth.jpg";

const Categories = () => {
  return (
    <div className="grid grid-cols-1 mx-8 mb-6 gap-y-6   md:grid-cols-3 md:gap-2 md:mt-10 md:mx-[130px] ">
      <div className="flex gap-4  ">
        <img
          src={Retro}
          alt=""
          className="sm:w-[160px] md:w-[100px] md:h-[150px] xs:w-[100px] w-[80px]"
        />
        <div>
          <p className="text-xl sm:text-6xl md:text-3xl xs:text-3xl sm:font-bold sm:mb-4 text-slate-300">
            01
          </p>
          <p className="font-bold text-[12px] sm:text-[28px] md:text-[14px] xs:text-[18px] md:font-inter-Bold ">
            Reviving Retro PCs
          </p>
          <p className="w-[100%]  text-[10px] sm:text-[18px] md:text-[12px] xs:text-[15px] sm:leading-10 md:leading-6 text-slate-500">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex gap-4  ">
        <img
          src={Laptops}
          alt=""
          className="sm:w-[160px] md:w-[100px] md:h-[150px] xs:w-[100px] w-[80px]"
        />
        <div>
          <p className="text-xl sm:text-6xl md:text-3xl xs:text-3xl sm:font-bold sm:mb-4 text-slate-300">
            02
          </p>
          <p className="font-bold text-[12px] sm:text-[28px] md:text-[14px] md:font-inter-Bold  xs:text-[18px] ">
            {" "}
            Top 10 Laptops of 2022
          </p>
          <p className="w-[100%]  text-[10px] sm:text-[18px] md:text-[12px] xs:text-[15px] sm:leading-10 md:leading-6 text-slate-500">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex gap-4 ">
        <img
          src={Game}
          alt=""
          className="sm:w-[160px] md:w-[100px] md:h-[150px] xs:w-[100px] w-[80px]"
        />
        <div>
          <p className="text-xl sm:text-6xl md:text-3xl xs:text-3xl sm:font-bold sm:mb-4 text-slate-300">
            03
          </p>
          <p className="font-bold text-[12px] sm:text-[24px] md:text-[14px] xs:text-[16px] md:font-inter-ExtraBold ">
            {" "}
            The Growth of Gaming
          </p>
          <p className="w-[100%]  text-[10px] sm:text-[18px] md:text-[12px] xs:text-[15px] sm:leading-10 md:leading-6 text-slate-500">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
