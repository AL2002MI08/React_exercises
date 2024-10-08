import { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Description } from "../components/Description.jsx";
import { Footer } from "../components/Footer.jsx";
import "./App.css";
import { Navbar } from "../components/Navbar.jsx";
import { Main } from "../components/Main.jsx";
import { Page } from "../components/Page.jsx";
// function App() {
//   return (
//     <>
//       {/* <Header />
//       <Description />
//       <Footer /> */}
//       {/* <Navbar />
//       <Main /> */}
//       <Page />
//     </>
//   );
// }
// export default App;
import React from "react"
import { Contact } from "../components/Contact"
import Card from "../components/Card";
import data from "../data.jsx";

export default function App() {
    const cards = data.map((item) => {
        return (

        <Card 
        key= {item.id}
       {...item}
        />
        )
    })
    return (
        // 
        //<Card />
        <>
        <Navbar />
       <section className="cards-list">
                {cards}
            </section>
        </>
        
    )
}

