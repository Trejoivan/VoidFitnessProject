import { NavDropdown } from 'react-bootstrap';
import './NavBar.css'

const NavTarget = (props) => {
  const options = ["abductors", "abs", "adductors", "biceps","calves", "cardiovascular system", "delts","forearms", "glutes","hamstrings", "lats", "levator scapulae", "pectorals", "quads","serratus anterior", "spine", "traps", "triceps", "upper back" ]

  const renderOptions = () => {
    return options.map((option, index) => {
      return (
        <NavDropdown.Item key={option} value={option} className="dropdown-items" onClick={() => props.fetchData('target', option)} >
          {option}
        </NavDropdown.Item>)
    })
  }

  return (<NavDropdown title="Target Muscle" id="collasible-nav-dropdown">
   { renderOptions()}
  </NavDropdown>)

};

export default NavTarget;