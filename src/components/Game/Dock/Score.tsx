import React, { useEffect, useState } from "react";

interface ScoreProps {
  currentScore: number;
}
const Score: React.FC<ScoreProps> = ({ currentScore }) => {
  return <div>Score: {currentScore}</div>;
};

export default Score;
