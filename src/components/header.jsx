import { useState } from "react";

export default function Header({ character, score }) {
  //const { character, getScore} = content();
  //console.log({character})
  const { currentScore, bestScore, handleScoreUpdate } = score;
  //console.log(character())
  const {
    currentCharacter,
    availableCharacters,
    updateAvailableCharacters,
    updateCurrentCharacter,
  } = character();

  //console.log(updateAvailableCharacters())
  let feature = "";
  // function updateBestScore() {
  //     if (currentScore > bestScore) {
  //         setBestScore(currentScore)
  //         return true
  //     }
  //     else return false
  // }
  function checkCurrentCharacter() {
    feature = "";
    if (currentCharacter.films.length > 0) {
      addToFeature(currentCharacter.films);
    } else if (currentCharacter.shortFilms.length > 0)
      addToFeature(currentCharacter.shortFilms);
    else if (currentCharacter.tvShows.length > 0)
      addToFeature(currentCharacter.tvShows);
    else if (currentCharacter.videoGames > 0)
      addToFeature(currentCharacter.videoGames);
  }

  function addToFeature(array) {
    array.forEach((item) => (feature += item));
  }
  return (
    <div>
      <h2>Disney Character Game</h2>
      <div>
        <div>
          <h2>Can You Guess the Disney Character ?</h2>
          {checkCurrentCharacter()}
          <h2>This Disney Character Appears in {feature} </h2>
        </div>
        <div>
          <h3>Score:{currentScore}</h3>
          <h3>Best Score:{bestScore}</h3>
        </div>
      </div>
    </div>
  );
}
