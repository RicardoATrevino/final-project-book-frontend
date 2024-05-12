/* eslint-disable react/prop-types */
import axios from "axios";
import FadingPopUp from "./FadingPopUp";
import { useState } from "react";

function AddToFavoritesButton({ book }) {
  const [popupMessage, setPopupMessage] = useState("");

  console.log(book);
  const addToFavorites = () => {
    axios
      .post("/favorite.json", {
        title: book.title,
        author_name: book.author_name,
        first_publish_year: book.first_publish_year,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error adding item to favorites:", error);
      });
    setPopupMessage(book.title + " has been added to favorites!");
  };

  return (
    <div>
      <button onClick={addToFavorites}>
        {" "}
        <div className=""> | Favorite</div>
      </button>
      <FadingPopUp message={popupMessage} />{" "}
    </div>
  );
}

export default AddToFavoritesButton;
