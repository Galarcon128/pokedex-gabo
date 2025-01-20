import { useState, useEffect, useRef, createRef } from "react";
import PokemonCard from "../../PokemonCard";
import { FixedSizeList as List } from "react-window";
import Search from "./search";
import "./style.css";

const TOTAL_POKEMONS = 1020;

export default function PokeBrowser() {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );
  const [scrollOffset, setScrollOffset] = useState();
  const [size, setSize] = useState();
  const listRef = useRef();
  const displayDiv = useRef(null);
  let cardHeigth = 300;
  let cardWidth = 187.5;
  if (size) {
    if (isLandscape) {
      cardHeigth = size.height - 10;
    } else {
      cardWidth = size.width - 60;
      cardHeigth = cardWidth * 1.6;
    }
  }
  let itemSize = isLandscape ? cardWidth : cardHeigth + 30;

  useEffect(() => {
    if (Number.isSafeInteger(scrollOffset) && listRef.current) {
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.scrollTo(scrollOffset);
        }
      }, 500);
    }
  }, [scrollOffset]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (displayDiv.current) {
        const { offsetWidth, offsetHeight } = displayDiv.current;
        setSize({ width: offsetWidth, height: offsetHeight });
      }
    });

    if (displayDiv.current) {
      resizeObserver.observe(displayDiv.current);
    }
    return () => {
      if (displayDiv.current) {
        resizeObserver.unobserve(displayDiv.current);
      }
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: landscape)");
    const handleOrientationChange = (event) => {
      const _scrollOffset = Number(localStorage.getItem("browserScrollOffset"));
      setScrollOffset(_scrollOffset);
      setIsLandscape(event.matches);
    };
    mediaQuery.addEventListener("change", handleOrientationChange);
    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  const handleSetIndex = (index) => {
    listRef.current.scrollToItem(index, "center");
  };

  const handleScroll = ({ scrollOffset, clientHeight }) => {
    if (listRef.current) {
      localStorage.setItem("browserScrollOffset", scrollOffset);
    }
  };

  //
  const Card = ({ index, style }) => {
    const pokemonIndex = index + 1;
    return (
      <div style={style}>
        <PokemonCard height={cardHeigth} pokemonIndex={pokemonIndex} />
      </div>
    );
  };

  return (
    <div
      style={{
        height: "calc(100vh - 80px)",
        backgroundColor: "var(--pokedex-color)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div ref={displayDiv} className="pb-display">
        {size && (
          <div>
            <div id="browser-search">
              <Search setPokemonIndex={handleSetIndex} width={size.width} />
            </div>
            <List
              ref={listRef}
              height={isLandscape ? size.height : size.height - 60}
              itemCount={TOTAL_POKEMONS}
              itemSize={itemSize}
              layout={isLandscape ? "horizontal" : "vertical"}
              width={size.width - 5}
              onScroll={handleScroll}
            >
              {Card}
            </List>
          </div>
        )}
      </div>
    </div>
  );
}
