import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="Dictionary">
          <Dictionary />
        </div>
        <footer>
          Haleh Motlagh -
          <a href="https://github.com/Halehkm/dictionary-project-react">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
