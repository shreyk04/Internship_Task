import React from "react";

function EventCard({ src, text, description }) {
  return (
    <div className="max-w-md  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-2 duration-300">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={process.env.PUBLIC_URL + `/images/events/${src}`}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {text}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
          {description}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
