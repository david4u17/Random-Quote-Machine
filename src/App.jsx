import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.css';

const QuoteMachine = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      const randomQuote = data[Math.floor(Math.random() * data.length)];
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <>
      <div id="quote-box" className="text-center">
        <p id="text" class="quote-text">
          " {quote} "
        </p>
        <p id="author" class="quote-author">
          - {author}
        </p>
        <div className="buttons">
          <a
            id="tweet-quot"
            className="btn btn-info"
            href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
            target="_top"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>

            &nbsp;
          </a>


          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1 .8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5 .9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z" />
            </svg>
          </a>

          <button
            id="new-quote"
            className="btn btn-primary button"
            onClick={handleNewQuote}
          >
            New Quote
          </button>
        </div>
      </div>
      <div className="footer">
        by <a href="https://codepen.io/david4u17/">David</a>
      </div>
    </>
  );
};

const QuoteBox = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <QuoteMachine />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
};

export default App;

