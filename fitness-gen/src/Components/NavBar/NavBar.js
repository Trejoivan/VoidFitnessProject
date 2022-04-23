import NavBodyPart from './NavBodyPart';
import NavListOfEquipment from './NavListOfEquipment';
import NavTarget from './NavTarget';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className="nav-bar" variant="dark">
      <Container className='margin'>
        <Navbar.Brand>
          <Link className="navLogo" to='/' onClick={props.resetData}>
            Eclipse Fitness
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to='profile/'>
              Profile
            </Link>
            <Nav>
              <Link className="nav-link" to='workout-lists/'>
                Workout Lists
              </Link>
            </Nav>
            <NavBodyPart fetchData={props.fetchData} />
            <NavTarget fetchData={props.fetchData} />
            <NavListOfEquipment fetchData={props.fetchData} />
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Details</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              logOut
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


