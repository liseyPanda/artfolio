import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import {motion} from 'framer-motion';
import '../App.css';

function MenuButton(props){
    return (
      <button id="roundButton"
              onMouseDown={this.props.handleMouseDown}></button>
    
    );
}

export default MenuButton;
