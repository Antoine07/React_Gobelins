import { useSelector, useDispatch } from 'react-redux';
import { deleteDragon } from '../actions/actions-types';
import Button from '../Styles/Button';


const Dragon = () => {
  const { dragons } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleDelete = dragon => {

    dispatch(deleteDragon(dragon));
  }

  return (
    <ul>
      {dragons.map((dragon, i) => (
        <li key={i}>
          {dragon}
          <Button onClick={() =>handleDelete(dragon)} >Delete</Button>
        </li>
      ))}
    </ul>
  );
}

export default Dragon;
