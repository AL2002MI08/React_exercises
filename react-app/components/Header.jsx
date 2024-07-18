import React from "react";
export function Header(){
    return (
        <div>
        <header>
          <nav className="nav-bar">
            <img src="react-logo.png" className="image" />
            <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
          </nav>
          <h1 className="heading">Reasons I'm excited to learn React</h1>
        </header>
      </div>
    )
}