import React, { useEffect, useState } from "react";
import axios from "axios";

import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function ResultDetails({ submitedKeyWord, setSubmitedKeyWord }) {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${submitedKeyWord}`;

    axios.get(apiUrl).then(handleResponse);
  }, [submitedKeyWord]);

  function handleResponse(response) {
    setResult(response.data[0]);
    setLoading(false);
  }

  if (loading) {
    return <p>Searching for the defenition...</p>;
  }

  return (
    <div className="Results">
      <h1 className="text-capitalize">{result.word}</h1>
      {result.phonetics.map(function (phonetics, index) {
        return <Phonetic key={index} phonetics={phonetics} />;
      })}

      {result.meanings.map(function (meaning, index) {
        return <Meaning key={index} meaning={meaning} />;
      })}

      <span>Change the page?</span>
      <button className="button" onClick={() => setSubmitedKeyWord("")}>
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}
