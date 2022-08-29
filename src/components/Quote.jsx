import '../App.css'
import '../index.css'

function Quote({quote}) {
  return (
    <div className="quote-container">
      <p className="quote">{quote.quote}</p>
      <p className="author">{quote.author}</p>
    </div>
  );
}

export default Quote;
