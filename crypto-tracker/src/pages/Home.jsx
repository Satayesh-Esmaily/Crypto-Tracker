import { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoCard";
import CryptoFilter from "../components/CryptoFilter";

export default function Home() {
  const [cryptos, setCryptos] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCryptos(data);
        setFiltered(data);
      });
  }, []);

  const handleFilter = ({ search, minPrice, maxPrice }) => {
    let result = [...cryptos];

    if (search) {
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.symbol.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (minPrice) {
      result = result.filter((c) => c.current_price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      result = result.filter((c) => c.current_price <= parseFloat(maxPrice));
    }

    setFiltered(result);
  };

  return (
    <div className="p-6">
      <CryptoFilter onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  );
}
