import React, { useEffect, useState } from "react";

interface ScoreProps {
  currentScore: number;
}
const Score: React.FC<ScoreProps> = ({ currentScore }) => {
  return (
    <div className="score-container">
      <div className="score-value"></div>
      <div className="decor-x">x</div>
      <div className="score-label">Score</div>
      {currentScore} <div className="decor-x">x</div>
    </div>
  );
};

export default Score;
