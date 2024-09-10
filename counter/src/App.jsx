import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 5) {
      setCount(count + 1);
    }

    // Notes :--
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // Detailed explaination of why does first syntax only updates the count once:
    // Initial State: Assume count is initially 69.
    // First Call: setCount(count + 1) schedules a state update to set count to 70 (69 + 1).
    // Second Call: setCount(count + 1) schedules another state update to set count to 70 (69 + 1), because count is still 69 in this scope.
    // Third Call: setCount(count + 1) schedules yet another state update to set count to 70 (69 + 1), again because count is still 69 in this scope.

    // setCount(count =>count+1)
    // setCount(count =>count+1)
    // In case of functional updater syntax React ensures that changes are made to the latest state of the count hence each function gets access to the latest state of the count variable:
    // First Call: setCount(count =>count+1) schedules a state update to set count to 70
    // Second Call : schedules a state update to set count to (70+1) because count is now 70 in this scope and so on...
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
