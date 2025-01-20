import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {
  saveFavoritePokemon,
  getFavoritesPokemon,
  deleteFavoritePokemon,
} from "../../LocalStore";
import { useState } from "react";

const N_POKEMONS = 1024;

export default function Controls({ pokemonIndex, setPokemonIndex = () => {} }) {
  const [fav, setFav] = useState(getFavoritesPokemon());
  const handleNext = () => {
    if (pokemonIndex === N_POKEMONS) {
      setPokemonIndex(1);
    } else {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  const handlePrev = () => {
    if (pokemonIndex === 1) {
      setPokemonIndex(1024);
    } else {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  const handleFavorite = () => {
    if (fav.find((i) => i == pokemonIndex)) {
      deleteFavoritePokemon(pokemonIndex);
    } else {
      saveFavoritePokemon(pokemonIndex);
    }

    setFav(getFavoritesPokemon());
  };
  return (
    <div className="pb-controls">
      <Stack spacing={2} direction="row">
        <Button onClick={handlePrev} variant="contained">
          Anterior
        </Button>

        <Button onClick={handleNext} variant="contained">
          Siguiente
        </Button>
      </Stack>
    </div>
  );
}
