import { useState } from "react";
import {
  saveFavoritePokemon,
  getFavoritesPokemon,
  deleteFavoritePokemon,
} from "../LocalStore";
import { speakText } from "./Description/Resume";

export default function Options({ pokemonIndex, pokemon }) {
  const [fav, setFav] = useState(getFavoritesPokemon());

  const handleFavorite = () => {
    if (fav.find((i) => i == pokemonIndex)) {
      deleteFavoritePokemon(pokemonIndex);
    } else {
      saveFavoritePokemon(pokemonIndex);
    }
    setFav(getFavoritesPokemon());
  };

  return (
    <div className="pc-options">
      <button
        className="pc-detaills pc-option"
        onClick={() => {
          console.log("hola");
          speakText(
            pokemon.name + " " + getRandomElement(pokemon.descriptions)
          );
        }}
      >
        <box-icon type="solid" name="chat"></box-icon>
      </button>
      <button className="pc-favorite pc-option" onClick={handleFavorite}>
        <box-icon
          name="star"
          type={fav.find((i) => i == pokemonIndex) ? "solid" : "regular"}
          color="#ffe000"
        />
      </button>
    </div>
  );
}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
