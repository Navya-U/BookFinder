import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";

function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
}

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setModal(!modal);

  const handleBookClick = (bookKey) => {
    const workId = bookKey.replace("/works/", "");

    navigate(`/book/${workId}`);
  };

  const fetchBooks = async (searchTerm, type) => {
    if (!searchTerm) return;

    try {
      let url;
      if (type === "genre") {
        url = `https://openlibrary.org/subjects/${searchTerm.toLowerCase()}.json?limit=70`;
      } else {
        const queryParam = type === "title" ? "title" : "author";
        url = `https://openlibrary.org/search.json?${queryParam}=${searchTerm}&limit=70`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (type === "genre") {
        setBooks(data.works || []);
      } else {
        setBooks(data.docs || []);
      }
    } catch (error) {
      console.error("Failed to fetch books:", error);
      setBooks([]);
    }
  };

  const debouncedFetchBooks = debounce(fetchBooks, 300);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    if (inputValue) {
      debouncedFetchBooks(inputValue, searchType);
    } else {
      setBooks([]);
    }
  };

  const handleTypeChange = (e) => {
    setSearchType(e.target.value);
    if (query) {
      debouncedFetchBooks(query, e.target.value);
    }
  };

  useEffect(() => {
    if (books.length > 0) {
      setModal(true);
    }
  }, [books]);

  return (
    <div
      style={{
        display: "inline-flex",
        marginTop: "10px",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <select
        className="thq-button-outline hero-button1"
        value={searchType}
        onChange={handleTypeChange}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="genre">Genre</option>
      </select>

      <input
        className="thq-button-outline hero-button1"
        type="text"
        placeholder="search"
        value={query}
        onChange={handleInputChange}
      />

      <Modal
        fullscreen={true}
        fade={true}
        backdrop={true}
        centered={true}
        scrollable={true}
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Search Results</ModalHeader>
        <ModalBody>
          <div className="books-list">
            {books.length > 0
              ? books.map((book) => (
                  <span
                    key={book.key}
                    className="book-item"
                    onClick={() => handleBookClick(book.key)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={
                        searchType == "genre"
                          ? book.cover_id
                            ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                            : "default_cover.png"
                          : book.cover_i
                          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                          : "default_cover.png"
                      }
                      alt={book.title}
                    />
                    <h3>{book.title}</h3>
                    <p>by {book.author_name}</p>
                  </span>
                ))
              : query && <p> No books found.</p>}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Search;
