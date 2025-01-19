export default function saveFavoritePokemon(pokemonIndex) {
  let favorites = localStorage.getItem("favorites");
  if (favorites === null) {
    localStorage.setItem("favorites", pokemonIndex + "");
  } else {
    let favs = favorites.split(",");
    if (!favs.find((i) => i == pokemonIndex)) {
      localStorage.setItem("favorites", [...favs, pokemonIndex]);
    }
  }
}
