import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
// import BooksIndex from "./BooksIndex";
export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        {/* <Route path="/books/new" element={<BooksIndex />} /> */}
      </Routes>
      {/* 
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <h2>{currentRecipe.title}</h2>
        <p>Chef: {currentRecipe.chef}</p>
        <p>Ingredients: {currentRecipe.ingredients}</p>
        <p>Directions: {currentRecipe.directions}</p>
      </Modal> */}
    </div>
  );
}
