import React from "react";
import ServiceCard from "./ServiceCard";
import SectionHeader from "./SectionHeader";

function Services() {
  const services = [
    {
      color: "#f78901",
      imgSrc: "diet.png",
      title: "Healthy Food",
      description:
        "By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need."
    },
    {
      color: "#9000bf",

      imgSrc: "care.png",
      title: "Social Awareness",
      description:
        "We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases."
    },
    {
      color: "#1bb602",

      imgSrc: "plantation.png",
      title: "Tree Plantation",
      description:
        "Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations."
    },
    {
      color: "#fa5d95",

      imgSrc: "healthcare.png",
      title: "Health Care",
      description:
        "We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need."
    },
    {
      color: "#826e07",

      imgSrc: "education.png",
      title: "Primary Education",
      description:
        "By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future."
    },
    {
      color: "#350387",

      imgSrc: "home.png",
      title: "Social Care",
      description:
        "Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals "
    }
  ];

  return (
    <>
      <SectionHeader
        section={"What we do"}
        sectionText={"Causes for a Sustainable Future"}
      />
      <div className="flex gap-8 flex-wrap  justify-center p-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imgSrc={service.imgSrc}
            color={service.color}
          />
        ))}
      </div>
    </>
  );
}

export default Services;
