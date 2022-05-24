import { combineReducers } from "redux";

//Song list reducer
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "5:05" },
    { title: "Macarena", duration: "3:05" },
    { title: "All star", duration: "4:05" },
    { title: "I want it that way", duration: "1:25" },
  ];
};

// Selected song reducer
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
