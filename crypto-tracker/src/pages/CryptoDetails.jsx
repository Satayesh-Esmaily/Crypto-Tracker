import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CryptoDetails() {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCrypto(data));
  }, [id]);

  if (!crypto) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{crypto.name}</h1>
      <p>Symbol: {crypto.symbol.toUpperCase()}</p>
      <p>Current Price: ${crypto.market_data.current_price.usd}</p>
      <p>Market Cap: ${crypto.market_data.market_cap.usd}</p>
      <p>24h High: ${crypto.market_data.high_24h.usd}</p>
      <p>24h Low: ${crypto.market_data.low_24h.usd}</p>
     
    </div>
  );
}
