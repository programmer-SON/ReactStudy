import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [curPrice, setPrice] = useState(1);
  const [need, setNeed] = useState(1);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then( (response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);

  const onChange = (event) => {
    setPrice(event.target.value);
    setNeed(1);
  }

  const handleInput = (event) => {
    setNeed(event.target.value);
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading..</strong>:
        (<select onChange={onChange}>
          {coins.map((coin,index) => (
            <option key={index} value={coin.quotes.USD.price}>{coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD</option>
          ))}
        </select>
        )      
      }
      <div>
        <h1>Dollar To Coin</h1>
          <input type="number" value={need} onChange={handleInput} placeholder="dollar"/>$
      </div>
        <h2> {need / curPrice} Coin </h2>
    </div>
    
  );
}

export default App;
