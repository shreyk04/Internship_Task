import React from "react";

const statsData = [
  { icon: "🏠", label: "Countries", value: "15+" },
  { icon: "🙌", label: "Volunteers", value: "3 L+" },
  { icon: "🎓", label: "Internship Goal", value: "1 Cr+" },
  { icon: "🌳", label: "Trees Planted", value: "54 L+" }
];

const StatsSection = () => {
  return (
    <section className="  text-white relative flex justify-center h-96">
      <div className="w-full ">
        <img
          src={process.env.PUBLIC_URL + "/images/home/facts.jpg"}
          alt=""
          className="h-96  w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Black overlay */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute inset-0 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-row lg:flex-col gap-4  items-center lg:w-64 w-80  bg-transparent border-2  text-slate-200 p-2 rounded-lg shadow-lg transform transition hover:scale-105"
            >
              <div className="text-2xl md:text-4xl mb-4">{stat.icon}</div>
              <div className="text-2xl md:text-4xl font-bold">{stat.value}</div>
              <div className="text-2xl md:text-3xl ">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
