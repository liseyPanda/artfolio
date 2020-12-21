import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
          <Nav.Link href="/portfolio" className="item" >Home</Nav.Link>
          <Nav.Link
            className="item"
            href="/portfolio/projects"
            id="dropdown"
          >Projects
          <ul className="dropdown-menu">
            <NavDropdown.Item className="dropdown-items" href="/portfolio/projects#compsci">Programs</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-items" href="/portfolio/projects#gallery">Gallery</NavDropdown.Item>
          </ul>
          </Nav.Link>
          <Nav.Link href="/portfolio/about" className="item">About</Nav.Link>
          <Nav.Link href="#contact" className="item">Contact</Nav.Link>
         </Nav>
        </Navbar>

  )
}
}
export default Navigation;
