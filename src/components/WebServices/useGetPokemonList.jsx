import { useState, useEffect } from "react";

async function getAllPokemons(setPokemons) {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302%22";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    setPokemons(json.results);
  } catch (error) {
    console.error(error.message);
  }
}

export default function useGetPokemonList() {
  const [pokemonList, setPokemonList] = useState();
  let loading = !pokemonList ? true : false;

  useEffect(() => {
    if (!pokemonList) {
      getAllPokemons(setPokemonList);
    }
  }, [pokemonList]);

  return { pokemonList, loading };
}
