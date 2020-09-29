import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import '../App.css';

function Thumbnail(props) {
  return (
    <div className="artwork">
      <Link to={props.link}>
        <div className="artwork-image">
          <img src={props.image} alt="Artwork Image"/>
        </div>
        <div className="artwork-title">{props.title}</div>
        <div className="artwork-category">{props.category}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;
