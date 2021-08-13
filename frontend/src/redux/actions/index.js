export const addAction = (song) => ({
  type: "ADD_TO_CART",
  payload: song,
});

export const removeAction = (index) => ({
  type: "REMOVE_FROM_CART",
  payload: index,
});

export const setUserNameAction = (name) => ({
  type: "SET_USERNAME",
  payload: name,
});
