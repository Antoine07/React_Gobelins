import { ADD_DRAGON, SET_DRAGON } from "../constants/actions";

export const set_dragon = payload => {

    return {
        type: SET_DRAGON, payload
    }
}

export const add_dragon = () => {

    return {
        type: ADD_DRAGON
    }
}

// TODO montrer comment faire une copie profonde
export const copyDragonsComplexe = (store) => {

    // logique de copy profonde
}