import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  return (
    <nav className="w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">

        {/* Logo */}
        <div className="shrink-0">
          <h1 className="text-2xl font-extrabold tracking-wider text-white">
            Game<span className="text-cyan-400">67</span>
          </h1>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl">
          <div className="flex items-center bg-slate-900 border border-slate-700 rounded-full overflow-hidden focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20 transition-all duration-300">

            <input
              type="text"
              placeholder="Search games..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-slate-500 outline-none"
            />

            <button
             onClick={() => {
    navigate(`/search?q=${search}&genre=${genre}`);
  }}
              className="px-5 py-3 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              🔍
            </button>

          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          {/* Genre */}
          <div className="relative group">

            <button
              className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Genre
              <span className="text-xs group-hover:rotate-180 transition-transform duration-300">
                ▼
              </span>
            </button>

            {/* Genre Menu */}
            <div className="absolute right-0 top-full mt-4 w-48 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl shadow-black/40 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <p  onClick={() => {
  setGenre("Action");
  navigate(`/search?q=${search}&genre=Action`);
}} className="px-4 py-3 rounded-lg text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-400 cursor-pointer transition-colors">
                Action
              </p>

              <p  onClick={() => {
  setGenre("Adventure");
  navigate(`/search?q=${search}&genre=Adventure`);
}} className="px-4 py-3 rounded-lg text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-400 cursor-pointer transition-colors">
                Adventure
              </p>

              <p   onClick={() => {
  setGenre("RPG");
  navigate(`/search?q=${search}&genre=RPG`);
}} className="px-4 py-3 rounded-lg text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-400 cursor-pointer transition-colors">
                RPG
              </p>

              <p  onClick={() => {
  setGenre("Sports");
  navigate(`/search?q=${search}&genre=Sports`);
}} className="px-4 py-3 rounded-lg text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-400 cursor-pointer transition-colors">
                Sports
              </p>

              <p  onClick={() => {
  setGenre("Strategy");
  navigate(`/search?q=${search}&genre=Strategy`);
}} className="px-4 py-3 rounded-lg text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-400 cursor-pointer transition-colors">
                Strategy
              </p>

            </div>
          </div>

          {/* About */}
          <a
            href="#about"
            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
         about
          </a>
         
        </div>

      </div>
    </nav>
  );
}

export default Navbar;