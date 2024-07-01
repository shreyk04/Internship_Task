import React from "react";
import SocialLinks from "./SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // For Home and Email icons

import GoogleMap from "./GoogleMap";
import CustomButton from "./CustomButton";

const ContactUs = () => {
  return (
    <div className=" w-full lg:relative  gradient flex flex-col ">
      <div className="w-full  flex flex-col-reverse justify-center items-center ">
        <div className="w-full lg:w-[400px]  bg-white rounded-md flex gap-8 justify-center flex-col p-4 lg:absolute lg:top-[20%] lg:left-[70%] z-50 shadow-lg">
          <h1>Contact us</h1>
          <h2>We're here for you</h2>
          <div className="flex gap-4 justify-center">
            <FontAwesomeIcon icon={faPhone} />
            <p>+91 7020044091</p>
          </div>
          <div className="flex gap-4 justify-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@suvidhafoundationedutech.org</p>
          </div>
        </div>

        <div className="w-full  text-left relative p-14 shadow-lg bg-slate-200">
          <h1 className="text-7xl font-semibold text-slate-700">
            Get in touch
          </h1>
          <p className="text-2xl my-4">
            "Reach out today to join hands in making a difference together."
          </p>
          <a href="https://forms.gle/FMPZeH8KNodFFj2GA">
            <CustomButton text={"Send Message"} />
          </a>
          <SocialLinks />
        </div>
      </div>
      <GoogleMap />
    </div>
  );
};

export default ContactUs;
