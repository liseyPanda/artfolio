import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, NavLink } from 'react-bootstrap';
import logo from '../Images/naicha3.png';
import '../App.css';

function Navigation(props) {
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
          <Nav.Link href="/" className="item" >Home</Nav.Link>
          <NavDropdown href="/pojects" title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="/projects">Introduction</NavDropdown.Item>
            <NavDropdown.Item href="/projects#compsci">Computer Projects</NavDropdown.Item>
            <NavDropdown.Item href="/projects#gallery">Gallery</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about" className="item">About</Nav.Link>
         </Nav>
        </Navbar>

  )
}

export default Navigation;
