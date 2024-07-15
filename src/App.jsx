import { useState } from "react";
import getCharacters from "./components/character";
import Header from "./components/header";
import GameGrid from "./components/characterGrid";

export default function App() {
  //score and character
  //const [score, setScore] = useState(0);
  const [currentCharacter, setCurrentCharacter] = useState(characters[0]);
  const [availableCharacters, setAvailableCharacters] = useState([
    ...characters,
  ]);
  const characters = getCharacters();

  function updateCurrentCharacter() {
    setAvailableCharacters(
      availableCharacters.filter((item) => item.id != currentCharacter.id),
    );
    setCurrentCharacter();
    setAvailableCharacters(availableCharacters.in);
  }
  const content = () => {
    return;
  };
  return (
    <>
      <Header />
      <GameGrid />
    </>
  );
}
