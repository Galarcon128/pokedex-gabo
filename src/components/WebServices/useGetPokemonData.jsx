import { useState, useEffect } from "react";
import POKEMON_TYPES from "./types.json";
import { filterFlavorTextByLanguage } from "./utiles";

const SHEMA_NATURE = {
  label: "",
  color: "#ffffff",
  url: "",
};
const SHEMA_POKEMON = {
  descriptions: [],
  name: "",
  nature: [],
  sprite: "",
  spriteShiny: "",
  stats: [],
};

async function getPokemonData(pokemonIndex, setPokemon) {
  let pokemon = { ...SHEMA_POKEMON };
  const urlData = "https://pokeapi.co/api/v2/pokemon/" + pokemonIndex + "/";
  const urlSpecies =
    "https://pokeapi.co/api/v2/pokemon-species/" + pokemonIndex + "/";
  try {
    const response = await fetch(urlSpecies);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    if (Array.isArray(json?.flavor_text_entries)) {
      pokemon.descriptions = filterFlavorTextByLanguage(
        json?.flavor_text_entries
      );
    }
  } catch (error) {
    console.error(error.message);
  }
  try {
    const response = await fetch(urlData);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    pokemon.name = json?.name ? json.name : "";
    if (Array.isArray(json.types)) {
      pokemon.nature = json.types.map((type) => {
        if (type?.type?.name) {
          if (POKEMON_TYPES[type.type.name]) {
            return POKEMON_TYPES[type.type.name];
          }
        }
      });
    }
    pokemon.sprite = json?.sprites?.other?.home.front_default;
    pokemon.spriteShiny = json?.sprites?.other?.home.front_shiny;
    pokemon.stats = json?.stats;
    //console.log(pokemon);
    setPokemon(pokemon);
  } catch (error) {
    console.error(error.message);
  }
}

export default function useGetPokemonData(pokemonIndex) {
  const [pokemon, setPokemon] = useState();
  const loading = !pokemon ? true : false;

  const load = () => {
    getPokemonData(pokemonIndex, setPokemon);
  };

  return { pokemon, loading, load };
}
