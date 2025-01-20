import { useEffect } from "react";
import { useGetPokemonData } from "../../../WebServices";

export default function Card({ pokemonIndex }) {
  const { pokemon, loading, load } = useGetPokemonData(pokemonIndex);
  let styleBackgroud = {};
  let color = "#00F0F0";
  if (pokemon) {
    let colorA = pokemon.nature[0] ? pokemon.nature[0].color : "#ffffff";
    color = colorA;
    let colorB = pokemon.nature[1] ? pokemon.nature[1].color : "#ffffff";
    styleBackgroud = {
      background: colorA,
      background:
        "linear-gradient(148deg, " + colorA + " 0%, " + colorB + " 100%)",
    };
  }

  useEffect(() => {
    load();
  }, [pokemonIndex]);

  if (!pokemon) {
    return null;
  }

  return (
    <div className="grid-item" style={{ ...styleBackgroud }}>
      {pokemon && pokemon.name}
      <div>
        <img
          style={{
            height: "50px",
          }}
          src={pokemon.gif}
          alt={"pokemon " + pokemonIndex + " " + pokemon.name}
        />
      </div>
    </div>
  );
}
