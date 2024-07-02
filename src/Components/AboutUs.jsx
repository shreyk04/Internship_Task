import React from "react";

function AboutUs() {
  return (
    <div className="w-full p-4 ">
      <div className="w-full flex gap-8">
        <div className="w-[40%] bg-red-300 my-auto">
          <img src={process.env.PUBLIC_URL + `/images/home/about.jpg`} alt="" />
        </div>
        <div className="w-[60%] flex flex-col gap-5   ">
          <div className=" p-2">
            <h1 className="text-2xl font-semibold my-2 text-red-600">
              About Us
            </h1>
            <p className="text-xl text-left text-slate-700 ">
              Suvidha Mahila Mandal is a non-profit organization working to
              impart education among the financially challenged sections to help
              them realize parity in education and strength of little minds in
              building a promising future. The organization has provisions of
              student internships, student mentorship and the scope to
              volunteer. Through these programmes, the organization aims to
              achieve the vision of imparting innovative education that stays
              with the students forever and equip them for the unforeseen
              future.
            </p>
          </div>
          <div className=" p-2">
            <h1 className="text-2xl font-semibold my-4 text-red-600">
              Mission
            </h1>
            <p className="text-xl text-left text-slate-700 ">
              To Inspire Students, help them Innovate and let them Integrate to
              build the next generation humankind. To Run Food Donation And
              Awareness Campaign In Rural Region.
            </p>
          </div>
          <div className=" p-2">
            <h1 className="text-2xl font-semibold my-4 text-red-600">Vision</h1>
            <p className="text-xl text-left text-slate-700 ">
              To build Next Generation Entrepreneur, by providing them a
              Skill-Based Education. To Provide Internship, Training And
              Workshops and Quality Education All Over The World..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
