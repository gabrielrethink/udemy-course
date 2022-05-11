import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

import "./SecretWordGame.style.css";

function SecretWordGame({ setGameStage, secretWord, setResult }) {
  const [letters, setLetters] = useState(secretWord.toUpperCase().split(""));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetter, setWrongLetter] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [score, setScore] = useState(5);

  const heartsMaker = () => {
    let icons = [];
    for (let index = 0; index < score; index++) {
      icons = [
        ...icons,
        <span key={index}>
          <FaHeart />
        </span>,
      ];
    }

    return icons;
  };

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    if (uniqueLetters.length === guessedLetters.length) {
      setGameStage("over");
      setResult("User Wins");
      return;
    }
    if (score === 0) {
      setResult("User Loses");
      setGameStage("over");
      return;
    }
  }, [score, guessedLetters]);

  const onChangeInputHandler = (e) => {
    setInputValue(e.target.value.toLocaleUpperCase());
  };

  const verifyLetter = (letter) => {
    if (letter.match(/[A-Z]/) || "") {
      setError("");
      return false;
    } else {
      setError(`'${letter}' não é uma letra`);
      return true;
    }
  };

  const onSubmitFormHandler = (letter) => {
    if (verifyLetter(letter)) return;
    if (guessedLetters.includes(letter) || wrongLetter.includes(letter)) {
      setError(`'${letter}' você já tentou`);
      setInputValue("");
      return;
    }
    if (letters.includes(letter) && !guessedLetters.includes(letter)) {
      setGuessedLetters((prevValue) => [...prevValue, letter]);
    } else {
      console.log("Entra aqui");
      setScore((prevValue) => {
        prevValue--;
        return prevValue;
      });
      setWrongLetter((prevValue) => [...prevValue, letter]);
    }

    setInputValue("");
  };

  return (
    <div className="main">
      <h1>Descubra a Palavra</h1>
      <p className="lifes">{heartsMaker().map((item) => item)} </p>
      <div className="word">
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <div className="letter" key={index}>
              <h1>{letter}</h1>
            </div>
          ) : (
            <div className="letter" key={index}>
              <h1>{""}</h1>
            </div>
          )
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitFormHandler(e.target.letter.value);
        }}
      >
        <input
          className={"rethink insert"}
          type="text"
          name="letter"
          maxLength="1"
          value={inputValue}
          onChange={(e) => onChangeInputHandler(e)}
          required
        />
        <button className="insert rethink">Enviar Letra</button>
        {error && <h2 className="error">{error}</h2>}
      </form>
      <h2>Letras já usadas</h2>
      <p>{wrongLetter.map((letter) => letter + " ")} </p>
    </div>
  );
}

export default SecretWordGame;
