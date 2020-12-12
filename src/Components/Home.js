import React from "react";
import {Container, Row, Col, Jumbotron, Button, Card} from 'react-bootstrap';
import { motion } from "framer-motion";
import followers from "../Images/100f.png";
import rage from "../Images/RAGEQUIT2.png";
import hype from "../Images/hypeboba.jpg";
import Parallax from 'react-rellax';
import c1 from "../Images/circle1.png";
import c2 from "../Images/circle2.png";
import ScrollUp from "../Components/ScrollUp.js";
import '../App.css';


function Home(props) {
  const transition = {duration: .69, ease: [0.43, .13, .23, .96]};
  return (
    <motion.div
    initial= {{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <Container className="homePage">
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

    <Parallax className="break"
      data-rellax-xs-speed="0"
      data-rellax-mobile-speed="0"
      data-rellax-tablet-speed="1"
      data-rellax-desktop-speed="1"
      >
      <h1 className="bannerHello">Welcome</h1>
      </Parallax>
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
      <Parallax className="break"
      data-rellax-xs-speed="-1"
      data-rellax-mobile-speed="-1"
      data-rellax-tablet-speed="-1"
      data-rellax-desktop-speed="-1"
      >
      <p className="bannerSecond">
        We are happy you came
      </p>
      </Parallax>
      </motion.div>
    </Jumbotron>
    <div className="wrapper">
      <Row className="justify-content-md-right" id="row1">
        <Col md lg="3">
        <Card className=" bobaImg">
          <Card.Img src={followers} alt="followers100" className="cardImg" />
        </Card>
        </Col>
        <Col xs lg="7" className="text-left bodyText" id="followerText">
        <Parallax className="break"
        data-rellax-xs-speed="-1"
        data-rellax-mobile-speed="-1"
        data-rellax-tablet-speed="-1"
        data-rellax-desktop-speed="-1"
        >
          <p className="greeting">Hi Everyone! Thanks for stopping by.</p>
          <br></br>
          </Parallax>
          <Parallax className="break"
          data-rellax-xs-speed="0"
          data-rellax-mobile-speed="0"
          data-rellax-tablet-speed="1"
          data-rellax-desktop-speed="1"
          >
          I've recently hit <b>100</b> followers on <span>TWITCH</span> which is such a milestone for me. I began streaming in March of 2020 and haven't stopped since.
          I have a lot of friends who are very savvy in the Twitch realm so if you're thinking about starting your own brand or if you need to do some tweaking to your
          stream send me an email.
          </Parallax>
        </Col>
      </Row>
      <Row className="justify-content-md-left" id="row2">
      <Col>
      </Col>
        <Col md lg="7" className="text-right bodyText" id="hobbyText">
        <Parallax className="break"
        data-rellax-xs-speed="0"
        data-rellax-mobile-speed="0"
        data-rellax-tablet-speed="1"
        data-rellax-desktop-speed="1"
        >
        In the time I have spent in quarantine I have learned that I like creating emotes.
        Someone might think emotes are easy to draw but let me TELL you it is so very
        hard when it comes to sizing your image correctly.
        <p><em><q>Just zoom in that should do it</q></em><br></br></p>
        Although these past few months have been enervating, the journey so far is very enlightening. I am learning multiple new styles for my art and am trying to practice everyday.
        Similarly I am finding I have a fondness of
        <p>WEB DESIGN</p>
        <hr></hr>
        Now that I have more free time on my hands I have been trying to teach myself web developement. If you have any
        suggestions or critiques for this website please, again, send me an email.

        </Parallax>
        </Col>
        <Col xs lg="3">

        <Card className="bg-dark text-white bobaImg">
          <Card.Img src={hype} alt="hypeBoba" className="cardImg"/>
          <Card.ImgOverlay>
          </Card.ImgOverlay>
        </Card>

        </Col>
      </Row>
    </div>
    </Container>
    <ScrollUp/>
    <div className="assets c1 c1animate" id="c1"></div>
    <div className="assets c1Shadow" id="c1S"></div>
    <div className="assets c2 c2animate" id="c2"></div>
    <div className="assets c2Shadow" id="c2S"></div>
    <div className="assets s1" id="s1"></div>
    <div className="assets s1Shadow" id="s1S"></div>
    </motion.div>
  )
}

export default Home;
