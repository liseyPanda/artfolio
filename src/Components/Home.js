import React from "react";
import {Container, Row, Col, Jumbotron, Button, Card} from 'react-bootstrap';
import { motion } from "framer-motion";
import boba from "../Images/Pink.png";
import '../App.css';

function Home(props) {
  const transition = {duration: .57, ease: [0.43, .13, .23, .96]};
  return (
    <motion.div
    initial= {{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <Container>
    <Jumbotron className="banner">
    <motion.div whileHover={{scale: 2.12}} transition={transition} initial="hidden" animate="visible" variants={{
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
    <Row className="justify-content-md-right">
      <Col xs lg="3">
      <Card className="bg-dark text-white bobaImg">
        <Card.Img src={boba} alt="bobaGirl" className="cardImg" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This
          </Card.Text>
          <Card.Text>Updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      </Col>
      <Col xs lg="2">
        How are you today?
      </Col>
    </Row>
    <Row className="justify-content-md-left">
    <Col></Col>
      <Col lg="auto">Variable width content</Col>
      <Col xs lg="3">
      <Card className="bg-dark text-white bobaImg">
        <Card.Img src={boba} alt="bobaGirl" className="cardImg"/>
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This
          </Card.Text>
          <Card.Text>Updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      </Col>
    </Row>
    </Container>
    </motion.div>
  )
}

export default Home;
