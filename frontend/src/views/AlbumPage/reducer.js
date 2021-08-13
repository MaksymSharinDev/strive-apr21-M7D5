import {initialState} from "../../store"

const albumReducer = ( state = initialState.album , action ) => {
    let { type , payload } = action
    switch ( type ){

        case 'SET_CURRENT_ALBUM':
            let current = payload
            return {
                ...state,
                current
            }
        default:
            return state
    }
}
export default albumReducer

