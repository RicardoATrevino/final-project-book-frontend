import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1 className="pt-4"></h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="pb-2" onSubmit={handleSubmit}>
        <div className="pb-2">
          Name: <input className="text-black" name="name" type="text" />
        </div>
        <div className="pb-2">
          Email: <input className="text-black" name="email" type="email" />
        </div>
        <div className="pb-2">
          Password: <input className="text-black" name="password" type="password" />
        </div>
        <div className="pb-2">
          Password confirmation: <input className="text-black" name="password_confirmation" type="password" />
        </div>
        <button className="pt-3 hover:bg-white hover:text-black" type="submit">
          Sign-Up
        </button>
      </form>
    </div>
  );
}
