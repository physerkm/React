import "./App.css";
import React from "react";
import padsData from "./pads";

export default function App({ darkMode }) {
  /**
   * Challenge: Use a ternary to determine the backgroundColor
   * of the buttons
   * If darkMode is true, set them to "#222222"
   * If darkMode is false, set them to "#cccccc"
   */

  const [pads, setPads] = React.useState(padsData);

  const styles = {
    backgroundColor: darkMode ? "#222222" : "#cccccc",
  };

  const buttonElements = pads.map((pad) => (
    <button style={styles} key={pad.id}></button>
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
