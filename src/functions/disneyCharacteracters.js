export default async function fetchDisneyCharacterData() {
    try {
        const response = await fetch(
          "https://api.disneyapi.dev/character?pageSize=20",
        );
        if (!response.ok) throw new Error('Invalid Response, Please try again')
        else {
            return await response.json()    
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}