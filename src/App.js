import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Genres from "./Components/Genres";
import GenrePage from "./Components/GenrePage";
import BookDetails from "./Components/BookDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/genres/:genreName" element={<GenrePage />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="*" element={<div> Page not found </div>} />
      </Routes>
    </Router>
  );
}
export default App;
