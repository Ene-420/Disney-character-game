import { useEffect, useState } from "react";
import Movie from "./movie";

export default function useCharacter() {
  //const [currentCharacter, setCurrentCharacter] = useState(null);
  const [allCharacters, setAllCharacters] = useState([]);

  //fetchCardData();

  //   useEffect(() => {
  //     updateAvailablePlayers();
  //   }, [currentCharacter]);

  async function fetchCardData() {
    try {
      const response = await fetch(
        "https://api.disneyapi.dev/character?pageSize=20",
      );
      if (!response.ok) throw new Error("Couldn't Retrieve Data");
      const data = await response.json();
      const responseData = data.data.map(
        (item) =>
          new Movie(
            item._id,
            item.name,
            item.films,
            item.shortFilms,
            item.tvShows,
            item.videoGames,
            item.imageUrl,
          ),
      );
      // console.log(responseData);
      setAllCharacters(responseData);
      //setCurrentCharacter(responseData[0]);

      //console.log({ currentCharacter });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    fetchCardData();
   // console.log({ allCharacters });
  }, []);

  //update av
  function updateAvailablePlayers(index) {
    setAllCharacters((prevAvailablePlayers) =>
      prevAvailablePlayers.filter((item) => item._id != index),
    );
  }

  return {
    //currentCharacter,
    allCharacters,
    updateAvailablePlayers,
    //updateCurrentCharacter,
  };
}
