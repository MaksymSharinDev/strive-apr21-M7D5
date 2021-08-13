export const fetchMusic = async(query) => { //query is a string
    //https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    let music = await response.json()
    return music.data
}

export const fetchAlbum = async(id) => { //id is a string
    //https://striveschool-api.herokuapp.com/api/deezer/album/{id} API.
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
    let album = await response.json()
    return album
}

export const fetchArtist = async(id) => { //id is a string
    //https://striveschool-api.herokuapp.com/api/deezer/artist/{id}
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`)
    let artist = await response.json()
    let url = artist.tracklist
    let track_res = await fetch(url)
    let tracks = await track_res.json()
    let albums = tracks.data.map((song)=> song.album )
    artist = {
        ...artist,
        tracklist: tracks.data,
        albums: albums
    }
    return artist
}