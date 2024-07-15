import { useState } from "react"
import { sortUserPlugins } from "vite"

export const score = ()=>{
    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(currentScore)

    function handleScoreUpdate(){
        setCurrentScore(prevScore => {
            const newScore = prevScore + 1
            updateBestScore(newScore);
        })
        
    }

    function updateBestScore(newScore) { 
        setBestScore(prevBestScore => newScore > prevBestScore ? newScore : prevBestScore  )
        // if (currentScore > bestScore) {
        //     setBestScore(currentScore)
        //     return true
        // }
        // return false
    }

    return {currentScore, bestScore, handleScoreUpdate}
}

