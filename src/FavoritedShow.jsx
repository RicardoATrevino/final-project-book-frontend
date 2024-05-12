/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";

export function FavoritedShow() {
  const [favoriteds, setFavorited] = useState([]);

  const handleShowFavoriteds = () => {
    axios.get("http://localhost:3000/favorited.json").then((response) => {
      console.log("handleShowFavoriteds", response);
      setFavorited(response.data);
      console.log("log 1:", favoriteds, response.data);
    });
  };

  useEffect(handleShowFavoriteds, []);

  return (
    <div>
      <h1 className="pt-4 pb-3 underline">Your Favorited Books Below</h1>
      {favoriteds.map((favoritedItem) => (
        <div key={favoritedItem.id}>
          <h3 className="pt-1">{favoritedItem.book.title}</h3>
          <h4 className="">by: {favoritedItem.book.author_name}</h4>
          <h4 className="pb-4"> Published: {favoritedItem.book.first_publish_year}</h4>
        </div>
      ))}
    </div>
  );
}
