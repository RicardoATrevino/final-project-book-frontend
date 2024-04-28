export function PhotosIndex(props) {
  return (
    <div>
      <h1>All Books</h1>
      {props.books.map((book) => (
        <div key={book.id}>
          <h2>{book.name}</h2>
          <img src={book.url} />
          <p>Author: {book.width}</p>
          <button onClick={() => props.onShowBook(book)}>More info</button>
        </div>
      ))}
    </div>
  );
}
