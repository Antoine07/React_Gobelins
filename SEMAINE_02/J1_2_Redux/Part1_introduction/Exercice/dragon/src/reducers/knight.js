import {} from "../constants/actions";

// source de vérité de l'application
const stateInit = {
  knights: [
    {
      id: 19,
      name: "Alan",
    },
    {
      id: 12,
      name: "Alice",
    },
  ],
};

const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
