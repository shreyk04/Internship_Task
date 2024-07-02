import React from "react";
import EventCard from "./EventCard";
import SectionHeader from "./SectionHeader";
import PageHeader from "./PageHeader";

function EventsPage() {
  const cards = [
    {
      src: "Tree-Plantation.jpg",
      text: "Tree Plantation",
      description:
        "Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet."
    },
    {
      src: "Fundraising.jpg",
      text: "Fundraising Events",
      description:
        "Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community."
    },
    {
      src: "Cloths-Distribution.jpg",
      text: "Cloths Distribution",
      description:
        "Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event."
    },
    {
      src: "Women's-Day.jpg",
      text: "Women's Day",
      description:
        "Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions."
    },
    {
      src: "Food-Donation.jpg",
      text: "Food Donation Initiatives by Our NGO",
      description:
        "Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals."
    },
    {
      src: "Animal-Feeding.jpg",
      text: "Ensuring Happy and Healthy Animals through Feeding Programs",
      description:
        "Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event."
    },

    {
      src: "Sanitary-Pads.jpg",
      text: "Sanitary Pads Distribution",
      description:
        "Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene."
    },

    {
      src: "Free-Workshop.jpg",
      text: "Free Workshops",
      description:
        "Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops."
    }
  ];
  return (
    <div className="flex flex-col justify-center w-full ">
      <PageHeader text={"Events"} imgSrc={"Suvidha-event.jpg"} />
      <SectionHeader
        section={"Events"}
        sectionText={"Our Charity Events: Celebrating Our Impact Together"}
      />
      <div className="w-full  flex flex-wrap gap-20 justify-center p-10">
        {cards.map((card) => (
          <EventCard
            src={card.src}
            text={card.text}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
