import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import {motion} from 'framer-motion';
import '../App.css';

function Thumbnail(props) {

  const transition = {duration: .6, ease: [0.43, .13, .23, .96]};

  return (
    <div className="artwork">
      <Link to={props.link}>
        <div className="artwork-image">
          <motion.img whileHover={{scale:1.1}} transition={transition} src={props.image} alt="Artwork Image"/>
        </div>
        <div className="artwork-title">{props.title}</div>
        <div className="artwork-category">{props.category}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;
