import React, { useEffect } from "react";
import {
  SecretWordStart,
  SecretWordGame,
  SecretWordLoading,
  SecretWordResult,
} from "../../components";
import "./SecretWord.style.css";
import { useState } from "react";

export default function SecretWord() {
  const [secretWord, setSecretWord] = useState("");
  const [stage, setStage] = useState("start");
  const [result, setResult] = useState("");

  const stages = {
    start: <SecretWordStart newWord={setSecretWord} setGameState={setStage} />,
    loading: <SecretWordLoading />,
    play: (
      <SecretWordGame
        setGameStage={setStage}
        secretWord={secretWord}
        setResult={setResult}
      />
    ),
    over: (
      <SecretWordResult
        secretWord={secretWord}
        setGameStage={setStage}
        result={result}
      />
    ),
  };

  return stages[stage];
}
