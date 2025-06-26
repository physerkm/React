import "./App.css";

export default function App() {
  function handleClick() {
    console.log("I was clicked!");
  }

  function handleMouseOver() {
    console.log("I was hovered!");
  }

  /**
   * Challenge: add our new function to the button
   */

  /**
   * Challenge: Log something to the console when the mouse
   * hovers over the image
   */

  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}
