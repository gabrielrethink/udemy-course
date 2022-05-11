import React from "react";
import "./PlayButton.style.css";

const PlayButton = ({ playAction }) => {
  const playOnClickHandler = () => {
    playAction("loading");
    setTimeout(() => {
      playAction("play");
    }, 1000);
  };

  return (
    <button className="rethink" onClick={() => playOnClickHandler()}>
      Play
    </button>
  );
};

export default PlayButton;
