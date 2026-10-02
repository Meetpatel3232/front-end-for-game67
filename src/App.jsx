import "./App.css";
import GamePage from "./pages/GamePage";
import Login from "./pages/login";
import GameSearch from "./pages/GameSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/home";
function App() {
  return (
   <BrowserRouter>
    <Routes>
       <Route path="/"  element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Login"  element={<Login/>}/>
      <Route path="/Register"  element={<Register/>}/>
       <Route path="/search" element={<GameSearch />} />
       <Route path="/game/:id" element={<GamePage />} />
    </Routes>
   
   </BrowserRouter>

  );
}

export default App;