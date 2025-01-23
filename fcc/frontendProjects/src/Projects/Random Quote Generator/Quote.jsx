import { useState, useEffect } from "react";
import './Quote.css'; // Make sure to create this CSS file

const Quote = () => {
  const url = "https://api.quotable.io/random";
  const [quote, setQuote] = useState({});
  const [bgColor, setBgColor] = useState('#ffffff'); // Default background color

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(url);
    const newQuote = await data.json();
    setQuote(newQuote);
    setBgColor(getRandomColor()); // Change background color on new quote
  };

  const getNewQuote = () => {
    fetchData();
  };

  const getRandomColor = () => {
    const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a8d1'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const tweetQuote = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.content || ''}" - ${quote.author || ''}`)}`;

  return (
    <div id="quote-box" style={{ backgroundColor: bgColor }}>
      <p id="text" className="quote-text">{quote.content || 'Loading...'}</p>
      <p id="author" className="quote-author">- {quote.author || 'Author'}</p>
      <button id="new-quote" onClick={getNewQuote}>New Quote</button>
      <a id="tweet-quote" href={tweetQuote} target="_blank" rel="noopener noreferrer">Tweet this quote</a>
    </div>
  );
};

export default Quote;
