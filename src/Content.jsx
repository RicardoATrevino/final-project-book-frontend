import BooksIndex from "./BooksIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
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
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/books" element={<BooksIndex books={books} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
