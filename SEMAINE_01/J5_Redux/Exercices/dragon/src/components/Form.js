import Button from "../Styles/Button"
import Input from '../Styles/Input';

import { useDispatch, useSelector } from 'react-redux';
import { addDragon, setDragon } from "../actions/actions-types";

const Form = () => {
    const { dragon, age } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(addDragon());
    }

    const handleChange = e => {
        const { name, value } = e.target;

        // pratique si vous avez plusieurs champs à contrôler
        // voir le reducer
        dispatch(setDragon( { name, value } ));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name (dragon) :
            <Input onChange={handleChange} value={dragon} name="dragon" />
            </label>
            <label>
                Age :
            <Input onChange={handleChange} value={age} name="age" />
            </label>
            <Button size={1}>
                Add
            </Button>
        </form>
    );
}

export default Form;
