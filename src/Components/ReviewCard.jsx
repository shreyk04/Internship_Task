import React from "react";

function ReviewCard({ text, name, imgSrc }) {
  return (
    <div className="flex flex-col w-80 bg-red-300 text-left p-4">
      <div>
        <p>{text}</p>
      </div>
      <div className="h-[0.2px] bg-black my-4"></div>
      <div className="flex justify-around">
        <h1>{name}</h1>
        <div className=" w-32 h-32 rounded-full ">
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/home/testimonialReviews/${imgSrc}`
            }
            className="rounded-full img-fluid shadow-1-strong"
            alt="smaple image"
          />
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
