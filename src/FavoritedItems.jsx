/* eslint-disable react/prop-types */
import axios from "axios";

function AddToFavoritesButton({ itemId }) {
  console.log(itemId);
  const addToFavorites = () => {
    axios
      .post("http://localhost:3000/favorited.json", { book_id: itemId })
      .then((response) => {
        // Handle success (e.g., show notification)
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error (e.g., show error message)
        console.error("Error adding item to favorites:", error);
      });
  };

  return (
    <button onClick={addToFavorites}>
      {" "}
      <div className=""> | Favorite</div>
    </button>
  );
}

export default AddToFavoritesButton;
