import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "./Book";
import Search from "./Search";

const GenrePage = () => {
  const { genreName } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  let genre = genreName;
  if (genre.length >= 2) {
    genre = genre.split(" ").join("_");
  }

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://openlibrary.org/subjects/${genre.toLowerCase()}.json?limit=50`
        );
        const data = await response.json();
        console.log("data", data, data.works);

        console.log("data in genrepage", data.docs);
        setBooks(data.works || []);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [genreName]);

  return (
    <div>
      <Search />
      <br />
      <br />
      <h1>{genreName} Books</h1>
      {loading ? <p>Loading...</p> : <Book books={books} />}
    </div>
  );
};

export default GenrePage;
