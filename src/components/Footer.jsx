import '../App.css'
import '../index.css'

function Footer({cardSwap}) {
  return (
    <div className="card-footer">
      <button onClick={cardSwap}>{">"}</button>
    </div>
  );
}

export default Footer;
