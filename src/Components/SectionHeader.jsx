import React from "react";

function SectionHeader({ section, sectionText }) {
  return (
    <div className="my-16">
      <h1 className="text-2xl text-yellow-500 font-medium">{section}</h1>
      <h1 className="text-4xl font-semibold">{sectionText}</h1>
    </div>
  );
}

export default SectionHeader;
