import React from "react";
import { useLocation } from "react-router-dom";

const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div className="game-root">
      <h1 className="game-title">Game Page</h1>
      <p className="game-sub">
        Selected Difficulty: <span className="neon-label">{difficulty}</span>
      </p>
    </div>
  );
};

export default GameScreen;
