/* eslint-disable react/prop-types */
import axios from "axios";

function AddToFavoritesButton({ itemId }) {
  console.log(itemId);
  const addToFavorites = () => {
    axios
      .post("http://localhost:3000/favorite.json", { book_id: itemId })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
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
