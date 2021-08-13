import {initialState} from "../store";

export const apiReducer =
    (state = initialState.apiData, action) => {
        const {type, payload} = action;
        switch (type) {

            case 'FETCH_PUSH_MUSIC':
                let musicObjs = state.musicObjs
                musicObjs.push({
                    query: payload[0].query,
                    results: payload[0].results,
                })
                return {
                    ...state,
                    musicObjs
                }
            case 'FETCH_ALBUM':
                return {
                    ...state,
                    albumObj: payload
                }
            case 'FETCH_ARTIST':
                return {
                    ...state,
                    artistObj: payload
                }
            default:
                return state
        }


    }