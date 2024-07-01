import React from "react";

function TestimonialCard({ imgSrc, name, text, className }) {
  return (
    <div
      className={
        "p-4 space-y-4 w-80 h-72 shadow-md flex flex-col justify-center items-center border-solid border-2  border-[#e5e7e8] rounded-md " +
        className
      }
    >
      <div className="flex gap-5  items-center w-full">
        <div className=" w-[64px] h-[64px] rounded-full">
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/home/testimonialReviews/${imgSrc}`
            }
            className="rounded-full img-fluid shadow-1-strong"
            alt="sample image"
          />
        </div>
        <h3 className="text-lg font-bold">{name}</h3>
      </div>

      <p className="text-left">
        <span className="font-bold text-xl">"</span> {text}
        <span className="font-bold text-xl">"</span>
      </p>
    </div>
  );
}

export default TestimonialCard;
