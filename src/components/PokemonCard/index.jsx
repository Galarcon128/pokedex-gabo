import "./style.css";
import { useGetPokemonData } from "../WebServices";

export default function PokemonCard({ pokemonIndex }) {
  const { pokemon, loading } = useGetPokemonData(pokemonIndex);
  return (
    <div className={`${"pc-canva"} ${loading && "load-metal"}`}>
      {loading ? (
        <>loading...</>
      ) : (
        <div>
          <div className="pc-sprite">
            <div>{pokemon.name}</div>
            <p style={{ whiteSpace: "pre-line" }}>{pokemon.descriptions[0]}</p>
          </div>
        </div>
      )}
    </div>
  );
}
