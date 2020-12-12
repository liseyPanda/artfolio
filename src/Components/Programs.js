import React from "react";
import { motion } from "framer-motion";
import {Container, Row, Col, Jumbotron, Button, Card} from 'react-bootstrap';
import '../App.css';
import ScrollUp from "../Components/ScrollUp.js";


function Programs(props) {
  return (
    <div>
      <Container className="aboutPage" id="compsci">
      <span className="art">Computer Projects</span>
      </Container>
      <ScrollUp/>
    </div>
  )
}

export default Programs;
