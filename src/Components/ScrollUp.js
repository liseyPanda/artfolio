import React from "react";
import { useWindowScroll } from 'react-use';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from "aos";
import '../App.css';
import "aos/dist/aos.css";

const ScrollUp = () => {
  const { y: pageOffsetY } = useWindowScroll();
  const  scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  Aos.init({ duration: 2000 });
  return(
    <div className="menu" data-aos="fade-up" onClick={scrollToTop} >
    <FontAwesomeIcon className="chevron" icon={faChevronCircleUp} size="3x" color="pink" />
    </div>
  )
}

export default ScrollUp;
