import { NavLink } from "react-router-dom";
import Nav from "../Styles/Nav";

const Navigate = (props) => {

  const checkIsactive  = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "red" : "",
    };
  };

  return (
    <Nav>
      <ul>
        <li>
          <NavLink style={checkIsactive} to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/logs">LOGS</NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigate;
