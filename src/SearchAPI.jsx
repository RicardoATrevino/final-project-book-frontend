import React, { useState } from "react";
import axios from "axios";

function SearchAPI() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");

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

      {/* Render search results */}
      <div>{searchResult}</div>
    </div>
  );
}

export default SearchAPI;
