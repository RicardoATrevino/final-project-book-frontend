import BooksIndex from "./BooksIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import NotFound from "./NotFound";
import { Modal } from "./Modal";
import { BooksShow } from "./BooksShow";
import { FavoritedShow } from "./FavoritedShow";

export function Content() {
  const [isBooksShowVisible, setIsBooksShowVisible] = useState(false);
  const [currentBook, setCurrentBook] = useState({});

  const handleShowBook = (book) => {
    console.log("handleShowBook", book);
    setIsBooksShowVisible(true);
    setCurrentBook(book);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsBooksShowVisible(false);
  };

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/favorited" element={<FavoritedShow />} />
        <Route
          path="/"
          element={
            <div>
              <h1 className="py-5">Welcome to The Book website</h1>
            </div>
          }
        />
        <Route
          path="/books"
          element={
            <div>
              <BooksIndex books={books} onShowBook={handleShowBook} />
            </div>
          }
        />
      </Routes>
      <nav>
        <Link to={"/books"} className="BooksLink">
          | Books |
        </Link>
        <Link to={"/favorited"}> |Your Favorites! |</Link>
      </nav>
      <Modal show={isBooksShowVisible} onClose={handleClose}>
        <BooksShow book={currentBook} />
      </Modal>
    </div>
  );
}
