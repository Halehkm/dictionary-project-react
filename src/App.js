import "./App.css";
import logo from "./undraw_book_lover_re_rwjy.svg";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <span className="border ">
          <form className="search">
            <input
              className="text-box"
              type="search"
              placeholder="Type your word"
            ></input>
            <button type="submit"> 🔍</button>
          </form>
          <img src={logo} alt="Woman looking through a dictionary" />
        </span>
      </div>
    </div>
  );
}
