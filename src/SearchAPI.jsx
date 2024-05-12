import { useState } from "react";
import axios from "axios";
import FavoritedAPI from "./FavoritedAPI";

function SearchAPI() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    axios
      .get(`/search.json?q=${query}`)
      .then((response) => {
        setSearchResult(response.data);
        console.log(response.data);
      })

      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className="p-5">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search query"
        className="text-black"
      />

      <button className="pl-2 rounded border border-gray-300 p-2 hover:bg-gray-100" onClick={handleSearch}>
        {" "}
        Search
      </button>

      {searchResult.map((book) => (
        <div key={book.key}>
          <p>
            {book.title} - by: {book.author_name}
          </p>
          <p>
            Published: {book.first_publish_year} <FavoritedAPI book={book}> Favorite</FavoritedAPI>
          </p>
        </div>
      ))}
    </div>
  );
}

export default SearchAPI;
