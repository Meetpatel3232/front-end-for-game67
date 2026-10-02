import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getGames } from "../service/api";
import GameCard from "../componet/GameCard";

const GameSearch = () => {
  const [searchParams] = useSearchParams();

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const gamename = searchParams.get("q") || "";
  const genre = searchParams.get("genre") || "";

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);

      const result = await getGames(gamename, genre);

      if (result.success) {
        setGames(result.games);
      } else {
        setGames([]);
      }

      setLoading(false);
    };

    fetchGames();
  }, [gamename, genre]);

  if (loading) {
    return <div className="text-white p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-2xl font-bold text-white mb-6">
        Search Results
      </h1>

      {games.length === 0 ? (
        <p className="text-slate-400">
          No games found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GameSearch;