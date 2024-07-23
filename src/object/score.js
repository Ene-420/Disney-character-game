import { useState } from "react";

export default function useScore() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(currentScore);

  function handleScoreUpdate() {
    setCurrentScore((prevScore) => prevScore + 1);
    //updateBestScore(currentScore);
  }

  function updateBestScore(newScore) {
    setBestScore((prevBestScore) =>
      newScore > prevBestScore ? newScore : prevBestScore,
    );
    // if (currentScore > bestScore) {
    //     setBestScore(currentScore)
    //     return true
    // }
    // return false
  }

  return { currentScore, bestScore, handleScoreUpdate, updateBestScore };
}
