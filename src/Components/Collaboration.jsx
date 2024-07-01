import React from "react";
import SectionHeader from "./SectionHeader";
const images = ["collab-1.jpg", "collab-2.jpg", "collab-3.jpg"];

function Collaboration() {
  return (
    <>
      <SectionHeader
        sectionText={
          "Empowering Change Together: Our Collaborative Initiatives"
        }
      />

      <div className="w-full  flex p-4">
        <div className="flex w-full flex-col gap-3 md:flex-row justify-center items-center  md:justify-around ">
          {images.map((imgSrc, index) => (
            <img
              src={process.env.PUBLIC_URL + `/images/home/${imgSrc}`}
              alt=""
              className="w-[200px] h-[200px] shadow-lg  object-contain"
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Collaboration;
