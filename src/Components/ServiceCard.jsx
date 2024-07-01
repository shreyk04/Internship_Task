import React from "react";

function ServiceCard({ title, description, imgSrc, color }) {
  return (
    <div
      className={`flex flex-col md:flex-row md:w-96  w-full border-2 p-2 items-center rounded-md shadow-lg`}
      style={{ borderColor: color }}
    >
      <div className="w-[30%] ">
        <img
          src={process.env.PUBLIC_URL + `/images/home/services/${imgSrc}`}
          alt=""
          className="w-[80%] "
        />
      </div>
      <div className="flex flex-col w-[70%] text-left">
        <h1
          className="font-bold text-xl capitalize my-3"
          style={{ color: color }}
        >
          {title}
        </h1>
        <p className="">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
