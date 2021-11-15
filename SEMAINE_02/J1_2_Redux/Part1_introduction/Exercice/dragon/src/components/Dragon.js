import { useDispatch } from "react-redux";
import { delete_dragon } from "../actions/actions-types";
import Button from "../Styles/Button";

const Dragon = ({ dragon }) => {

    const dispatch = useDispatch();

    const handleClick = () => {

        dispatch(delete_dragon(dragon));
    }

  return (
    <div>
      <p>Name : {dragon}</p>
      <p><Button delete onClick={handleClick} >delete</Button></p>
    </div>
  );
};

export default Dragon;
