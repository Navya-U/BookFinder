import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://openlibrary.org/works/${bookId}.json`
        );
        const data = await response.json();
        console.log("bookDetails data", data);
        setBookDetails(data);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetails();
  }, [bookId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {bookDetails ? (
        <div>
          <h1>{bookDetails.title}</h1>
          {bookDetails.covers && (
            <img
              src={`https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`}
              alt={`${bookDetails.title} cover`}
            />
          )}

          <p>
            <strong>Author:</strong>
            {bookDetails?.authors && (
              <a
                href={`https://openlibrary.org${bookDetails?.authors[0]?.author?.key}`}
              >
                {bookDetails.authors[0].author.key
                  .split("/")
                  .pop()
                  .replace("_", " ") || "NA"}
              </a>
            )}
          </p>

          <p>
            <strong>Description:</strong>{" "}
            {bookDetails.description || "No description available."}
          </p>

          <p>
            <strong>First Published:</strong>{" "}
            {bookDetails.first_publish_date || "Unknown"}
          </p>

          {bookDetails.dewey_number && (
            <p>
              <strong>Dewey Number:</strong> {bookDetails.dewey_number[0]}
            </p>
          )}

          {bookDetails?.excerpts && (
            <p>
              <strong> First Sentence:</strong>{" "}
              {bookDetails.excerpts[0].excerpt}
            </p>
          )}

          {bookDetails?.links && (
            <p>
              <h5> Additional Details</h5>
              <strong>Wikipedia:</strong>
              &nbsp;
              <a href={bookDetails?.links[0]?.url}>
                {bookDetails?.links[0]?.title || "NA"}
              </a>
              <br />
              <strong>Summary:</strong>
              &nbsp;
              <a href={bookDetails?.links[1]?.url}>
                {bookDetails?.links[1]?.title || "NA"}
              </a>
              <br />
              <strong>Review:</strong>
              &nbsp;
              <a href={bookDetails?.links[2]?.url}>
                {bookDetails?.links[2]?.title || "NA"}
              </a>
              <br />
              <strong>The Greatest Books:</strong>
              &nbsp;
              <a href={bookDetails?.links[3]?.url}>
                {bookDetails?.links[3]?.title || "NA"}
              </a>
              <br />
              <strong>Standard Ebooks:</strong>
              &nbsp;
              <a href={bookDetails?.links[4]?.url}>
                {bookDetails?.links[4]?.title || "NA"}
              </a>
              <br />
            </p>
          )}
        </div>
      ) : (
        <p>Book details not available.</p>
      )}
    </div>
  );
};

export default BookDetails;
