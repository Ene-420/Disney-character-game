import { useState } from "react";

export default function useScore() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(currentScore);

  function handleScoreUpdate() {
    setCurrentScore((prevScore) => prevScore + 1);
  }

  function updateBestScore() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
      setCurrentScore(0);
    } else setCurrentScore(0);
  }

  return { currentScore, bestScore, handleScoreUpdate, updateBestScore };
}
