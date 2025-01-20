import "./style.css";
import { useGetPokemonData } from "../WebServices";
import Sprite from "./Sprite";
import { useEffect } from "react";
import Title from "./Title";
import Options from "./Options";
//

export default function PokemonCard({ height = 300, pokemonIndex }) {
  const { pokemon, loading, load } = useGetPokemonData(pokemonIndex);
  const width = height / 1.6;
  useEffect(() => {
    load();
  }, [pokemonIndex]);

  let style = {};
  let color = "#00F0F0";
  if (pokemon) {
    let colorA = pokemon.nature[0] ? pokemon.nature[0].color : "#ffffff";
    color = colorA;
    let colorB = pokemon.nature[1] ? pokemon.nature[1].color : "#ffffff";
    style = {
      background: colorA,
      background:
        "linear-gradient(148deg, " + colorA + " 0%, " + colorB + " 100%)",
    };
  }

  //console.log(pokemon);

  return (
    <div
      className={`${"pc-canva"} ${loading && "load-metal"}`}
      style={{ ...style, width: width, height: height }}
    >
      {loading ? (
        <>loading...</>
      ) : (
        <div>
          <Title
            name={pokemon.name}
            index={pokemonIndex}
            natures={pokemon.nature}
          />
          <div>
            <Sprite
              color={color}
              url={isNonEmptyString(pokemon.gif) ? pokemon.gif : pokemon.sprite}
              stats={pokemon.stats}
            />
          </div>
          <Options pokemonIndex={pokemonIndex} pokemon={pokemon} />
        </div>
      )}
    </div>
  );
}

function isNonEmptyString(input) {
  return typeof input === "string" && input.trim().length > 0;
}
