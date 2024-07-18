import { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Description } from "../components/Description.jsx";
import { Footer } from "../components/Footer.jsx";
import "./App.css";
import { Navbar } from "../components/Navbar.jsx";
import { Main } from "../components/Main.jsx";
function App() {
  return (
    <>
      {/* <Header />
      <Description />
      <Footer /> */}
      <Navbar />
      <Main />
    </>
  );
}
export default App;
