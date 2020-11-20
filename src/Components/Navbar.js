import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
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
          <Link to="/" className="item" >Home</Link>
          <Link to="/projects" className="item">Projects</Link>
          <Link to="/about" className="item">About</Link>
         </Nav>
        </Navbar>

  )
}

export default Navigation;
