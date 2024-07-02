import React from "react";
import SectionHeader from "./SectionHeader";

function GoogleMap() {
  return (
    <div
      className="flex flex-col items-center justify-center my-10"
      id="locate-us"
    >
      <SectionHeader>Locate Us</SectionHeader>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475894.4438988625!2d78.60405736882831!3d21.27442260000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c3000361c8a5%3A0x193a047226dbd571!2sJAI%20BHOLE%20NAGAR!5e0!3m2!1sen!2sin!4v1719895656351!5m2!1sen!2sin"
        width="80%"
        height="450"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="rounded-md border shadow-lg"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
