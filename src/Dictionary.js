import React, { useState } from "react";

import Results from "./Results";
import HomePage from "./HomePage";

export default function Dictionary() {
  const [submitedKeyWord, setSubmitedKeyWord] = useState("");

  if (submitedKeyWord) {
    return (
      <Results
        submitedKeyWord={submitedKeyWord}
        setSubmitedKeyWord={setSubmitedKeyWord}
      />
    );
  }

  return <HomePage setSubmitedKeyWord={setSubmitedKeyWord} />;
}
