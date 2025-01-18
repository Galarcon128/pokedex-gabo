import { useGetPokemonList } from "../WebServices";
import { Routes, Route } from "react-router";
import PokeBrowser from "./PokeBrowser";
export default function Display() {
  const { pokemonList, loading } = useGetPokemonList();
  return (
    <div>
      {loading ? (
        <>Loading...</>
      ) : (
        <div
          style={{
            height: "calc(100vh - 80px)",
            backgroundColor: "var(--pokedex-color)",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<PokeBrowser pokemonList={pokemonList} />}
            />
            <Route path="/favorites" element={<>Favorites</>} />
            <Route path="/help" element={<>Help</>} />
            <Route path="/albun" element={<>Album</>} />
          </Routes>
        </div>
      )}
    </div>
  );
}
