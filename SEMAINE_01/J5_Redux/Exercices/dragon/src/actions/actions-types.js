import { ADD_DRAGON, SET_DRAGON, DELETE_DRAGON, REVERSE_DRAGON } from '../constants/actions';

// payload correspond à ce que vous allez passer comme valeur à votre action { ... name : "Super dragon", force : 10 }
export const addDragon = () => {
    return {
        type: ADD_DRAGON
    }
};

export const setDragon = payload => {
    return {
        type: SET_DRAGON, payload
    }
};

export const deleteDragon = payload => {
    return {
        type: DELETE_DRAGON, payload
    }
};

export const reverseDragon = () => {
    return {
        type: REVERSE_DRAGON
    }
};