import { NavDropdown } from 'react-bootstrap';
import './NavBar.css'
import {useNavigate} from 'react-router-dom'

const NavTarget = (props) => {
  const navigate = useNavigate()
  const options = ["abductors", "abs", "biceps","calves", "cardiovascular system", "delts","forearms", "glutes","hamstrings", "lats", "levator scapulae", "pectorals", "quads","serratus anterior", "spine", "traps", "triceps", "upper back" ]

  const renderOptions = () => {
    return options.map((option, index) => {
      return (
        <NavDropdown.Item key={option} value={option} className="dropdown-items"  onClick={() => {props.fetchData('target', option); navigate('results/')}}>
          {option}
        </NavDropdown.Item>)
    })
  }

  return (<NavDropdown title="Target Muscle" id="collasible-nav-dropdown">
   { renderOptions()}
  </NavDropdown>)

};

export default NavTarget;