import { initialState } from "../song";

const newMusicArray = (state = initialState, action) => {
  switch (action.type) {
    case "":
      let songInalbum = state.album.Music.findIndex(
        (b) => b.song.id === action.payload.id
      );

      let newMusic = [...state.album.Music];
      if (songInalbum === -1) {
        newMusic.push({
          song: action.payload,
          qty: 1,
        });
      } else {
        newMusic[songInalbum].qty++;
      }

      return {
        ...state,
        album: {
          ...state.album,
          music: newMusic,
        },
      };

    case "REMOVE_FROM_album":
      let newmusicArray = [...state.album.Music];

      if (newMusicArray[action.payload].qty === 1) {
        newMusicArray = newMusicArray.filter((b, i) => i !== action.payload);
      } else {
        newMusicArray[action.payload].qty--;
      }

      return {
        ...state,
        album: {
          ...state.album,
          Music: newMusicArray,
        },
      };

    default:
      return state;
  }
};
