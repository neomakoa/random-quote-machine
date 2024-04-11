import { FaTwitter, FaInstagram } from "react-icons/fa";

import "./App.css";
import { useState } from "react";

function App() {
  const [quoteIdx, setQuoteIdx] = useState(Math.floor(Math.random() * 5));
  const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };
  const newColor = randColor();

  const quotes = [
    {
      auth: "Grandma Moses",
      quo: "Life is what we make it, always has been, always will be.",
    },
    {
      auth: "Buddha",
      quo: "The mind is everything. What you think you become.",
    },
    {
      auth: "John Lennon",
      quo: "Life is what happens to you while you’re busy making other plans.",
    },
    {
      auth: "Albert Einstein",
      quo: "A person who never made a mistake never tried anything new.",
    },
    {
      auth: " Mark Twain",
      quo: "The two most important days in your life are the day you are born and the day you find out why.",
    },
  ];
  const handleNewQuote = () => {
    return (setQuoteIdx (Math.floor(Math.random() * quotes.length)));
  };

  return (
    <div className="container" style={{ backgroundColor: `${newColor}` }}>
      <div className="quoteBox" id="quote-box">
        <div className="quote-div">
          <p className="quote" id="text" style={{ color: `${newColor}` }}>
            "{quotes[quoteIdx].quo}"
          </p>
        </div>
        <div className="author-div">
          <p className="author" id="author" style={{ color: `${newColor}` }}>
            - {quotes[quoteIdx].auth}
          </p>
        </div>
        <div className="btns">
          <div className="btn-div">
            <div
              className="btn"
              id="new-quote"
              style={{ backgroundColor: `${newColor}`, color: "white" }}
              onClick={handleNewQuote}
            >
              New Quote
            </div>
          </div>
          <div className="socials">
            <a
              href="https://twitter.com/intent/tweet"
              target="_blank"
              className="social"
              style={{ backgroundColor: `${newColor}`, color: "white" }}
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              className="social"
              style={{ backgroundColor: `${newColor}`, color: "white" }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <p className="dev" style={{ color: "white" }}>
        by Neo
      </p>
    </div>
  );
}

export default App;
