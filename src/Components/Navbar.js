import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, NavLink } from 'react-bootstrap';
import logo from '../Images/naicha3.png';
import '../App.css';

class Navigation extends React.Component {

  constructor(props) {
  super(props)
  this.state = { isOpen: false }
  }

  handleOpen = () => {
  this.setState({ isOpen: true })
  console.log("open")
  }

  handleClose = () => {
   this.setState({ isOpen: false })
   console.log("close")
  }

render(){
  return (
    <Navbar className="navColor">
        <Navbar.Brand src="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          formosaboba
        </Navbar.Brand>
         <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="item" >Home</Nav.Link>
          <Nav.Link
            className="item"
            as={Link}
            to="/projects"
            id="dropdown"
          >Projects
          <ul className="dropdown-menu">
            <NavDropdown.Item className="dropdown-items" as={Link} to="/projects#compsci">Programs</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-items" as={Link} to="/projects#gallery">Gallery</NavDropdown.Item>
          </ul>
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="item">About</Nav.Link>
          <Nav.Link as={Link} to="#contact" className="item">Contact</Nav.Link>
         </Nav>
        </Navbar>

  )
}
}
export default Navigation;
