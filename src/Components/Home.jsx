import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TeamProfiles from "./TeamProfiles";
import ApplyHere from "./ApplyHere";
import TestimonialReviews from "./TestimonialReviews";
import StatsSection from "./StatsSection";
import Collaboration from "./Collaboration";
import Services from "./Services";
import CustomButton from "./CustomButton";
import { NavLink } from "react-router-dom";
import Popup from "./Popup";
import Events from "./Events";
import TestimonialPage from "./TestimonialPage";
import AboutUs from "./AboutUs";

const images = ["Suvidha-1.jpg", "Suvidha-4.jpg", "Suvidha-3.jpg"];

const headings = [
  "Bringing Smiles to Millions",
  "77th Independence Day Celebrations",
  "Get Your Donations Tax Exempted"
];

const Image = ({ src, alt }) => {
  return (
    <div className="relative">
      <img
        className="h-[60vh] lg:h-[90vh] w-full object-cover"
        src={process.env.PUBLIC_URL + "/images/" + src}
        alt={alt}
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
    </div>
  );
};

function Home() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => {
    setShowPopup(true);
    console.log("opening popup");
  };

  return (
    <div>
      <div className="relative">
        <Carousel
          autoPlay={true}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          onChange={(item) => setSelectedItem(item)}
          selectedItem={selectedItem}
          renderArrowNext={(e, hasNext) => {
            return hasNext ? (
              <i
                className="ri-arrow-right-s-line cursor-pointer absolute top-[80%] -translate-y-[50%] md:top-[65%] right-10 text-4xl z-50 rounded-md bg-gradient-to-r from-[#fdfbfb7a] to-[#c2c5c7b5] hover:backdrop-blur-sm transition-all"
                onClick={() => e()}
              ></i>
            ) : null;
          }}
          renderArrowPrev={(e, hasPrev) =>
            hasPrev ? (
              <i
                className="ri-arrow-left-s-line cursor-pointer absolute top-[80%] -translate-y-[50%] md:top-[65%] left-10 text-4xl z-50 rounded-md bg-gradient-to-r from-[#fdfbfb7a] to-[#c2c5c7b5] hover:backdrop-blur-sm transition-all"
                onClick={() => e()}
              ></i>
            ) : null
          }
        >
          {images.map((src, index) => (
            <div key={index} className="relative">
              <Image src={src} alt={`Slide ${index + 1}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="text-3xl lg:text-7xl text-center capitalize font-semibold drop-shadow-sm p-6 rounded-md text-slate-100 opacity-80 text-shadow shadow-md m-4">
                  {headings[index]}
                </h1>
                <div className="flex gap-4 mt-20 md:mt-4">
                  <NavLink to="/helpus">
                    <CustomButton text={"Donate Now"} />
                  </NavLink>
                  <div onClick={handleOpen}>
                    <CustomButton text={"Watch Video"} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {showPopup && <Popup setShowPopup={setShowPopup} />}
      <AboutUs />
      <ApplyHere />
      <Services />
      <StatsSection />
      <Events />
      <TestimonialPage />
      <TeamProfiles />
      <Collaboration />
      <TestimonialReviews />
    </div>
  );
}

export default Home;
