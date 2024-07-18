import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header>
          <nav>
            <img src="react-logo.png" width="80px" />
          </nav>
          <h1>Reasons I'm excited to learn React</h1>
        </header>
      </div>
    </>
  );
}
export function Description() {
  return (
    <>
      <h1>Why learn React</h1>
      <ol>
        <li>Hired skill on demand</li>
        <li>Composable</li>
        <li>declarative</li>
      </ol>
    </>
  );
}
export function Footer() {
  return (
    <small>© 2021 Kellma development. All rights reserved.</small>
  );
}
export default App;
