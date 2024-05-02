/* eslint-disable react/prop-types */
export default function BooksIndex(props) {
  return (
    <div>
      <h1>All Books</h1>
      {props.books.map((books) => (
        <div key={books.id}>
          <h2> {books.title}</h2>
          <p>Author: {books.author}</p>
        </div>
      ))}
    </div>
  );
}
