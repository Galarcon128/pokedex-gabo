import PokemonCard from "../../PokemonCard";
export default function PokeBrowser({ pokemonList }) {
  const pokemonIndex = 0;
  return (
    <div>
      poke-browser
      <PokemonCard pokemonIndex={pokemonIndex} />
    </div>
  );
}
