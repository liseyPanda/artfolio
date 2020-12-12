import React from "react";
import { motion } from "framer-motion";
import {Container, Row, Col, Jumbotron, Button, Card} from 'react-bootstrap';
import '../App.css';
import Gallery from "react-photo-gallery";
import Photos from "../Components/Photos.js";
import ScrollUp from "../Components/ScrollUp.js";

function Images(props) {
  return (
    <div>
    <Container fluid className="aboutPage" id="gallery">
    <span className="art">Gallery</span>
    <hr></hr>
    <Gallery photos={Photos} />
    </Container>
    <ScrollUp/>
    </div>
  )
}

export default Images;
