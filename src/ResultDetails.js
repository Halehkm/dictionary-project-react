import React, { useEffect, useState } from "react";
import axios from "axios";

import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function ResultDetails({ submitedKeyWord, setSubmitedKeyWord }) {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("hello");
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${submitedKeyWord}`;

    axios.get(apiUrl).then(handleResponse);
  }, [submitedKeyWord]);

  function handleResponse(response) {
    console.log(response.data[0].phonetics[0].text);
    setResult(response.data[0]);
    setLoading(false);
    /* setResult({
      word: response.data[0].word,
      definition: response.data[0].meanings[0].definitions[0].definition,
      synonym: response.data[0].meanings[0].definitions[0].synonyms,
      antonym: response.data[0].meanings[0].definitions[0].antonyms,
      phonetic: response.data[0].phonetics[0].text,
    }); */
  }

  if (loading) {
    return <p>Looking for the defenition...</p>;
  }

  console.log(result);
  return (
    <div className="Results">
      <h1 className="text-capitalize">{result.word}</h1>
      <Phonetic phonetics={result.phonetic} />
      {result.meanings.map(function (meaning, index) {
        return (
          <Meaning key={index} meaning={meaning} />
        );
      })}

      
      <span>Looking for a different word?</span>
      <button onClick={() => setSubmitedKeyWord("")}> Reset </button>
    </div>
  );
}
