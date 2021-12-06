import React, { useState } from "react";

import HomePage from "./HomePage";
import Photos from "./Photos";
import ResultDetails from "./ResultDetails";

export default function Dictionary() {
  const [submitedKeyWord, setSubmitedKeyWord] = useState("");

  if (submitedKeyWord) {
    return (
      <>
        <ResultDetails
          submitedKeyWord={submitedKeyWord}
          setSubmitedKeyWord={setSubmitedKeyWord}
        />
        <Photos
          submitedKeyWord={submitedKeyWord}
          setSubmitedKeyWord={setSubmitedKeyWord}
        />
      </>
    );
  }

  return <HomePage setSubmitedKeyWord={setSubmitedKeyWord} />;
}
