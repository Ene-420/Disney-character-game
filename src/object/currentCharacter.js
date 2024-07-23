import { useState } from "react";
import generateRandomNumber from "./randNumberGen";
import useCharacter from "./character";

export default function useCurrentCharacter() {
  const { rand } = generateRandomNumber();
    const { allCharacters} = useCharacter()
  const [player, setPlayer] = useState(
    allCharacters[rand(0, allCharacters.length - 1)],
  );

  function updateCurrentPlayer() {
    setPlayer(allCharacters[rand(0, allCharacters.length - 1)]);
  }

  return {player, updateCurrentPlayer};
}
