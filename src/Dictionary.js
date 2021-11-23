import React, { useState } from "react";
import logo from "./undraw_book_lover_re_rwjy.svg";

export default function Dictionary() {
  const [keyword, setKeyWord] = useState("");
  function search(event) {
    event.preventDefault();
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="search" onSubmit={search}>
        <input
          className="text-box"
          type="search"
          placeholder="Type your word"
          onChange={handleKeywordChange}
        ></input>
        <button type="submit"> 🔍</button>
      </form>
      <img src={logo} alt="Woman looking through a dictionary" />
    </div>
  );
}
