import React from "react";
import { motion } from "framer-motion";
import self from "../Images/Capture.PNG";
import tigger from "../Images/Capture2.PNG"
import {Container, Row, Col, Jumbotron, Button, Card} from 'react-bootstrap';

function About(props) {
  return (
    <motion.div
    initial= {{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <Container className="aboutPage">
      <Row>
        <Col sm lg={4}><img src={self} alt="Elise" className="elise"/></Col>
        <Col className="text-left" sm lg={8}>
        <h5>Education</h5>
        <hr></hr>
        I graduated from the <i>University of Florida</i> <span role="img" aria-label="gator" className="emojis">🐊</span> with a B.S. in Computer Science and a Minor in Innovation.
        <br></br>
        <h5>Work</h5>
        <hr></hr>
        <div className="work">
        I have <b className="emphasized">2 years</b> experience from <i>Oracle</i> with a concentration in Cloud Based Application Integration and Application Developement.
        <br></br>
        I have <b className="emphasized">5 Years</b> experience in customer service between <i>Oracle</i> and <i>Crime Prevention Home Security Systems</i>.
        <h6>Skills</h6>
        <hr></hr>
        <Row>
        <Col sm lg={6} className="text-left">
        <em className="aboutBody">
          <ul>
          <i className="titles">Languages:</i>
          <li>•	Proficient: HTML, CSS, JavaScript, C</li>
          <li>•	Familiar: Java, C++, Python, SQL</li>
          <li>•	Handlebars, Bootstrap, React-Bootstrap, React, Express</li>
          </ul>
        </em>
        </Col>
        <Col sm lg={6} className="text-left">
        <em className="aboutBody">
          <ul>
          <i className="titles">Other:</i>
          <li>•	Proficient: Customer Service, Data Entry,  Autodesk Sketchbook Pro </li>
          <li>•	Microsoft Word, Excel, PowerPoint, Oracle Cloud, Unity</li>
          <li>•	Familiar: : Blender, Photoshop, Davinci Resolve 16, Maya, Z-brush</li>
          </ul>
        </em>
        </Col>
        </Row>

        </div>
        </Col>
      </Row>
      <br></br>
      <hr></hr>
      <Row>
        <Col sm lg={4}>
        <h5>Interests</h5>
        <hr></hr>
        <div className="text-justify">
        By now you know I <i>love</i> Art <span role="img" aria-label="heart" className="emojis">❤️</span>
        <br></br>
        <p>Adventures</p>
        For my next Adventure I am going to begin creating a 2D (Platform) game so that I may create the sprites on my own.
        You probably thought I would say <i>Travel to Iceland</i> but alas Covid-19 is making us change our adventures for now.
        <br></br>
        <p>Gaming</p>
        I enjoy playing FPS (First Person Shooters) such as Apex Legends, Overwatch, and Valorant.
        I also enjoy Action-Adventure games like Tomb Raider and Assassin's Creed.
        <br></br>
        <hr></hr>
        I will be posting my Computer Specifications on my Twitch if you would like to see what I'm working with
        </div>
        <br></br></Col>
        <Col sm lg={8}><img src={tigger} alt="Tigger" className="elise"/></Col>
      </Row>
      <div className="assets c1 c1animate"></div>
      <div className="assets c1Shadow"></div>
      <div className="assets c2 c2animate"></div>
      <div className="assets c2Shadow"></div>
    </Container>
    </motion.div>
  )
}

export default About;
