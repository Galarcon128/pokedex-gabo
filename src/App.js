import "./styles.css";
import NavBar from "./components/NavBar";
import Cover from "./components/Cover";
import Display from "./components/Display";
export default function App() {
  return (
    <div>
      <NavBar />
      <Cover>
        <Display />
      </Cover>
    </div>
  );
}
