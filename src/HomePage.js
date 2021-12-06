import React, { useState } from "react";

import logo from "./undraw_book_lover_re_rwjy.svg";

export default function HomePage({ setSubmitedKeyWord }) {
  const [keyword, setKeyWord] = useState("");

  function search(event) {
    event.preventDefault();
    setSubmitedKeyWord(keyword);
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <>
      {" "}
      <form className="search" onSubmit={search}>
        <input
          className="button"
          type="search"
          name="word"
          placeholder="Type your word"
          value={keyword}
          onChange={handleKeywordChange}
        ></input>
        <button className="find-button" type="submit">
          {" "}
          🔍
        </button>
      </form>
      <h5>Let's flip the page to: {keyword}</h5>
      <img src={logo} alt="Woman looking through a dictionary" />
    </>
  );
}
