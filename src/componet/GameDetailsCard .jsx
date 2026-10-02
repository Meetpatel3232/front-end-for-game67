const GameDetailsCard = ({ game }) => {
    if (!game) return null;

    return (
        <div className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-5 text-white">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">

                {/* Game Image */}
                <div className="h-[350px] overflow-hidden rounded-xl">
                    <img
                        src={game.url}
                        alt={game.gamename}
                        className="h-full w-full object-cover"
                    />
                </div>


                {/* Game Information */}
                <div className="flex flex-col">

                    {/* Game Type */}
                    <div>
                        <span className="rounded-md bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                            {game.Gametype}
                        </span>
                    </div>


                    {/* Game Name */}
                    <h1 className="mt-4 text-4xl font-bold">
                        {game.gamename}
                    </h1>


                    {/* Rating */}
                    <div className="mt-3 flex items-center gap-2">
                        <span className="text-xl text-yellow-400">
                            ★
                        </span>

                        <span className="text-slate-300">
                            {game.rating} / 5
                        </span>
                    </div>


                    {/* Meta Information */}
                    <div className="mt-6 flex flex-wrap gap-8">

                        <div>
                            <p className="text-xs text-slate-500">
                                Release Date
                            </p>

                            <p className="mt-1 text-sm text-slate-300">
                                {game.date
                                    ? new Date(game.date).toLocaleDateString()
                                    : "Not available"}
                            </p>
                        </div>


                        <div>
                            <p className="text-xs text-slate-500">
                                Genre
                            </p>

                            <p className="mt-1 text-sm text-slate-300">
                                {game.Gametype}
                            </p>
                        </div>


                        <div>
                            <p className="text-xs text-slate-500">
                                Price
                            </p>

                            <p className="mt-1 text-sm text-slate-300">
                                ₹{game.price}
                            </p>
                        </div>

                    </div>


                    {/* Description */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">
                            Description
                        </h3>

                        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                            {game.description}
                        </p>
                    </div>


                    {/* Actions */}
                    <div className="mt-auto flex gap-3 pt-6">

                        <button
                            className="rounded-lg bg-red-500 px-5 py-3 text-sm font-medium
                            transition hover:bg-red-600"
                        >
                            ♥ Add to Favourite
                        </button>


                        <a
                            href={game.url}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-slate-600 px-5 py-3
                            text-sm text-slate-200 transition hover:bg-slate-800"
                        >
                            View on Store ↗
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default GameDetailsCard;