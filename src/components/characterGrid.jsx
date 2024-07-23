import { useState } from "react";
import Card from "./characterCard";
import "../styles/grid.css";

export default function GameGrid({ allCharacter, score, indexHandlers }) {
  const { index, updateIndex } = indexHandlers();
  const currentPlayer = allCharacter[index];
  const { handleScoreUpdate, updateBestScore } = score;
  const [layout, setLayout] = useState([...allCharacter]);

  function checkSelection(event) {
    console.log(typeof currentPlayer._id);
    const { dataset } = event.currentTarget;
    console.log(event.currentTarget);
    if (Number.parseInt(dataset.key) === currentPlayer._id) {
      handleScoreUpdate();
      console.log("yess");
      updateIndex();
      shuffleLayout()
    } else {
      updateBestScore();
      console.log("Wronggg");
    }
  }
  
  function shuffleLayout() {
    const array = [...layout]
    const lastItem = array.pop();
    const firstItem = array.shift();
    const midpoint = Math.floor(array.length / 2);
    

    return setLayout([
      ...array.slice(0, midpoint).reverse(),
      ...array.slice(midpoint).reverse(),
      lastItem,
      firstItem,
    ]);

  }
  return (
    <div className="grid">
      {layout.map((item, index) => (
        <Card
          character={item}
          index={index}
          key={index}
          onclick={checkSelection}
        />
      ))}
    </div>
  );
}
