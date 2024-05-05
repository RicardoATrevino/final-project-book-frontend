/* eslint-disable react/prop-types */

export default function BooksIndex(props) {
  return (
    <div className=" space-y-5 pt-5 font-serif">
      <h1>All Our Books!</h1>
      {props.books.map((books) => (
        <div key={books.id}>
          <h2> {books.title}</h2>
          <p>Author: {books.author}</p>
          <p>Genre: {books.genre}</p>
          <button className="text-left" onClick={() => props.onShowBooks(books)}>
            |More Info|
          </button>
          <p></p>
        </div>
      ))}
    </div>
  );
}
