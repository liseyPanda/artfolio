import React from 'react'; // Import the Component component from React
import '../App.css';

function FadeOut(props) {
  return (
    $(window).scroll(function(){
    $(props).css("opacity", 1 - $(window).scrollTop() / 250);
  })
  );
}

export default FadeOut;
