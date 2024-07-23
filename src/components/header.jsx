import { useEffect, useState } from "react";

export default function Header({ allCharacters, score, index }) {
  const [question, setQuestion] = useState("");
  const { currentScore, bestScore, handleScoreUpdate } = score;

  let feature = "";

  function checkCurrentCharacter(character) {
    feature = "";

    if (character) {
      console.log("We got here");
      if (Array.isArray(character.films) && character.films.length > 0) {
        console.log("We got here to films");
        addToFeature(character.films);
      } else if (
        Array.isArray(character.shortFilms) &&
        character.shortFilms.length > 0
      ) {
        console.log("We got here to short films");
        addToFeature(character.shortFilms);
      } else if (
        Array.isArray(character.tvShows) &&
        character.tvShows.length > 0
      ) {
        console.log("We got here to tvshows");
        addToFeature(character.tvShows);
      } else if (
        Array.isArray(character.videoGames) &&
        character.videoGames.length > 0
      ) {
        console.log("We got here to video games");
        addToFeature(character.videoGames);
      }
    } else console.log("didn't work");
  }

  function addToFeature(array) {
    console.log({ array });
    array.forEach((item) => (feature += item));
    console.log({ feature });
    setQuestion(feature);
  }

  useEffect(() => {
    let currentPlayer = allCharacters[index];
    console.log({ currentPlayer });
    checkCurrentCharacter(currentPlayer);
  }, [index, score]);

  return (
    <div>
      {question ? (
        <>
          <h2>Disney Character Game</h2>
          <div>
            <div>
              <h2>Can You Guess the Disney Character ?</h2>

              <h2>This Disney Character Appears in {question} </h2>
            </div>
            <div>
              <h3>Score:{currentScore}</h3>
              <h3>Best Score:{bestScore}</h3>
            </div>
          </div>
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
