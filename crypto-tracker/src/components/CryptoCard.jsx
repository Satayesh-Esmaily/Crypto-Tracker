import { useNavigate } from "react-router-dom";

export default function CryptoCard({ crypto }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/crypto/${crypto.id}`)}
      className="cursor-pointer p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:scale-105 transition-transform"
    >
      <h2 className="font-bold text-lg">{crypto.name}</h2>
      <p>Symbol: {crypto.symbol.toUpperCase()}</p>
      <p>Price: ${crypto.current_price}</p>
      <p
        className={
          crypto.price_change_percentage_24h > 0
            ? "text-green-500"
            : "text-red-500"
        }
      >
        24h: {crypto.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
}
