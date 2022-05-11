import React from "react";
import "./SecretWordResult.style.css";

function SecretWordWin({ secretWord, setGameStage, result }) {
  return (
    <div className="main">
      {result === "User Wins" ? (
        <h1 className="rethink">Você Ganhou </h1>
      ) : (
        <h1 className="error">Você Perdeu </h1>
      )}
      <h1>The Word Was : {secretWord}</h1>
      <form>
        <button
          className="rethink play-again"
          onClick={() => {
            setGameStage("start");
          }}
        >
          Play Again?
        </button>
      </form>
    </div>
  );
}

export default SecretWordWin;
