/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";

import AddToFavoritesButton from "./FavoritedItems";
export default function BooksIndex(props) {
  console.log("props be: ", props);
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      Search:{" "}
      <input
        className="text-black "
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      <div className=" space-y-5 pt-5 font-serif">
        <h1>All Our Books!</h1>
        {props.books.map((books) => (
          <div key={books.id}>
            <h2>
              {" "}
              {books.title} <AddToFavoritesButton itemId={books.id} />
            </h2>
            <p>Author: {books.author}</p>
            <p>Genre: {books.genre}</p>
            <button className="text-left" onClick={() => props.onShowBooks(books)}>
              |More Info|
            </button>
            <Link to={`/books/${books.id}.json`}>More info on separate page</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
