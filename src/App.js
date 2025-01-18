import "./styles.css";
import NavBar from "./components/NavBar";
import Cover from "./components/Cover";
import Display from "./components/Display";
import { BrowserRouter } from "react-router";

export default function App() {
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
