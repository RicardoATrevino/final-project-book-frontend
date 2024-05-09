import { useState } from "react";
import axios from "axios";
import AddToFavoritesButton from "./FavoritedItems";

function SearchAPI() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    axios
      .get(`http://localhost:3000/search.json?q=${query}`)
      .then((response) => {
        setSearchResult(response.data);
        console.log(response.data);
      })

      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search query"
        className="text-black"
      />
      <button onClick={handleSearch}>Search</button>

      {searchResult.map((book) => (
        <div key={book.key}>
          <p>
            {book.title} - by: {book.author_name}
          </p>
          <p>Published: {book.publish_year}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchAPI;
