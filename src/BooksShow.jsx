/* eslint-disable react/prop-types */
export function BooksShow(props) {
  return (
    <div className="text-black">
      <h1>Book Description </h1>
      <p>{props.books.description}</p>
    </div>
  );
}
