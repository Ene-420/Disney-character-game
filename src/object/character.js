import { useEffect, useState } from "react";
import Movie from "./movie";

export default function useCharacter() {
  const [allCharacters, setAllCharacters] = useState([]);

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

      setAllCharacters(responseData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    fetchCardData();
  }, []);

  return {
    allCharacters,
  };
}
