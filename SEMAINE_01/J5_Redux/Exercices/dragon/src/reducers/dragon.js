import { ADD_DRAGON, DELETE_DRAGON, REVERSE_DRAGON, SET_DRAGON } from '../constants/actions';

// initialisation des states : SOURCE DE VERITE
const stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"
    ],
    dragon: '',
    age: '',
    count: 3,
    message: '',
}

const reducer = (state = stateInit, action = {}) => {

    const { dragons, dragon } = state;

    switch (action.type) {

        case ADD_DRAGON:
            // on ne gère pas l'age faite le si vous le souhaitez dans une v2


            if (dragon.trim() === '') {

                return {
                    ...state,
                    message: "Vous avez oublié le nom de votre dragon"
                }
            }

            /*
                dragons
                    .map(a => a.toLowerCase())
                    .includes(dragon.toLowerCase()
                )
                if (dragons
                    .map(a => a.toLowerCase())
                    .includes(dragon.toLowerCase())
                ) 
            */

            if (dragons.includes(dragon)) {

                return {
                    ...state,
                    message: `Le dragon ${dragon} existe déjà !!`
                }
            }

            return {
                ...state,
                dragons: dragons.concat(dragon), // nouvel ref du tableau
                message: `Merci votre dragon ${dragon} a bien été ajouté `,
                dragon: '',
                count: state.count + 1,
            }

        case SET_DRAGON:
            const { name, value } = action.payload;

            return {
                ...state,
                [name]: value
            }

        case DELETE_DRAGON:

            const dragonDelete = action.payload;

            if (dragons.includes(dragonDelete) === false) {

                return {
                    ...state,
                    message: `Attention vous essayez de supprimer un dragon qui n'existe pas `,
                }
            }

            return {
                ...state,
                dragons: dragons.filter(dragon => dragon !== dragonDelete),
                count: state.count - 1,
                message: `Le dragon ${dragonDelete} a bien été supprimé`,
            }

        case REVERSE_DRAGON:

            return {
                ...state,
                dragons: dragons.reverse()
            }

        default:
            return state;
    }


}

export default reducer;