import GameCard from "./GameCard";

function CardSection() {
  return (
    <section className="min-h-[600px] bg-slate-950 px-6 py-16">

      {/* Section heading */}
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Discover
          </p>

          <h2 className="text-4xl font-bold text-white">
            Featured Games
          </h2>

          <p className="mt-3 max-w-xl text-slate-400">
            Explore something new and find your next favorite game.
          </p>
        </div>

        {/* Cards */}
        <div className="flex items-center gap-6 overflow-hidden">

          <GameCard />
          <GameCard />
          <GameCard />

        </div>

      </div>

    </section>
  );
}

export default CardSection;