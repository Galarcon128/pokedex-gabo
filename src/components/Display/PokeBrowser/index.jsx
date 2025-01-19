import { useState } from "react";
import PokemonCard from "../../PokemonCard";
import { FixedSizeList as List } from "react-window";
import Search from "./search";
import Controls from "./Controls";
import "./style.css";

export default function PokeBrowser() {
  const [pokemonIndex, setPokemonIndex] = useState(
    Math.floor(Math.random() * 1020) + 1
  );

  const Card = ({ index, style }) => (
    <div style={style}>
      <PokemonCard pokemonIndex={index + 1} />
    </div>
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
        <List
          height={350}
          itemCount={1020}
          itemSize={200}
          layout="horizontal"
          width={300}
        >
          {Card}
        </List>
      </div>
    </div>
  );
}
