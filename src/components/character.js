import fetchDisneyCharacterData from "../functions/disneyCharacteracters";
import Movie from "../object/movie";

export default async function getCharacters() {
    try {
        const data = await fetchDisneyCharacterData();
        if (data) {
            const characterData = [];
            data.data.forEach((item) => {
              const character = new Movie(
                item.name,
                item.films,
                item.shortFilms,
                item.tvShows,
                item.videoGames,
                item.imageUrl,
              );
              characterData.push(character);
            });

            return characterData
        }

    } catch (error) {
        console.error('Error Message: ', error)        
    }
    


}