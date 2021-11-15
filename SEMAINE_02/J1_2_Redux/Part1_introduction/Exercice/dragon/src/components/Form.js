import { useSelector, useDispatch } from "react-redux";
import { set_dragon, add_dragon } from "../actions/actions-types";
import Button from "../Styles/Button";

const Form = () => {
  const { dragon, message } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(add_dragon());
  };

  const handleChange = (e) => {
    const { value: dragon } = e.target;

    dispatch(set_dragon(dragon));
  };
  return (
    <div>
        {message !== '' && (
            <div>
                {message}
            </div>
        )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" onChange={handleChange} value={dragon} />
        </div>
        <div>
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
