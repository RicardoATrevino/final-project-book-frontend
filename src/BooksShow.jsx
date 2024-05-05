/* eslint-disable react/prop-types */
export function BooksShow(props) {
  return (
    <div>
      <h1>Book Description </h1>
      <p>{props.books.description}</p>
    </div>
  );
}
