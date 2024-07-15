import { useState } from "react";

export default function Header({ content }) {
    const [bestScore setBestScore] = useState(0)
    const { currentScore, handleScoreChange } = content();
    
    function updateBestScore() {
        if (currentScore > bestScore) {
            setBestScore(currentScore)
            return true
        }
        else return false
    }
  return (
    <div>
      <h2>Disney Character Game</h2>
      <div>
        <div>
          <h2>Can You Guess the Disney Character ?</h2>
          <h2>This Disney Character Appeared in </h2>
        </div>
        <div>
          Score:{currentScore}
          Best Score:{bestScore}
        </div>
      </div>
    </div>
  );
}
