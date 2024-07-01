import React from "react";

function CustomButton({ text }) {
  return (
    <button className="button">
      <span className="button-content">{text} </span>
    </button>
  );
}

export default CustomButton;
