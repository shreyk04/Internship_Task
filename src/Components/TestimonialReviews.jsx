import React, { useState } from "react";

import TestimonialCard from "./TestimonialCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import SectionHeader from "./SectionHeader";

const reviews = [
  {
    imgSrc: "2.jpg",
    name: "Samrudhi Nawale",
    text: "The experience here at Suvidha Foundation was wonderful. I learnt a lot. It was worth it."
  },
  {
    imgSrc: "6.jpg",

    name: "Ananya Tripathi",
    text: "Regular meetings really helped in systematic learning as well as working."
  },
  {
    imgSrc: "8.jpg",

    name: "Sanjana Tunk",
    text: "It was entirely a new experience and I gained a lot from it."
  },
  {
    imgSrc: "12.jpg",

    name: "Manya Sahni",
    text: "Thank you for giving the opportunity. Did this internship which was a bit different and unique from others."
  },
  {
    imgSrc: "1.jpg",

    name: "Divina Malfoy",
    text: "It was great experience to work in Suvidha Foundation, team work is very good. They conduct daily meetings to guide how to work, which they make our work more easy. So, overall it's amazing organization to learn."
  },
  {
    imgSrc: "5.jpg",

    name: "Aheri Ghosh",
    text: "I'm glad to have worked with the Suvidha Foundation because I am passionate about their message and what they do."
  },
  {
    imgSrc: "9.jpg",

    name: "Lekhashree H J",
    text: "It was a great experience working with your NGO. I learned to connect with the society and helped the underprivileged section of the society."
  },
  {
    imgSrc: "11.jpg",
    name: "Khushi Jain",
    text: "Had great learning. Fruitful experience."
  }
];
function TestimonialReviews() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      <SectionHeader
        section={"Testimonial"}
        sectionText={"What people are talking about our charity activities"}
      />
      <div className="w-full h-full relative  my-16  ">
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          onChange={(item) => setSelectedItem(item)}
          selectedItem={selectedItem}
          centerMode={window.innerWidth > 1000}
          centerSlidePercentage={window.innerWidth < 500 ? 10 : 37}
          className="h-full w-full px-[50px]"
          renderArrowNext={(e, hasNext) => {
            return hasNext ? (
              <i
                className="ri-arrow-right-s-line cursor-pointer absolute top-[50%] right-0 text-4xl z-50 rounded-full bg-gradient-to-r from-[#fdfbfb] to-[#c2c5c7]"
                onClick={() => e()}
              ></i>
            ) : null;
          }}
          renderArrowPrev={(e, hasPrev) =>
            hasPrev ? (
              <i
                className="ri-arrow-left-s-line cursor-pointer absolute top-[50%] left-0 text-4xl z-50 rounded-full bg-gradient-to-r from-[#fdfbfb] to-[#c2c5c7]"
                onClick={() => e()}
              ></i>
            ) : null
          }
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full h-full flex justify-center items-center"
            >
              <TestimonialCard
                name={review.name}
                imgSrc={review.imgSrc}
                text={review.text}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default TestimonialReviews;
