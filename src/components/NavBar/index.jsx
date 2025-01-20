import Style from "./style.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar({ desktop = false }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={Style.layout}>
      <div style={{ position: "relative", width: "90px" }}>
        <div id="nav-indicator" className={Style.indicador}></div>
        <div className={Style.indicadorBack} />
      </div>
      <div className={Style.stateLeds}>
        <div
          onClick={() => {
            navigate("/");
          }}
          className={`${Style.LRed} ${Style.stateLed} ${
            pathname === "/" && !desktop ? Style.select : ""
          }`}
        >
          <box-icon name="home-alt-2" color="#ffffff"></box-icon>
        </div>
        <div
          onClick={() => {
            navigate("./favorites");
          }}
          className={`${Style.LYellow} ${Style.stateLed} ${
            pathname === "/favorites" ? Style.select : ""
          }`}
        >
          <box-icon name="heart" color="#ffffff"></box-icon>
        </div>
        <div
          onClick={() => {
            navigate("./help");
          }}
          className={`${Style.LGreen} ${Style.stateLed} ${
            pathname === "/help" ? Style.select : ""
          }`}
        >
          <box-icon name="help-circle" color="#ffffff"></box-icon>
        </div>
      </div>
    </div>
  );
}
