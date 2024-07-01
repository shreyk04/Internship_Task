import React from "react";

function FooterLink({ text, link }) {
  return (
    <div className="text-base">
      <a href={link} className="menu__link">
        {text}
      </a>
    </div>
  );
}

export default FooterLink;
