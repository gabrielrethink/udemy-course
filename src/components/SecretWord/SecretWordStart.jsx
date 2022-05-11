import React, { useEffect } from "react";
import { PlayButton } from "../";
import data from "../../data.json";

const SecretWorldStart = ({ newWord, setGameState }) => {
  useEffect(() => {
    const word = data.words[Math.floor(Math.random() * data.words.length)]
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    console.log(word);
    newWord(word);
  }, []);

  return (
    <div className="main">
      <h1> Secret Word Game</h1>
      <p className="rethink">Click no botão PLAY para começar a jogar</p>
      <PlayButton playAction={() => setGameState("play")} />
    </div>
  );
};

export default SecretWorldStart;
