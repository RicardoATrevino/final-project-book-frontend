/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";

export function FavoritedShow() {
  const [favoriteds, setFavorited] = useState([]);

  useEffect(() => {
    const fetchFavoritedItems = async () => {
      const token = localStorage.getItem("jwt");
    };
  });

  const handleShowFavoriteds = () => {
    axios
      .get("http://localhost:3000/favorited.json", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("handleShowFavoriteds", response);
        setFavorited(response.data);
        console.log("log 1:", favoriteds, response.data);
      });
  };

  useEffect(handleShowFavoriteds, []);
  return (
    <div>
      <h1>Welcome to Your Favorites Page!</h1>
      {favoriteds.map(
        (
          favoritedItem // Renamed the variable to avoid naming conflicts
        ) => (
          <div key={favoritedItem.id}>
            <h3 className="pt-1">Title:{favoritedItem.book.title}</h3>
            <h4 className="pb-4">by: {favoritedItem.book.author}</h4>
          </div>
        )
      )}
    </div>
  );
}
