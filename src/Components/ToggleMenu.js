import React, { Component } from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import {motion, useCycle} from 'framer-motion';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';



const overflow = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 50px 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 50px 90px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
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
    const { render } = this.props;
    const v = this.state.visible;

    return (
      <motion.nav
    animate={v ? "open" : "closed"}>

    <motion.div className="overlay" variants={overflow}>

    <div className={v ? 'open' : 'closed'} onClick={this.toggle}>
    <div className="menubtn_burger"></div>
    </div>
  {render({
    visible: this.state.visible,
    toggle: this.toggle
  })}
  </motion.div>
  </motion.nav>

    );
  }
}
