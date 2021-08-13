import {fetchAlbum, fetchArtist, fetchMusic} from "./index";

/*
export const fetchMusicAction = (query) => {
    return async (dispatch) => {
        try {
            let results = await fetchMusic(query)
            let type = 'FETCH_MUSIC'
            let payload =
                [{
                    query,
                    results,
                }]
            dispatch({ type, payload })

        } catch (error) { console.log(error) }
    };
};*/

export const fetchPushMusicAction = (query) => {
    return async (dispatch) => {
        try {
            let results = await fetchMusic(query)
            let type = 'FETCH_PUSH_MUSIC'
            let payload =
                [{
                    query,
                    results,
                }]
            dispatch({ type, payload })

        } catch (error) { console.log(error) }
    };
};

export const fetchAlbumAction = (id) => {
    return async (dispatch) => {
        try {
            let type = 'FETCH_ALBUM'
            let payload = await fetchAlbum(id)
            dispatch({ type, payload })
        } catch (error) { console.log(error) }
    };
};

export const fetchArtistAction = (id) => {
    return async (dispatch) => {
        try {
            let type = 'FETCH_ARTIST'
            let payload = await fetchArtist(id)
            dispatch({ type, payload })
        } catch (error) { console.log(error) }
    };
};