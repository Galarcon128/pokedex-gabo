import { Routes, Route } from "react-router";
import PokeBrowser from "./PokeBrowser";
import Favorites from "./Favorites";
import "./style.css";
export default function Display() {
  //mobile View
  return (
    <div>
      <Routes>
        <Route path="/" element={<PokeBrowser />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/help" element={<>Help</>} />
        <Route path="/albun" element={<>Album</>} />
      </Routes>
    </div>
  );
}
