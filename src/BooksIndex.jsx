/* eslint-disable react/prop-types */
// search function here
// https://openlibrary.org/dev/docs/api/search?v=1 using this api bc seems simple enough
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import AddToFavoritesButton from "./FavoritedItems";
export default function BooksIndex(props) {
  console.log("props be: ", props);
  const [searchFilter, setSearchFilter] = useState("");

  console.log();
  return (
    <div className="pt-5">
      Search:{" "}
      <input
        className="text-black "
        type="text"
        list="title"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      <datalist id="titles">
        {props.books.map((books) => (
          <option key="books.id">{books.title}</option>
        ))}
      </datalist>
      <div className=" space-y-5 pt-5 font-serif">
        {searchFilter && (
          <>
            {props.books
              .filter((books) => books.title.toLowerCase().includes(searchFilter.toLowerCase()))
              .map((books) => (
                <div key={books.id} className="text-grey">
                  {" "}
                  <button className="btn btn-primary " onClick={() => props.onShowBook(books)}>
                    {books.title} -
                  </button>
                  - by: {books.author} ||
                  <AddToFavoritesButton itemId={books.id} />
                </div>
              ))}
          </>
        )}

        <h1>All Our Books!</h1>
        {props.books.map((books) => (
          <div key={books.id}>
            <h2>
              {books.title} |
              <AddToFavoritesButton itemId={books.id} />
            </h2>
            <p>Author: {books.author}</p>
            <p>Genre: {books.genre}</p>
            <button className="text-left" onClick={() => props.onShowBook(books)}>
              |More Info|
            </button>
            {/*---NO ROUTE MATCHED ERROR <Link to={`${books.id}.json`}>More info </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}
