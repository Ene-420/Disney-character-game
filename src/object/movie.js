// maybe implement singleton pattern here to ensure single instance

export default class Movie{
    constructor(name, films, shortFilms, tvShows, videoGames, img) {
        this.name = name
        this.shortFilms = shortFilms
        this.films = films
        this.tvShows = tvShows
        this.videoGames = videoGames
        this.img = img
    }

    
}