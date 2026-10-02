import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewGameCard from "./NewGameCard";

function NewGamesSection() {
  const games = [
    {
      id: 1,
      title: "Hollow Knight",
      year: 2017,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/library_hero.jpg",
      genres: ["Indie", "Action"],
      description:
        "Explore a mysterious underground kingdom filled with dangerous creatures and hidden secrets.",
    },
    {
      id: 2,
      title: "Elden Ring",
      year: 2022,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg",
      genres: ["RPG", "Action"],
      description:
        "Explore a massive fantasy world filled with powerful enemies and ancient mysteries.",
    },
    {
      id: 3,
      title: "Black Myth: Wukong",
      year: 2024,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/library_hero.jpg",
      genres: ["Action", "RPG"],
      description:
        "Embark on a legendary journey inspired by Chinese mythology.",
    },
    {
      id: 4,
      title: "Cyberpunk 2077",
      year: 2020,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_hero.jpg",
      genres: ["RPG", "Open World"],
      description:
        "Explore Night City and become a mercenary caught in a dangerous futuristic world.",
    },
    {
      id: 5,
      title: "God of War",
      year: 2018,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/library_hero.jpg",
      genres: ["Action", "Adventure"],
      description:
        "Join Kratos and Atreus on a journey through a world of gods and monsters.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextGame = (swipeDirection) => {
    setDirection(swipeDirection);

    setCurrentIndex((prev) => {
      if (swipeDirection > 0) {
        return (prev + 1) % games.length;
      }

      return (prev - 1 + games.length) % games.length;
    });
  };

  const currentGame = games[currentIndex];

  // Cards behind the current card
  const nextIndex = (currentIndex + 1) % games.length;
  const nextNextIndex = (currentIndex + 2) % games.length;

  return (
    <section className="min-h-screen bg-[#080717] px-6 py-16">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Fresh Releases
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Top 10 New Games
          </h1>

          <p className="mt-3 text-slate-400">
            Discover the latest games and swipe through your next adventure.
          </p>
        </div>

        {/* DECK */}
        <div className="relative mx-auto h-[550px] w-full max-w-3xl">

          {/* BACK CARD 2 */}
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-3xl border border-slate-800 bg-[#121126]"
            animate={{
              scale: 0.90,
              y: 28,
              opacity: 0.35,
            }}
          >
            <img
              src={games[nextNextIndex].image}
              alt=""
              className="h-full w-full object-cover opacity-50"
            />

            <div className="absolute inset-0 bg-[#080717]/70" />
          </motion.div>

          {/* BACK CARD 1 */}
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-3xl border border-slate-700 bg-[#121126]"
            animate={{
              scale: 0.95,
              y: 14,
              opacity: 0.6,
            }}
          >
            <img
              src={games[nextIndex].image}
              alt=""
              className="h-full w-full object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-[#080717]/60" />
          </motion.div>

          {/* CURRENT CARD */}
          <AnimatePresence mode="wait" custom={direction}>
            <NewGameCard
              key={currentGame.id}
              game={currentGame}
              direction={direction}
              onSwipe={nextGame}
            />
          </AnimatePresence>
        </div>

        {/* COUNTER */}
        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-slate-500">
            {String(currentIndex + 1).padStart(2, "0")}{" "}
            <span className="text-slate-700">/</span>{" "}
            {String(games.length).padStart(2, "0")}
          </p>
        </div>

        {/* CONTROLS */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => nextGame(-1)}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-slate-700
              bg-[#121126]
              text-xl text-white
              transition
              hover:border-cyan-400
              hover:bg-cyan-400/10
              hover:text-cyan-400
            "
          >
            ←
          </button>

          <button
            onClick={() => nextGame(1)}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-slate-700
              bg-[#121126]
              text-xl text-white
              transition
              hover:border-cyan-400
              hover:bg-cyan-400/10
              hover:text-cyan-400
            "
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewGamesSection;