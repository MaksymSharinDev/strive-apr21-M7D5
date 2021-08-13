/*
export const <example>Action = ( exampleParameter ) => ({
  type: 'ACTION_TYPE',
  payload: exampleParameter
})
 */


export const setCurrentAlbumAction = album => ({
    type: 'SET_CURRENT_ALBUM',
    payload: album
})