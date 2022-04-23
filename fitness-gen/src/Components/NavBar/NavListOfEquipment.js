import { NavDropdown } from 'react-bootstrap';
import './NavBar.css';

const NavListOfEquipment = (props) => {
  const options = ["assisted", "band", "barbell", "body weight", "bosu ball", "cable", "dumbbell", "elliptical machine", "ez barbell", "hammer", "kettlebell", "leverage machine", "medicine ball",
    "olympic barbell", "resistance band", "roller", "rope", "skierg machine", "sled machine", "smith machine", "stability ball", "stationary bike", "stepmill machine", "tire", "trap bar", "upper body ergometer", "weighted", "wheel roller"];

  const renderOptions = () => {
    return options.map((option ) => {
      return <NavDropdown.Item key={option} value={option} className="dropdown-items" onClick={() => props.fetchData('equipment', option)} >
      {option}
    </NavDropdown.Item>
    });
  };

  return (<NavDropdown title="By Equipment" id="collasible-nav-dropdown">
    {renderOptions()}
  </NavDropdown>);

};

export default NavListOfEquipment;