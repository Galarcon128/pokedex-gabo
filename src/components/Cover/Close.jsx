import Style from "./style.module.css";
import SliderUnlock from "./SliderUnlock";

export default function CloseCover({ setClose = () => {} }) {
  let userData = undefined;
  return (
    <div className={Style.cover}>
      {userData ? (
        <>userData</>
      ) : (
        <div className={Style.lock}>
          <div>
            <h1 className="text-4xl text-white">Pokedex</h1>
            <SliderUnlock
              onUnlock={() => {
                setClose(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
