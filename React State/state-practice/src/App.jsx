import React from "react";

export default function App() {
  /**
   * Challenge:
   * Create state to track our count value (initial value is 0)
   * Don't forget to replace the hard-coded "0" with your new state
   */

  /**
   * Challenge:
   * Create a function called `add` that runs
   * when the + button is clicked. (Can just console.log("add") for now)
   */

  /**
   * Challenge:
   * See if you can think of a way to add 1 to the count
   * every time the + button is clicked
   */

  /**
   * Challenge:
   * Add functionality to the minus button
   */
  const [count, setCount] = React.useState(0);

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  return (
    <main className="container">
      <h1>How many points did Lebron James score in this game?</h1>
      <div className="counter">
        <button
          className="minus"
          onClick={subtract}
          aria-label="Decrease count"
        >
          -
        </button>
        <h2 className="count">{count}</h2>
        <button className="plus" onClick={add} aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
}
