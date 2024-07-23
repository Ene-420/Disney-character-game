import { useEffect, useState } from "react";
import getCharacters from "./components/character";
import Header from "./components/header";
import GameGrid from "./components/characterGrid";

import fetchDisneyCharacterData from "./functions/disneyCharacteracters";
import Movie from "./object/movie";
import useScore from "./object/score";
import useCharacter from "./object/character";
import generateRandomNumber from "./object/randNumberGen";
import useCurrentCharacter from "./object/currentCharacter";
import Loading from "./components/loading";

export default function App() {
  const getScore = useScore();
  const { allCharacters } = useCharacter();
  //const { player } = useCurrentCharacter(allCharacters)
  const { rand } = generateRandomNumber();

  const [index, setIndex] = useState(0);

  //const currentPlayer = allCharacters[rand(0,allCharacters.length-1)]

  function updateIndex() {
    const value = rand(0, allCharacters.length - 1);
    setIndex(value);
  }

  // useEffect(() => {
  //   updateIndex();
  // }, []);
  const indexOperations = () => {
    return {index, updateIndex}
  }
  console.log(allCharacters[index]);

  return (
    <>
      {allCharacters[index] ? (
        <>
          <Header
            allCharacters={allCharacters}
            score={getScore}
            index={index}
          />
          <GameGrid
            allCharacter={allCharacters}
            score={getScore}
            indexHandlers={indexOperations}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
