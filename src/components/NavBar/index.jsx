import Style from "./style.module.css";
import "boxicons";

export default function NavBar() {
  return (
    <div className={Style.layout}>
      <div className={Style.indicador}></div>
      <div className={Style.stateLeds}>
        <div className={Style.LRed + " " + Style.stateLed}>
          <box-icon name="home-alt-2" color="#ffffff"></box-icon>
        </div>
        <div className={Style.LYellow + " " + Style.stateLed}>
          <box-icon name="heart" color="#ffffff"></box-icon>
        </div>
        <div className={Style.LGreen + " " + Style.stateLed}>
          <box-icon name="help-circle" color="#ffffff"></box-icon>
        </div>
      </div>
    </div>
  );
}
