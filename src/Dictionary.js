import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./undraw_book_lover_re_rwjy.svg";

export default function Dictionary() {
  const [keyword, setKeyWord] = useState("");

  useEffect(() => {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }, [keyword]);

  function handleResponse(response) {
    console.log(response);
  }

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
