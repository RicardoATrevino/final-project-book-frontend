import BooksIndex from "./BooksIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./NotFound";

export function Content() {
  const [books, setBooks] = useState([]);
  const handleIndexBooks = () => {
    console.log("handleIndexBooks");
    axios.get("http://localhost:3000/books.json").then((response) => {
      console.log(response.data);
      setBooks(response.data);
    });
  };

  useEffect(handleIndexBooks, []);
  return (
    <div className="text-center space-y-5 font-serif">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="py-5">Welcome to The Book website</h1>
            </div>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/books" element={<BooksIndex books={books} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <nav>
        <Link to={"/books"} className="BooksLink">
          | Books |
        </Link>
      </nav>
    </div>
  );
}
