import React from "react";
import CardWithText from "./CardWithText";

function GalleryCards() {
  const cards = [
    {
      src: "Workshops.jpg",
      text: "Free Workshops",
      link: "https://drive.google.com/drive/u/1/folders/11DrNvVoYiIlmKUDW2AvsiklJTuIDL3Gk"
    },
    {
      src: "BooksDistribution.jpg",
      text: "Book Distribution",
      link: "https://drive.google.com/drive/u/1/folders/1FKG4shImI-9JRavKIP-0b-Tp9Hd205VI"
    },
    {
      src: "OnlineEvents.jpg",
      text: "Online Events",
      link: "https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms"
    },
    {
      src: "ClothsDistribution.jpg",
      text: "Cloths Distribution",
      link: "https://drive.google.com/drive/u/1/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK"
    },
    {
      src: "TreePlantation.jpg",
      text: "Tree Plantation",
      link: "https://drive.google.com/drive/u/1/folders/1V5Owzjc00GT_U2Mw_bdOMbiCYSxmScSw"
    },
    {
      src: "FreeEducation.jpg",
      text: "Free Education",
      link: "https://drive.google.com/drive/u/1/folders/1ucG-Ltm_6fAwZ-1ta4-nHhRdKpu-3EAN"
    },
    {
      src: "Women'sDay.jpg",
      text: "Women's Day",
      link: "https://drive.google.com/drive/u/1/folders/1_V-acFibBsweHcM-R-P__4EQWpauB6dK"
    },
    {
      src: "FoodDistribution.jpg",
      text: "Food Distribution",
      link: "https://drive.google.com/drive/u/1/folders/1AfCK5kJqf9_N_JGd8wqUhNesS8k1tVmw"
    },
    {
      src: "SuvidhaEvents.jpg",
      text: "Suvidha Events",
      link: "https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms"
    },
    {
      src: "SanitaryPad.jpg",
      text: "Empowering Women",
      link: "https://drive.google.com/drive/u/1/folders/1tMkME479AhVFQ5pUZag3-YPgNWhIn7Rl"
    },
    {
      src: "AnimalFeeding.jpg",
      text: "Animal Feeding",
      link: "https://drive.google.com/drive/u/1/folders/1xr7jhBYaap-tZ2puU5HiF6ccitJtBfaB"
    }
  ];
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {cards.map((card, index) => (
        <CardWithText
          key={index}
          src={process.env.PUBLIC_URL + `/images/gallery/${card.src}`}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default GalleryCards;
