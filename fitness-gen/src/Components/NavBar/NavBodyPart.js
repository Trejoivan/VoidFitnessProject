import { NavDropdown } from 'react-bootstrap';
import './NavBar.css';

const NavBodyPart = (props) => {
  const options = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"];
  const renderOptions = () => {
    return options.map((option) => {
      return (

      <NavDropdown.Item key={option} value={option} className="dropdown-items" onClick={() => props.fetchData('bodyPart', option)} >
        {option}
      </NavDropdown.Item>);
    });
  };

  return (<NavDropdown  title="Body Part" id="collasible-nav-dropdown">
    {renderOptions()}
  </NavDropdown>);

};

export default NavBodyPart;

