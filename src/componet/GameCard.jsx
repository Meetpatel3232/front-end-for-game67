import { useNavigate } from "react-router-dom";
function GameCard({ game }) {
  const navigate = useNavigate();
  return (
    <div   onClick={() => navigate(`/game/${game._id}`)} className="w-64 overflow-hidden rounded-xl bg-slate-900 border border-slate-800 shadow-lg">
      
      <img
        src={game.url}
        alt={game.gamename}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold text-white truncate">
          {game.gamename}
        </h2>

        <p className="text-sm text-cyan-400 mt-1">
          {game.Gametype}
        </p>

        <p className="text-sm text-slate-400 mt-2 line-clamp-2">
          {game.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-yellow-400">
            ⭐ {game.rating}
          </span>

          <span className="text-white font-semibold">
            ${game.price}
          </span>
        </div>
      </div>

    </div>
  );
}

export default GameCard;