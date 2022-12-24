import React from "react";

const Modal = ({ nav }) => {
  if (!nav) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm ">
      <div
        className={
          nav
            ? "fixed right-0 top-0 sm:w-[80%] h-full  bg-offWhite ease-in-out duration-500 md:hidden"
            : "fixed right-[-100%]"
        }
      >
        <ul className="p-4">
          <a href="#">
            <li className="py-2 px-2">Home</li>
          </a>
          <li className="py-2 px-2">New</li>
          <li className="py-2 px-2">Popular</li>
          <li className="py-2 px-2">Trending</li>
          <li className="py-2 px-2">Categories</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
