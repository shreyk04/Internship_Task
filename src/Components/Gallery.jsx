import React, { useEffect } from "react";
import PageHeader from "./PageHeader";
import SectionHeader from "./SectionHeader";
import GalleryCards from "./GalleryCards";

function Gallery() {
  return (
    <div className="w-full flex flex-col justify-center items-center  gradient">
      <PageHeader text={"Gallery"} imgSrc={"Suvidha-event.jpg"} />
      <SectionHeader
        section={"Our Gallery"}
        sectionText={"Moments of Impact: Capturing the Journey of Our NGO"}
      />
      <div className="flex mx-10  justify-center items-center p-8">
        <GalleryCards />
      </div>
    </div>
  );
}

export default Gallery;
