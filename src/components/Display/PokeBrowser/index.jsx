import { useState } from "react";
import PokemonCard from "../../PokemonCard";
import Search from "./search";
import "./style.css";

export default function PokeBrowser() {
  const [pokemonIndex, setPokemonIndex] = useState(11);
  return (
    <div
      style={{
        height: "calc(100vh - 80px)",
        backgroundColor: "var(--pokedex-color)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="pb-display">
        <Search setPokemonIndex={setPokemonIndex} />
        <PokemonCard pokemonIndex={pokemonIndex} />
      </div>
    </div>
  );
}
