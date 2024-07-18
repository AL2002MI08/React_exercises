import { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Description } from "../components/Description.jsx";
import { Footer } from "../components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Description />
      <Footer />
    </>
  );
}
export default App;
