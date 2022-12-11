import React from "react";

interface ScoreProps {
  currentScore: number;
}
const Score: React.FC<ScoreProps> = ({ currentScore }) => {
  return (
    <div className="score-container">
      <div className="score-value">{!currentScore ? 0 : currentScore}</div>
      <div className="score-dongles">
        <div className="decor-x">x</div>
        <div className="score-label">Score</div>
        <div className="decor-x">x</div>
      </div>
    </div>
  );
};

export default Score;
