import React from "react";
import { motion } from "framer-motion";
import {Container, Row, Col, Jumbotron, Button, Card} from 'react-bootstrap';
import '../App.css';
import ScrollUp from "../Components/ScrollUp.js";


function Programs(props) {
  return (
    <div>
      <Container className="aboutPage" id="compsci" >
      <span className="art">Programs</span>
      <Row className="imgGrid">
       <Col xs={12} md={4}>
        <p className="compSciTitles">App-Integration</p>
        <div className="text-justify">
        Most of my projects that I worked on over the past 2 years
        were about integrating different systems together whether in the cloud
        or on premise. One way you can do this is through RESTful APIs. If your
        service uses a RESTful web service then you can simply take the needed
        endpoint to connect the system to the cloud. This also depends on servcies
        such as Google, AWS, and Oracle Cloud services.
        </div>
       </Col>
       <Col xs={12} md={4}></Col>
       <Col xs={12} md={4}>
        Picture
       </Col>
       </Row>
       <Row className="imgGrid">
        <Col xs={12} md={4}>
        Picture
        </Col>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4}>
        <p className="compSciTitles">BPMN (Business Process Model Notation)</p>
        <div className="text-justify">
        BPMN or Business Process Model Notation is a representation of
        business processes using graphics. Another one of my focuses is learning
        how to help businesses create automated processes for their workflows.
        I would help companies build their business processes using Oracle Process Cloud (PCS)
        This can include other Third-Party systems such as DocuSign and SalesForce.
        </div>
        </Col>
        </Row>
        <Row className="imgGrid">
         <Col xs={12} md={4}>
          <p className="compSciTitles">Virtual Reality</p>
          <div className="text-justify">
          I already spoke about this project in the beginning of this page but this project was a very
          eye opening experience. When you walk into a building you may or may not think about if you are able to see things
          around you such as the stairs, floor, chairs, etc. Someone with vision impairments will actually have difficulties
          moving around the space depending on how the building/architecture is designed. We designed a virtual space for
          the University of Florida's Architect College using Unity, C#, and Oculus to immerse the students into their designs
          with a filter that would distort their vision based on different impairments.
          <br></br>
          This would then help the students understand different color contrasts, different heights of surfaces and much more
          to improve their designs.
          </div>
         </Col>
         <Col xs={12} md={4}></Col>
         <Col xs={12} md={4}>
          Picture
         </Col>
         </Row>
      </Container>
      <ScrollUp/>
    </div>
  )
}

export default Programs;
