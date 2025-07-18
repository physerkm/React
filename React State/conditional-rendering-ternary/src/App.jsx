import Joke from "./Joke";
import jokesData from "./jokesData";
import "./App.css";

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}
