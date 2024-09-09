import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Determine button colors based on count
  const addButtonStyle = {
    background: count >= 5 ? "#242424" : "",
    color: "green",
  };

  const removeButtonStyle = {
    background: count <= 0 ? "#242424" : "",
    color: "red",
  };
  return (
    <div>
      <h1>Hello World</h1>
      <p style={{ fontSize: "30px", color: "blue" }}>Counter Value: {count}</p>
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        <button style={addButtonStyle} onClick={addValue}>
          Add Value
        </button>
        <button style={removeButtonStyle} onClick={removeValue}>
          Remove Value
        </button>
      </p>
    </div>
  );
}

export default App;
