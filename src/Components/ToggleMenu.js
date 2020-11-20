import React, { Component } from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import {motion} from 'framer-motion';
import '../App.css';
import MenuButton from "../Components/MenuButton.js"

export default class ToggleMenu extends Component {
  state = {
    visible: false,
  }
  //method is = arrow function
  //function: get the current state of "visible:" and set it to it's opposite value
  //i.e. visible: false then now visible: true
  toggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  //inline conditional if true it will run
  render(){
    const { children } = this.props;
    return children({
      visible: this.state.visible,
      toggle: this.toggle
    });
  }
}
