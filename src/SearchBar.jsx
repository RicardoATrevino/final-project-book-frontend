/* eslint-disable react/prop-types */
import BooksIndex from "./BooksIndex";
import useState from "react";

export default function SearchBar(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      Search:{" "}
      <input
        className="text-black "
        type="text"
        list="titles"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      <datalist id="titles">
        {props.books.map((books) => (
          <option key="books.id">{books.title}</option>
        ))}
      </datalist>
      <div className=" space-y-5 pt-5 font-serif">
        {props.books
          .filter((books) => books.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((books) => (
            <div key={books.id} className="text-grey">
              {" "}
            </div>
          ))}
      </div>
    </div>
  );
}
