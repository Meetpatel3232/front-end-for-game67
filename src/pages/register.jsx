import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../service/api";
function Register() {
  const [gameId, setGameId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate=useNavigate();
  const [register,setRegister]= useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    
const result = await registerUser(gameId, email, password);

if (result.success) {
  navigate("/Login");
} else {
  setRegister(result.message);
}
    // Add your registration API here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      {/* Main Card */}
      <div className="relative flex w-full max-w-5xl min-h-[620px] overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative flex w-[43%] flex-col items-center justify-center overflow-hidden bg-purple-100 px-12 text-center">

          {/* Decorative circles */}
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-purple-200"></div>

          <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-purple-200"></div>

          {/* Game Icon */}
          <div className="relative z-10 mb-8 text-7xl">
            🎮
          </div>

          {/* Title */}
          <h1 className="relative z-10 text-5xl font-bold leading-tight text-gray-900">
            <span className="text-purple-600">Join</span>
            <br />
            Game Details
          </h1>

          {/* Description */}
          <p className="relative z-10 mt-6 max-w-xs text-lg leading-8 text-gray-600">
            Create your account.
            <br />
            Explore new games.
            <br />
            Find what to play.
          </p>

          {/* Decorative icons */}
          <div className="absolute left-14 top-1/2 text-2xl text-purple-400">
            +
          </div>

          <div className="absolute right-16 bottom-32 text-2xl text-purple-400">
            +
          </div>

          <div className="absolute right-24 top-32 text-xl text-purple-300">
            ✦
          </div>

          {/* Curved edge */}
          <div className="absolute -right-20 top-[-10%] h-[120%] w-40 rounded-[50%] bg-white"></div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="flex flex-1 flex-col justify-center px-16 py-10">

          <div className="mx-auto w-full max-w-md">

            {/* Heading */}
            <h2 className="text-center text-4xl font-bold text-gray-900">
              CREATE ACCOUNT
            </h2>

            <p className="mt-3 text-center text-lg text-gray-500">
              Join the Game Details community
            </p>


            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >

              {/* Game ID */}
              <div>
                <label
                  htmlFor="gameId"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Game ID
                </label>

                <input
                  id="gameId"
                  type="text"
                  value={gameId}
                  onChange={(e) => setGameId(e.target.value)}
                  placeholder="Choose your Game ID"
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>


              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>


              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>


              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>


              {/* Register Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-purple-600 py-3.5 text-lg font-semibold text-white transition hover:bg-purple-700 active:scale-[0.99]"
              >
                Create Account
              </button>

            </form>


            {/* Login */}
            <p className="mt-5 text-center text-gray-500">
              Already have an account?{" "}

              <button
                type="button"
                className="font-semibold text-purple-600 hover:underline"
                onClick={() => window.location.href = "/"}
              >
               
              </button>
              <Link to='/Login' className="text-blue-800" >Login</Link>
            </p>
         
           <p>{register}</p>
          
          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;