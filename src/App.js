import { useState, useEffect } from "react";
import "./styles.css";
import NavBar from "./components/NavBar";
import Cover from "./components/Cover";
import Display from "./components/Display";
import { BrowserRouter } from "react-router";
import PokeBrowser from "./components/Display/PokeBrowser";
import Favorites from "./components/Display/Favorites";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkDevice() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileUserAgent =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent
        );

      const width = window.innerWidth;
      const ratio = window.devicePixelRatio || 1;
      const adjustedWidth = width / ratio;

      setIsMobile(isMobileUserAgent || adjustedWidth <= 768);
    }

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isMobile;
}

export default function App() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div className="wallpaper">
        <BrowserRouter>
          <div className="pokedex-container">
            <div
              style={{
                width: "30%",
                maxWidth: dimensions.height - 200 + "px",
              }}
            >
              <NavBar desktop />
              <PokeBrowser isDesktop />
            </div>
            <div
              style={{
                marginTop: "80px",
                width: "30%",
                maxWidth: dimensions.height - 200 + "px",
              }}
            >
              <Favorites />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Cover>
          <div style={{ position: "relative" }}>
            <div className="display-layout" />
            <Display />
          </div>
        </Cover>
      </BrowserRouter>
    </div>
  );
}
