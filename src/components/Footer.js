import React from "react";

const Footer = () => {
  return (
    <>
      <div className="text-[10px] sm:text-[16px] xs:text-[14px] px-2 text-offWhite py-4 bg-veryDarkBlue text-center text-darkGrayishBlue">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/mesfint"
            className="text-orange"
          >
            Mesfin T.
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
