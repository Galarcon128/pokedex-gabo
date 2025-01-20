import updateLocalStorage from "./updateFavoritePokemon";

export default function deleteFavoritePokemon(pokemonIndex) {
  let favorites = localStorage.getItem("favorites");
  if (favorites !== null) {
    let favs = favorites.split(",").filter((i) => i != pokemonIndex);
    localStorage.setItem("favorites", [...favs]);
    setTimeout(updateLocalStorage, 100);
  }
}
