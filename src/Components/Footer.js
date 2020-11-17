import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

function Footer(props) {
  return (
    <div className="bobaFooter">
    <Card className="bg-dark text-white bobaCard">
        <Card.Title>Elise Falck</Card.Title>
        <Row className="justify-content-md-left" id="topRow">
        <Col xs lg="4"></Col>
        <Col xs lg="2" className="text-right">
          <ul>
            <li>
            <a href = "mailto:efalck123@yahoo.com">
            Send a Question
            </a>
            </li>
            <li>
            <a href = "mailto:efalck123@yahoo.com">
            Commission Ask
            </a>
            </li>
            <li>Oolong Tea</li>
          </ul>
        </Col>
        <Col xs lg="2" className="text-left">
          <ul>
            <li>Milk</li>
            <li>Almond Milk</li>
            <li>Coconut Milk</li>
          </ul>
        </Col>
        <Col xs lg="4"></Col>
        </Row>
        <Row className="justify-content-md-center" id="botRow">
        <Col>
         <FontAwesomeIcon icon={['fab', 'twitch']} size="2x" />
         <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
         <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
        </Col>
        </Row>
    </Card>
    </div>
  )
}

export default Footer;
