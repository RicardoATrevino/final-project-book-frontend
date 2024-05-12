/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function FadingPopUp({ message }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (message) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  }, [message]);

  return (
    <div
      className={`fixed bottom-10 right-10 p-4 bg-blue-800 text-white rounded-md transition-opacity ${
        showPopup ? "opacity-100" : "opacity-0"
      }`}
      style={{ maxWidth: "400px" }}
    >
      {message}
    </div>
  );
}

export default FadingPopUp;
