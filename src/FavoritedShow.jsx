/* eslint-disable react/prop-types */

export default function FavoritedShow(props) {
  return (
    <div>
      <h1>Welcome to Your Favorites Page!</h1>
      {props.Favorited.map((Favorited) => (
        <div key={Favorited.id}>
          <h3>{Favorited.book}</h3>
        </div>
      ))}
    </div>
  );
}
