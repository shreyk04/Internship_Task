import React from "react";
import SectionHeader from "./SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const profiles = [
  {
    name: "Shobha Motghare",
    position: "Secretary",
    imgSrc: "Shobha_Motghare.png",
    link: "https://www.linkedin.com/in/shobha-motghare-0a6a57238/"
  },
  {
    name: "Payal Badhe",
    position: "President",
    imgSrc: "Payal_Badhe.jpg",
    link: "https://www.linkedin.com/in/payal-badhe-531756aa/"
  },
  {
    name: "Bharti Shendre",
    position: "Treasurer",
    imgSrc: "Bharti_Shendre.jpg",
    link: "https://www.linkedin.com/in/bharti-shendre-6517b928a/"
  },
  {
    name: "Nilima Kalambe",
    position: "Advisor",
    imgSrc: "Nilima_Kalambe.jpg",
    link: "https://www.linkedin.com/in/nilima-kalambe-b275a1245/"
  }
];
const Profile = ({ imgSrc, name, position, link }) => {
  return (
    <div className="card md:w-72 p-8 w-full   rounded-md shadow-lg my-3 ">
      <div className=" w-full flex justify-center  relative group66">
        <img
          src={process.env.PUBLIC_URL + "/images/home/" + imgSrc}
          alt="img"
          className="rounded-full object-cover  w-52 h-52 profile-img"
        />
      </div>
      <p className="text-xl font-bold my-4 tracking-wider">{name}</p>
      <p className="my-3">{position}</p>
      <a href={link} target="_blank">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-2xl text-blue-800 cursor-pointer"
        />
      </a>
    </div>
  );
};
function TeamProfiles() {
  return (
    <>
      <SectionHeader
        section={"Meet Our Team"}
        sectionText={"Guys behind our charity activities"}
      />

      <div className="w-full flex  flex-col lg:flex-row p-10 ">
        <div className="w-full mx-auto flex md:flex-row md:justify-around items-center  flex-col  ">
          {profiles.map((profile, index) => (
            <Profile
              key={index}
              imgSrc={profile.imgSrc}
              name={profile.name}
              position={profile.position}
              link={profile.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TeamProfiles;
