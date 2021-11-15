import {
    ADD_DRAGON
} from "../constants/actions";

// source de vérité de l'application
const stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"
    ],
    dragon: '',
    count: 3,
    message: ''
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {


        default:
            return state;
    }
}

export default reducer;