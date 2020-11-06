import React from "react";
import Thumbnail from './Thumbnail.js';
import { motion } from "framer-motion";
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';

function Projects(props) {
  return (
    <motion.div
    initial= {{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <Container>
    <Row>
      <Col></Col>
      <Col xs={6}><h1>Projects</h1></Col>
      <Col></Col>
    </Row>
    <Row>
      <Col>
        <Thumbnail
          link=""
          image="https://www.instagram.com/p/CEUgNzJADN2/media/?size=m"
          title=""
          category=""
        />
      </Col>
      <Col>
        <Thumbnail
          link=""
          image="https://www.instagram.com/p/B_PuH9kAe_e/media/?size=m"
          title=""
          category=""
        />
      </Col>
      <Col>
        <Thumbnail
          link=""
          image="https://www.instagram.com/p/CA4IahggccO/media/?size=m"
          title=""
          category=""
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <Thumbnail
          link=""
          image="https://www.instagram.com/p/CFu7wIqgVuH/media/?size=m"
          title=""
          category=""
        />
      </Col>
      <Col>
        <Thumbnail
          link=""
          image="https://www.instagram.com/p/CBmXhBHhn7l/media/?size=m"
          title=""
          category=""
        />
      </Col>
      <Col>
        <Thumbnail
          link=""
          image="https://www.instagram.com/p/B_1EgNNlC4M/media/?size=m"
          title=""
          category=""
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <Thumbnail
          link=""
          image="https://www.instagram.com/p/B_5wMk3AhnU/media/?size=m"
          title=""
          category=""
        />
      </Col>
      <Col>
        <Thumbnail
          link=""
          image="https://www.instagram.com/p/CDPARxrATvR/media/?size=m"
          title=""
          category=""
        />
      </Col>
      <Col>
        <Thumbnail
          link=""
          image="https://www.instagram.com/p/B_urbXzA995/media/?size=m"
          title=""
          category=""
        />
      </Col>
    </Row>
    </Container>
    </motion.div>
  )
}

export default Projects;
