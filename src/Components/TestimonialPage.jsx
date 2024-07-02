import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Carousel } from "react-responsive-carousel";
import CustomButton from "./CustomButton";

function TestimonialPage() {
  const images = [
    "3.jpg",
    "5.jpg",
    "15.jpg",
    "28.jpg",
    "84.jpg",
    "89.jpg",
    "92.jpg",
    "94.jpg",
    "104.jpg",
    "106.jpg"
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  const Image = ({ src }) => {
    return (
      <img
        className="object-contain w-[auto] h-[70vh] max-h-[800px] rounded-lg overflow-hidden"
        src={process.env.PUBLIC_URL + "/images/home/" + src}
        alt="carousel"
      />
    );
  };

  return (
    <div className="bg-slate-50 p-4">
      <SectionHeader
        section={"Testimonial"}
        sectionText={"What people are talking about our charity activities"}
      />
      <div className="w-full relative  my-16   flex justify-center items-center ">
        <Carousel
          showThumbs={false}
          onChange={(item) => setSelectedItem(item)}
          autoPlay={false}
          selectedItem={selectedItem}
          showStatus={false}
          centerMode={window.innerWidth > 1000}
          centerSlidePercentage={window.innerWidth < 500 ? 10 : 33}
          className=" w-full"
          renderArrowNext={(e, hasNext) => {
            return hasNext ? (
              <i
                className="ri-arrow-right-s-line cursor-pointer absolute top-[50%] right-10 text-4xl z-50 rounded-full bg-gradient-to-r from-[#fdfbfb] to-[#c2c5c7]"
                onClick={() => e()}
              ></i>
            ) : null;
          }}
          renderArrowPrev={(e, hasPrev) =>
            hasPrev ? (
              <i
                className="ri-arrow-left-s-line cursor-pointer absolute top-[50%] left-10 text-4xl z-50 rounded-full bg-gradient-to-r from-[#fdfbfb] to-[#c2c5c7]"
                onClick={() => e()}
              ></i>
            ) : null
          }
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center   w-full p-2 "
            >
              <Image src={image} />
            </div>
          ))}
        </Carousel>
      </div>
      <a href="https://drive.google.com/drive/u/1/folders/1lCc5YL2t6eFN3nlk9mgseCXCg7kOdty8">
        <CustomButton text={"View All"} link={""} />
      </a>
    </div>
  );
}

export default TestimonialPage;
