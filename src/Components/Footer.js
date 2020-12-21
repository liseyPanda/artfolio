import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

function Footer(props) {
  return (
    <div className="bobaFooter" id="contact">
    <Card className="bg-dark text-white bobaCard">
        <Card.Title>Contact Me</Card.Title>
        <Row className="justify-content-md-center" id="topRow">
        <Col xs lg="2" className="text-center">
          <ul>
            <li>
            <a href = "mailto:efalck123@yahoo.com?subject=Question about (i.e. Art, Comp Sci, Twitch)&body=Hi Elise,">
            Send a Question
            </a>
            </li>
            <li>
            <a href = "mailto:efalck123@yahoo.com?subject=New Commission&body=Hi Elise, I wanted to know about pricing for a commission.">
            Commission Ask
            </a>
            </li>
          </ul>
        </Col>
        </Row>
        <Row className="justify-content-md-center" id="botRow">
        <Col>
         <a href="https://www.twitch.tv/formosaboba" target="_blank"><FontAwesomeIcon className="icons" icon={['fab', 'twitch']} size="3x"/></a>
         <a href="https://www.instagram.com/liseypanda_art/" target="_blank"><FontAwesomeIcon className="icons" icon={['fab', 'instagram']} size="3x" /></a>
         <a href="https://twitter.com/liseyPanda" target="_blank"><FontAwesomeIcon className="icons" icon={['fab', 'twitter']} size="3x" /></a>
         <a href="https://www.linkedin.com/in/elise-falck-5b3222128/" target="_blank"><FontAwesomeIcon className="icons" icon={['fab', 'linkedin']} size="3x" /></a>
        </Col>
        </Row>
    </Card>
    </div>
  )
}

export default Footer;
