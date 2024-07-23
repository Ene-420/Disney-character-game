import { useEffect, useState } from "react";

import Header from "./components/header";
import GameGrid from "./components/characterGrid";


import useScore from "./object/score";
import useCharacter from "./object/character";
import generateRandomNumber from "./object/randNumberGen";

import Loading from "./components/loading";

export default function App() {
  const getScore = useScore();
  const { allCharacters } = useCharacter();

  const { rand } = generateRandomNumber();

  const [index, setIndex] = useState(0);

  function updateIndex() {
    const value = rand(0, allCharacters.length - 1);
    setIndex(value);
  }

  const indexOperations = () => {
    return { index, updateIndex };
  };
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
