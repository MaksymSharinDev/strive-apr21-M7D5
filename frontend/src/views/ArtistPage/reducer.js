import {initialState} from "../../store"

const artistReducer = ( state = initialState.artist , action ) => {
    let { type , payload } = action
    switch ( type ){
        // case '': return
        case 'SET_CURRENT_ARTIST':
            let current = payload
            return {
                ...state,
                current
            }
        default:
            return state
    }
}
export default artistReducer

