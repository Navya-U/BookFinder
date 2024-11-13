import { useNavigate } from "react-router-dom";

const Book = ({ books }) => {
  const navigate = useNavigate();

  const handleBookClick = (bookKey) => {
    const workId = bookKey.replace("/works/", "");

    navigate(`/book/${workId}`);
  };

  return (
    <div className="books-list">
      {books.map((book) => (
        <span
          key={book.key}
          className="book-item"
          onClick={() => handleBookClick(book.key)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
            alt={book.title}
          />
          <h3 className="thq-heading-3">{book.title}</h3>
          <p className="thq-body-small">by {book.authors?.[0]?.name}</p>
        </span>
      ))}
    </div>
  );
};

export default Book;
