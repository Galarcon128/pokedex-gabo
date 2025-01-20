import "./style.css";
import { getFavoritesPokemon } from "../../LocalStore";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function Favorites({ isDesktop = false }) {
  const [favorites, setFavorites] = useState(getFavoritesPokemon());

  useEffect(() => {
    const handleStorageChange = (event) => {
      setFavorites(getFavoritesPokemon());
    };
    window.addEventListener("localStorageChange", handleStorageChange);
    return () => {
      window.removeEventListener("localStorageChange", handleStorageChange);
    };
  }, []);

  return (
    <div
      style={{
        height: `calc(100${isDesktop ? "%)": "vh - 80px)"} `,
        backgroundColor: "var(--pokedex-color)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {favorites.length === 0 ? (
        <div className="fv-display-disable"style={{height: `calc(100${isDesktop ? "% - 20px)": "vh - 80px - 40px)"}`}}>
          <h1>NO HAY FAVORITOS</h1>
          <box-icon name="heart"></box-icon>
        </div>
      ) : (
        <div className="fv-display-active grid-container" style={{height: `calc(100${isDesktop ? "% - 20px)": "vh - 80px - 40px)"}`}}>
          {favorites.map((fav, i) => {
            return (
              <div key={"itemGrid_" + i}>
                <Card pokemonIndex={fav} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
