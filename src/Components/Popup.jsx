import React from "react";

function Popup({ setShowPopup }) {
  const handleClose = () => {
    setShowPopup(false);
    console.log("closing popup");
  };
  return (
    <div
      className="w-full fixed inset-0 z-[999] bg-black bg-opacity-75 flex items-center justify-center p-3"
      onClick={handleClose}
    >
      <div className="relative bg-white p-2 rounded-md w-full max-w-4xl">
        <button
          onClick={() => setShowPopup(false)}
          className="h-8 w-8 md:w-10 md:h-10 absolute -top-3 -right-3  text-white rounded-full"
        >
          <img
            src={process.env.PUBLIC_URL + `/images/cross.png`}
            alt=""
            className="w-full h-full"
          />
        </button>
        <iframe
          className="video-player w-full "
          height="500"
          src="https://www.youtube.com/embed/DWRcNpR6Kdc"
          title="YouTube Video Player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Popup;
