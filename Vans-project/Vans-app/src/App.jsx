import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";



export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
