import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import {motion} from 'framer-motion';
import '../App.css';
import MenuButton from "../Components/MenuButton.js"

function ToggleMenu(props) {

  constructor(props, context) {
  super(props, context);

  this.state = {
    visible: false
  };

  this.handleMouseDown = this.handleMouseDown.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
  }
  return (
    <MenuButton handleMouseDown={this.handleMouseDown}/>
  );
}

export default ToggleMenu;
