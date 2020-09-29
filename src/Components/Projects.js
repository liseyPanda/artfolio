import React from "react";
import Thumbnail from './Thumbnail.js';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';

function Projects(props) {
  return (
    <Container>
    <Row>
      <Col></Col>
      <Col xs={6}><h1>Projects</h1></Col>
      <Col></Col>
    </Row>
    <Row>
      <Col>
        <Thumbnail
          link="/www.instagram.com"
          image="https://www.instagram.com/p/CEUgNzJADN2/media/?size=m"
          title=""
          category=""
        />
      </Col>
      <Col>
        <Thumbnail
          link="/www.instagram.com"
          image="https://www.instagram.com/p/CDPARxrATvR/media/?size=m"
          title=""
          category=""
        />
      </Col>
      <Col>
        <Thumbnail
          link="/www.instagram.com"
          image="https://www.instagram.com/p/CA4IahggccO/media/?size=m"
          title=""
          category=""
        />
      </Col>
    </Row>
    </Container>
  )
}

export default Projects;
