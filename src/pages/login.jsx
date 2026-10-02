import { useState } from "react";
import {Link, Navigate, useNavigate } from "react-router-dom";
import{loginUser} from '../service/api';
function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const[login,setLogin]=useState("");
 const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();

    // console.log("Email:", email);
    // console.log("Password:", password);

    const islogin=await loginUser(email,password);

    if(islogin.success){
      navigate("/Home");
    }else{
      setLogin(islogin.message);
    }
    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      {/* Main Card */}
      <div className="relative flex w-full max-w-5xl min-h-[620px] overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative flex w-[43%] flex-col items-center justify-center overflow-hidden bg-purple-100 px-12 text-center">

          {/* Top decorative circle */}
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-purple-200"></div>

          {/* Bottom decorative circle */}
          <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-purple-200"></div>

          {/* Controller */}
          <div className="relative z-10 mb-8 text-7xl">
            🎮
          </div>

          {/* Title */}
          <h1 className="relative z-10 text-5xl font-bold leading-tight text-gray-900">
            <span className="text-purple-600">Game</span>
            <br />
            Details
          </h1>

          {/* Description */}
          <p className="relative z-10 mt-6 max-w-xs text-lg leading-8 text-gray-600">
            Discover games.
            <br />
            Read reviews.
            <br />
            Decide what to play.
          </p>

          {/* Decorative + */}
          <div className="absolute left-14 top-1/2 text-2xl text-purple-400">
            +
          </div>

          <div className="absolute right-16 bottom-32 text-2xl text-purple-400">
            +
          </div>

          {/* Decorative star */}
          <div className="absolute right-24 top-32 text-xl text-purple-300">
            ✦
          </div>

          {/* Curved right edge */}
          <div className="absolute -right-20 top-[-10%] h-[120%] w-40 rounded-[50%] bg-white"></div>
        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="flex flex-1 flex-col justify-center px-16 py-12">

          <div className="mx-auto w-full max-w-md">

            {/* Heading */}
            <h2 className="text-center text-4xl font-bold text-gray-900">
              WELCOME
            </h2>

            <p className="mt-3 text-center text-lg text-gray-500">
              Sign in to your account
            </p>


            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Game ID / Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Game ID or Email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
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
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>


              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-purple-600 py-4 text-lg font-semibold text-white transition hover:bg-purple-700 active:scale-[0.99]"
              >
                Login
              </button>

            </form>


            {/* Register */}
            <p className="mt-6 text-center text-gray-500">
              Don't have an account?{" "}

              <button
                type="button"
                className="font-semibold text-purple-600 hover:underline"
              >
                
              </button>
            <Link to='/Register' className="text-blue-800"  >register</Link>
            </p>

            <div>{login}</div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;