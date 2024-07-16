import { useEffect, useState } from "react";
import getCharacters from "./components/character";
import Header from "./components/header";
import GameGrid from "./components/characterGrid";
import score from "./object/score";
import fetchDisneyCharacterData from "./functions/disneyCharacteracters";

export default function App() {
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [availableCharacters, setAvailableCharacters] = useState([]);
  const getScore = score();

  useEffect(() => {
    fetchDisneyCharacterData(
      "https://api.disneyapi.dev/character?pageSize=20",
    ).then((data) => {
      if (data) {
        console.log({ data });
        setAvailableCharacters(data);
        setCurrentCharacter(data[0]);
      }
    });
  }, []);

  useEffect(() => {
    updateAvailablePlayers();
  }, [currentCharacter]);

  function updateAvailablePlayers() {
    setAvailableCharacters((prevAvailablePlayers) =>
      prevAvailablePlayers.filter((item) => item.id != currentCharacter.id),
    );
  }
  function updateCurrentCharacter() {
    setCurrentCharacter(availableCharacters[0]);
  }
  const character = () => {
    return {
      currentCharacter,
      availableCharacters,
      updateAvailablePlayers,
      updateCurrentCharacter,
    };
  };

  return (
    <>
      <Header character={character}  score={getScore}/>
      {/* <GameGrid /> */}
    </>
  );
}
