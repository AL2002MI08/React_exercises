import React from "react";
export default function App() {
  const [temperature, setTemperature] = React.useState(10);
  const increment = () => {
    setTemperature((prevTemp) => prevTemp + 1);
  };
  const decrement = () => {
    setTemperature((prevTemp) => prevTemp - 1);
  };
  return (
    <div>
      <div className="app-container">
        <div className="temperature-display-container">
            <div className="temperature-display">{temperature}^C</div>
        </div>
      </div>
      <div className="button-container">
        {/* <div>{count}</div> */}
        {/* <button onClick={increment}>+</button> */}
        {/* <button onClick={decrement}>-</button> */}
        <button  onClick={increment}>+</button>
        <button  onClick={decrement}>-</button>
      </div>
    </div>
  );
}
