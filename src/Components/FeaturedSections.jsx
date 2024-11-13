import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const FeaturedSections = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [genreOneBooks, setGenreOneBooks] = useState([]);
  const [genreTwoBooks, setGenreTwoBooks] = useState([]);
  const [classicBooks, setClassicBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const booksPerPage = 6;
  const navigate = useNavigate();

  const handleBookClick = (bookKey) => {
    const workId = bookKey.replace("/works/", "");

    navigate(`/book/${workId}`);
  };

  const handleNext = () => {
    if (currentIndex + booksPerPage < 24) {
      setCurrentIndex((prevIndex) => prevIndex + booksPerPage);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - booksPerPage < 0) {
      setCurrentIndex(featuredBooks.length - booksPerPage);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - booksPerPage);
    }
  };

  useEffect(() => {
    fetchBooks("Best Sellers", setFeaturedBooks);
    fetchBooks("Fantasy", setGenreOneBooks);
    fetchBooks("Fiction", setGenreTwoBooks);
    fetchBooks("Literature", setClassicBooks);
  }, []);

  const fetchBooks = async (genre, setBooksState) => {
    let genreQuery = genre;
    if (genreQuery.length >= 2) {
      genreQuery = genreQuery.split(" ").join("_");
    }
    try {
      const response = await fetch(
        `https://openlibrary.org/subjects/${genreQuery.toLowerCase()}.json?limit=25`
      );
      const data = await response.json();
      setBooksState(data.works || []);
    } catch (error) {
      console.error("Failed to fetch books for genre:", genre, error);
      setBooksState([]);
    }
  };

  const visibleBooks = featuredBooks.slice(
    currentIndex,
    currentIndex + booksPerPage
  );
  const visibleg1Books = genreOneBooks.slice(
    currentIndex,
    currentIndex + booksPerPage
  );
  const visibleg2Books = genreTwoBooks.slice(
    currentIndex,
    currentIndex + booksPerPage
  );
  const visibleg3Books = classicBooks.slice(
    currentIndex,
    currentIndex + booksPerPage
  );

  return (
    <>
      <div className="default-sections">
        <div class="hero-content">
          <h1 class="hero-text thq-heading-1">Let's get lost in a good book</h1>
          <p class="hero-text1 thq-body-large">
            Welcome to a world of endless stories! Dive into a universe of
            books, just to give you a timeless experience for you. Our app is
            your personal librarian, ready to explore books that matches your
            unique tastes. From classic novels to thrilling sci-fi, discover
            your next literary adventure with a few simple taps.
          </p>
        </div>
        <br />
        <br />
        <div className="section">
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <h2>Best Sellers</h2>
            &nbsp; &nbsp;
            <button
              class="thq-button-outline hero-button1"
              onClick={handlePrevious}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              class="thq-button-outline hero-button1"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <p class="hero-text1 thq-body-large">
            Your next obsession, guaranteed.
          </p>
          <div className="books-list">
            {visibleBooks.map((book) => (
              <span
                key={book.key}
                className="book-item"
                onClick={() => handleBookClick(book.key)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={
                    book.cover_id
                      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                      : "default_cover.png"
                  }
                  alt={book.title}
                />
                <h3 className="thq-heading-3">{book.title}</h3>
                <p className="thq-body-small">
                  by {book.authors?.[0]?.name || "Unknown Author"}
                </p>
              </span>
            ))}
          </div>
        </div>
        <br />
        <br />
        <div className="section">
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <h2>Fantasy</h2>
            &nbsp; &nbsp;
            <button
              class="thq-button-outline hero-button1"
              onClick={handlePrevious}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              class="thq-button-outline hero-button1"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <p class="hero-text1 thq-body-large">
            Lose yourself in worlds beyond imagination.
          </p>
          <div className="books-list">
            {visibleg1Books.map((book) => (
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
        </div>
        <br />
        <br />
        <div className="section">
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <h2>Fiction</h2>
            &nbsp; &nbsp;
            <button
              class="thq-button-outline hero-button1"
              onClick={handlePrevious}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              class="thq-button-outline hero-button1"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <p class="hero-text1 thq-body-large">Your imagination, ignited.</p>
          <div className="books-list">
            {visibleg2Books.map((book) => (
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
        </div>
        <br />
        <br />
        <div className="section">
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <h2>Classics</h2>
            &nbsp; &nbsp;
            <button
              class="thq-button-outline hero-button1"
              onClick={handlePrevious}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              class="thq-button-outline hero-button1"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <p class="hero-text1 thq-body-large">
            Timeless tales, eternal charm.
          </p>
          <div className="books-list">
            {visibleg3Books.map((book) => (
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
        </div>
      </div>
    </>
  );
};

export default FeaturedSections;
