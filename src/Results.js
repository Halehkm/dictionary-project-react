import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Results({ submitedKeyWord, setSubmitedKeyWord }) {
  const [result, setResult] = useState({});
  useEffect(() => {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${submitedKeyWord}`;

    axios.get(apiUrl).then(handleResponse);
  }, [submitedKeyWord]);

  function handleResponse(response) {
    console.log(response);
    setResult({
      word: response.data[0].word,
      definition: response.data[0].meanings[0].definitions[0].definition,
      synonym: response.data[0].meanings[0].definitions[0].synonyms,
      antonym: response.data[0].meanings[0].definitions[0].antonyms,
    });
  }
  return (
    <div className="Results">
      <h1 className="text-capitalize">{result.word}</h1>
      <img
        src=""
        alt="picture of sunset"
      />
      <hr></hr>
      <p className="text-capitalize">{result.definition}</p>
      <ul>
        <li>{result.synonym}</li>
        <li>{result.antonym}</li>
        <li>Images</li>
      </ul>
      <span>Looking for a different word?</span>
      <button onClick={() => setSubmitedKeyWord("")}> Reset </button>
    </div>
  );
}
