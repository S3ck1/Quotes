import { useState } from "react";
import "./App.css";
import quotes from "./quotes.json";
import colors from "./colors.json";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

function App() {
  const [quote, setQuote] = useState(getRandomItem(quotes));
  const [color, setColor] = useState("black");

  const cardSwap = () => {
    setQuote(getRandomItem(quotes));
    setColor(getRandomItem(colors));
    document.body.style = `background: ${color}`;
    document.body.style.color = `${color}`;
    document.querySelector("button").style = `background: ${color}`;
  };

  return (
    <div className="App">
      <div className="card-container">
        <Quote quote={quote}/>
        <Footer cardSwap={cardSwap}/>
      </div>
    </div>
  );
}

//returns random quote from quotes
function getRandomItem(array) {
  const arraySize = array.length;
  const randomIndex = getRandomNumber(arraySize);
  console.log(randomIndex);
  const randomItem = array[randomIndex];
  return randomItem;
}

//returns a random number from 0 to given limit (inclusive)
function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}

export default App;
