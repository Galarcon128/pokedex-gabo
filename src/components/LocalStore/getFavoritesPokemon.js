export default function getFavoritesPokemon() {
  let favorites = localStorage.getItem("favorites");
  if (favorites !== null) {
    return [...favorites.split(",")];
  }
  return [];
}
