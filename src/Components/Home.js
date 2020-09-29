import React from "react";
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import { motion } from "framer-motion";
import '../App.css';

function Home(props) {
  return (
    <Container>
    <Jumbotron className="banner">
    <motion.div initial="hidden" animate="visible" variants={{
      hidden:{
        scale: .8,
        y: 100,
        opacity: 0
      },
      visible:{
        scale:1.25,
        y: 0,
        opacity: 1,
        transition: {
          delay: .425,
          type: "spring",
          velocity: 10,
          bounce: .325
        }
      },
    }}>
      <h1>Welcome</h1>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden:{
          scale: .8,
          opacity: 0
        },
        visible:{
          scale:1,
          opacity: 1,
          transition: {
            delay: .69,
            velocity: 10
          }
        },
      }}>
      <p>
        We are happy you came
      </p>
      </motion.div>
    </Jumbotron>
    </Container>
  )
}

export default Home;
