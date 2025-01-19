import { useState } from "react";
import PokemonCard from "../../PokemonCard";
import Search from "./search";
import Controls from "./Controls";
import "./style.css";

export default function PokeBrowser() {
  const [pokemonIndex, setPokemonIndex] = useState(
    Math.floor(Math.random() * 1020) + 1
  );

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
        <div id="browser-search">
          <Search setPokemonIndex={setPokemonIndex} />
        </div>

        <div className="carrucel">
          <PokemonCard pokemonIndex={pokemonIndex} />
        </div>
        <Controls
          pokemonIndex={pokemonIndex}
          setPokemonIndex={setPokemonIndex}
        />
      </div>
    </div>
  );
}
