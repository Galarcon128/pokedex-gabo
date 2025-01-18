import PokemonCard from "../../PokemonCard";
import { useGetPokemonList } from "../../WebServices";
export default function PokeBrowser() {
  const { pokemonList, loading } = useGetPokemonList();
  const pokemonIndex = 1;
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
          poke-browser : pokemon{" " + pokemonIndex}
          <PokemonCard pokemonIndex={pokemonIndex} />
        </div>
      )}
    </div>
  );
}
