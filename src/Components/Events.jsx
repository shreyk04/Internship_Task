import React from "react";
import SectionHeader from "./SectionHeader";
import EventCard from "./EventCard";

function Events() {
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
    }
  ];
  return (
    <div className="flex flex-col justify-center w-full p-4">
      <SectionHeader
        section={"Suvidha Events"}
        sectionText={"Our Charity Events: Celebrating Our Impact Together"}
      />
      <div className="w-full  flex flex-wrap gap-20 justify-center px-10">
        {cards.map((card, index) => (
          <EventCard
            key={index}
            src={card.src}
            text={card.text}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
