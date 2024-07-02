import React from "react";
import { NavLink } from "react-router-dom";

function PageHeader({ text, imgSrc }) {
  return (
    <div className="w-full  relative">
      <div className="w-full ">
        <img
          src={process.env.PUBLIC_URL + `/images/${imgSrc}`}
          alt=""
          className="w-full h-[60vh] object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold ">
          <span className="text-yellow-500 font-semibold">{text}</span>{" "}
        </h1>
        <p className="text-2xl">
          <NavLink to="/">Home</NavLink> /{" "}
          <span className="text-yellow-500">{text}</span>
        </p>
      </div>
    </div>
  );
}

export default PageHeader;
