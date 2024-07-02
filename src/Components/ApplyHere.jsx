import React from "react";
import CustomButton from "./CustomButton";

function ApplyHere() {
  return (
    <div className="relative w-full tracking-wide h-[100vh]">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white z-10 gap-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-4 lg:w-[60%] text-yellow-500 tracking-tighter">
          Apply For Internship and Mentorship Programs
        </h1>
        <h2 className="text-2xl text-center mb-4 lg:w-[50%]">
          Seize the opportunity to gain invaluable experience and jumpstart your
          career with an internship that propels you towards success.
        </h2>
        <p className="text-center mb-4 lg:w-[70%] ">
          The Suvidha Foundation Internship Program is a unique opportunity for
          students and recent graduates to gain experience and contribute to the
          work of Suvidha Foundation. Along with undertaking tasks related to
          their specific skills, we encourage interns to develop a reputable
          professional portfolio.
        </p>
        <a href="https://forms.gle/pD89BmSfZhioPFK99">
          <CustomButton text={"Apply Here"} />
        </a>
      </div>
      <div className="absolute inset-0">
        <img
          src={process.env.PUBLIC_URL + "/images/volunteer.jpg"}
          alt="Volunteer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
    </div>
  );
}

export default ApplyHere;
