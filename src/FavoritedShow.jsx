/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";

export function FavoritedShow() {
  const [favoriteds, setFavorited] = useState([]);

  const handleShowFavoriteds = () => {
    axios.get("/favorited.json").then((response) => {
      console.log("handleShowFavoriteds", response);
      setFavorited(response.data);
      console.log("log 1:", favoriteds, response.data);
    });
  };

  useEffect(handleShowFavoriteds, []);

  return (
    <div>
      <h1 className="pt-4 pb-3 underline">Your Favorited Books Below</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {favoriteds.map((favoritedItem) => (
          <div className="rounded shadow-lg mb-4 hover:shadow-2xl" key={favoritedItem.id}>
            <h3 className="pt-1">{favoritedItem.book.title}</h3>
            <h4 className="">by: {favoritedItem.book.author_name}</h4>
            <h4 className="pb-4"> Published: {favoritedItem.book.first_publish_year}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
