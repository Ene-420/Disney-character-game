import Movie from "../object/movie";

export default async function fetchDisneyCharacterData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Invalid Response, Please try again");

      const data = await response.json();
      return filterData(data)
      
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
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

