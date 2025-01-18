import "./style.css";
import { useGetPokemonData } from "../WebServices";
import Sprite from "./Sprite";
import { useEffect } from "react";

export default function PokemonCard({ pokemonIndex }) {
  const { pokemon, loading, load } = useGetPokemonData(pokemonIndex);

  useEffect(() => {
    load();
  }, [pokemonIndex]);

  let style = {};
  if (pokemon) {
    let colorA = pokemon.nature[0] ? pokemon.nature[0].color : "#ffffff";
    let colorB = pokemon.nature[1] ? pokemon.nature[1].color : "#ffffff";
    style = {
      background: colorA,
      background:
        "linear-gradient(148deg, " + colorA + " 0%, " + colorB + " 100%)",
    };
  }

  return (
    <div
      className={`${"pc-canva"} ${loading && "load-metal"}`}
      style={{ ...style }}
    >
      {loading ? (
        <>loading...</>
      ) : (
        <div>
          <div className="pc-title">
            <p
              className="text-lg font-bold"
              style={{
                color: "white",
                textTransform: "uppercase",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              {pokemon.name}
            </p>
            {pokemon.nature.map((nature) => (
              <p
                className="text-base font-bold"
                style={{
                  color: "white",
                  border: "1px solid black",
                  padding: "2px",
                  backgroundColor: nature.color,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                {nature.label}
              </p>
            ))}
          </div>
          <Sprite url={pokemon.sprite} />
        </div>
      )}
    </div>
  );
}
//
