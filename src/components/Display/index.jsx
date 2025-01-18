import { useGetPokemonList } from "../WebServices";
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
          <PokeBrowser pokemonList={pokemonList} />
        </div>
      )}
    </div>
  );
}
