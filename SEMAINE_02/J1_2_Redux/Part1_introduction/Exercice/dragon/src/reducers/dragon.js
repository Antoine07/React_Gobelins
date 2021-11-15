import { ADD_DRAGON, DELETE_DRAGON, SET_DRAGON } from "../constants/actions";

// source de vérité de l'application
const stateInit = {
  dragons: ["Apalala", "Balaur", "Bolla"],
  dragon: "",
  count: 3,
  message: "",
};

const reducer = (state = stateInit, action = {}) => {
  let dragon, dragons;

  switch (action.type) {
    case SET_DRAGON:
      dragon = action.payload;

      return {
        ...state,
        dragon,
        message: "",
      };

    case ADD_DRAGON:
      dragon = state.dragon;

      if (dragon.trim() === "") {
        return {
          ...state,
          message: "Attention le champ est vide",
        };
      }

      if (state.dragons.includes(dragon) === true) {
        return {
          ...state,
          message: `Attention ce dragon (${dragon}) existe déjà `,
          dragon: "",
        };
      }

      // copie peu profonde ici
      // dragons = state.dragons.concat(dragon); // nouveau tableau également
      dragons = [...state.dragons, dragon];

      return {
        ...state,
        dragon: "",
        dragons,
        count: state.count + 1,
        message: `Merci pour l'ajout de votre dragon ${dragon}`,
      };

    case DELETE_DRAGON:
      dragon = action.payload;

      console.log(dragon)

      dragons = [...state.dragons];

      dragons = dragons.filter((d) => d !== dragon);

      return {
        ...state,
        dragons,
        message : `Le dragon ${dragon} a été supprimer avec succès.`,
        count : state.count - 1
      };

    default:
      return state;
  }
};

export default reducer;
