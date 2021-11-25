import React, { useEffect } from "react";
import axios from "axios";

export default function Results({ submitedKeyWord, setSubmitedKeyWord }) {
  useEffect(() => {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${submitedKeyWord}`;

    axios.get(apiUrl).then(handleResponse);
  }, [submitedKeyWord]);

  function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }
  return (
    <div className="Results">
      <button onClick={() => setSubmitedKeyWord("")}> Reset </button>
    </div>
  );
}
