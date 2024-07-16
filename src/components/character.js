import fetchDisneyCharacterData from "../functions/disneyCharacteracters";
import Movie from "../object/movie";

export default async function getCharacters() {
  try {
    const data = await fetchDisneyCharacterData();
    if(data) return filterData(data)
    // if (data) {
    //   const characterData = data.data.map(
    //     (item) =>
    //       new Movie(
    //         item.name,
    //         item.films,
    //         item.shortFilms,
    //         item.tvShows,
    //         item.videoGames,
    //         item.imageUrl,
    //       ),
    //   );

    //   return characterData;
    // }
  } catch (error) {
    console.error("Error Message: ", error);
  }
}

function filterData(data) {
  return data.data.map(
    (item) =>
      new Movie(
        item.name,
        item.films,
        item.shortFilms,
        item.tvShows,
        item.videoGames,
        item.imageUrl,
      ),
  );

}
