import { useGetPokemonList } from "../WebServices";
import { Routes, Route } from "react-router";
import PokeBrowser from "./PokeBrowser";
export default function Display() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PokeBrowser />} />
        <Route path="/favorites" element={<>Favorites</>} />
        <Route path="/help" element={<>Help</>} />
        <Route path="/albun" element={<>Album</>} />
      </Routes>
    </div>
  );
}
