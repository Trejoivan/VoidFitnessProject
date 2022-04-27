import NavBodyPart from './NavBodyPart';
import NavListOfEquipment from './NavListOfEquipment';
import NavTarget from './NavTarget';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import WorkoutListAPI from '../../api/WorkoutListAPI';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
Cookies.set("username", "");


const NavBar = (props) => {
  const navigate = useNavigate();

  const doLogout = async () => {
    const data = await WorkoutListAPI.logout();

    if (data) {
      window.localStorage.setItem('username' , "")
      props.setUsername("");
      props.resetData();
      navigate('/');
    }
  };



  const renderAuthItems = () => {
    if (window.localStorage.getItem('username') == "") {
      return <><Nav.Link>
        <Link className="nav-link" to='login/'>
          Login
        </Link></Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          <Link className="nav-link" to='signup/'>
            SignUp
          </Link>
        </Nav.Link></>;
    } else {
      return <Nav.Link>
        <Link className="nav-link" to='/' onClick={doLogout}>
          Logout
        </Link></Nav.Link>;
    }
  };

  const renderSearchAccess = () => {
    if (window.localStorage.getItem('username') !== "") {
      return (
        <>
          <Link className="nav-link" to='profile/'>
            Profile
          </Link>
          <Nav>
            <Link className="nav-link" to='workout-lists/'>
              Plans
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to='motivation/'>
              Motivation
            </Link>
          </Nav>
          <NavBodyPart fetchData={props.fetchData} />
          <NavTarget fetchData={props.fetchData} />
          <NavListOfEquipment fetchData={props.fetchData} />
        </>
      );
    } 
    else {
      
    }
  };




  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className="nav-bar" variant="dark">
      <Container className='margin'>
        <Navbar.Brand>
          <Link className="navLogo" to='/' >
            The Fitness Void
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">


            {renderSearchAccess()}
          </Nav>
          <Nav>
            {renderAuthItems()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


