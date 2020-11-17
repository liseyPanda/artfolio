import React from "react";
import Thumbnail from './Thumbnail.js';
import { motion } from "framer-motion";
import {Container, Row, Col, Carousel } from 'react-bootstrap';
import Parallax from 'react-rellax';
import rage from '../Images/RAGEQUIT2.png';
import bobaGirl from '../Images/naicha3.png';
import hype from '../Images/hypeboba.jpg';
import mermay1 from '../Images/mermay1.jpg';
import mermay8 from '../Images/mermay8.jpg';
import mermay12 from '../Images/mermay12.jpg';
import mermay26 from '../Images/mermay26.jpg';
import mermay28 from '../Images/mermay28.jpg';
import mermay32 from '../Images/mermay32.jpg';
import mermay35 from '../Images/mermay35.jpg';
import mermay41 from '../Images/mermay41.jpg';
import mermay42 from '../Images/mermay42.jpg';
import mermay5 from '../Images/mermay5.jpg';
import mermay7 from '../Images/mermay7.jpg';
import mermay10 from '../Images/mermay10.jpg';
import mermay14 from '../Images/mermay14.jpg';
import mermay16 from '../Images/mermay16.jpg';
import mermay19 from '../Images/mermay19.jpg';
import mermay21 from '../Images/mermay21.jpg';
import mermay23 from '../Images/mermay23.jpg';
import mermay30 from '../Images/mermay30.jpg';
import mermay39 from '../Images/mermay39.jpg';
import girls from '../Images/girls1.jpg';
import haikyuu from '../Images/first6.jpg';
import body from '../Images/bodycomp2.jpg';
import portray from '../Images/artchallenge4.jpg';
import ram from '../Images/ram4.jpg';
import viper from '../Images/kevbanner3.jpg';
import salmonbadge1 from '../Images/salmonbadge1.png';
import sush from '../Images/sushemote1.png';
import tunabadge from '../Images/tunabdge1.png';
import dragon from '../Images/dragon2.jpg';
import moneyhappy from '../Images/dtys11.jpg';
import moneyshiny from '../Images/dtys12.jpg';
import moneyboujee from '../Images/dtys13.jpg';
import fashion from '../Images/purp3.jpg';
import dtiys from '../Images/dtys1.jpg';
import ryu from '../Images/ryu1.jpg';

import '../App.css';

function Projects(props) {
  return (
    <motion.div
    initial= {{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <Container fluid>
    <Row className="imgGrid">
    <Col className="imgCol" xs={12} md={4}>
    <Carousel className="imgShift" controls={false} indicators={false} pause='hover' fade={true}>
      <Carousel.Item interval={50}>
        <img src={mermay8} alt="mermay" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img src={mermay1} alt="mermay" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={50}>
          <img src={mermay26} alt="mermay" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img src={mermay12} alt="mermay" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img src={mermay32} alt="mermay" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img src={mermay35} alt="mermay" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img src={mermay39} alt="mermay" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img src={mermay42} alt="mermay" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img src={mermay41} alt="mermay" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <img src={viper} alt="viper" className="still" />
    </Col>
    <Col className="imgCol" xs={12} md={4}>
      <img src={girls} alt="girls" className="projectImg" />
    <Carousel className="imgShift" controls={false} indicators={false} pause='hover'>
      <Carousel.Item interval={50}>
        <img src={haikyuu} alt="haikyuu" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img src={ram} alt="rampart" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img src={portray} alt="portrait" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img src={body} alt="rampart" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img src={moneyhappy} alt="rampart" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img src={fashion} alt="rampart" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img src={moneyshiny} alt="rampart" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img src={dtiys} alt="rampart" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img src={moneyboujee} alt="rampart" className="projectImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    <Col className="projectText">
    <h1>

    <span className="art">(ART</span>is<span className="art">T)</span>EMPTING
    </h1>
    <p className="artBody">You made it to the Gallery! How are you doing today?
    </p>
    <div className="text-justify">
    This is where I keep my latest drawings, doodles, emotes, concentrations and more.
    I was introduced to the art of drawing, like most, in elementary school. This is where I would experiment drawing with crayons, markers, pencils, etc.
    When I went into Middle School there was not much influence as I took up sports instead. During this awkward stage of life I went through my manga phase. I would try to replicate my favorate anime's such as
    Sailormoon, Inuyasha, Ranma 1/2 and many more.

    <br></br>
    I then went on to High School and rekindled my love for drawing. I took 2D Drawing & Painting for <b className="emphasized">4 Years</b>, presented pieces in our School Gallery and Art Shows and at the end of Senior year I sold my
    first piece.
    </div>
    <br></br>
    <h5>Art as a Living</h5>
    <div className="text-justify">
    I believe that in this day and age it should be acceptable to become the artist you want to be. I do not support myself by drawing, painting, or any other form of art. I merely use my skills I have learned
    over the years to supply me with the tools that carve out what happiness is to me. Sometimes I detest what I'm drawing and it frustrates me
    </div>
    <br></br>
    <i><em className="aboutBody"><q>it looks nothing how I imagined.</q></em></i>
    <br></br>
    <br></br>
    <div className="text-justify">
    Then comes the Artist block. Something that keeps me going through something like this is to remember you only get better at something if you continue to practice. If that is a doodle, sketch, etching
    in your desk so be it. Practice today and you will be better tomorrow.
    </div>
    <hr></hr>
    <div className="commissions">
    <Parallax className="break"
    data-rellax-xs-speed="0"
    data-rellax-mobile-speed="0"
    data-rellax-tablet-speed="-1"
    data-rellax-desktop-speed="-1"
    >
      <p className="artBody"> Do you do commissions? </p>
    </Parallax>

    <Parallax className="break"
    data-rellax-xs-speed="-0"
    data-rellax-mobile-speed="0"
    data-rellax-tablet-speed="-2"
    data-rellax-desktop-speed="-2"
    >
      <div className="rightText">
      I do indeed. I can negotiate on prices but I already have set prices for specific pieces ranging from logos, concept art, character illustrations, portraits, assets, etc.
      I'm open to many different styles and subject matters. If you would like to ask more questions on this please click the link in my footer.
      </div>
    </Parallax>

    </div>
    </Col>
    </Row>
    <Row>
    <Col xs={12} md={4}></Col>
    <Col xs={12} md={4}>
    <img src={bobaGirl} alt="hypeBoba" className="logoImg" id="susBoba" />
    </Col>
    <Col xs={12} md={4}></Col>
    </Row>

    <Row className="imgGrid">
     <Col xs={12} md={4}>
     <Parallax className="break"
     data-rellax-xs-speed="0"
     data-rellax-mobile-speed="0"
     data-rellax-tablet-speed="3"
     data-rellax-desktop-speed="3"
     >
     <span className="art">CompSci</span>
     <hr></hr>
     <i><b className="sci">Science: </b>
     <a
     className="hrefs"
     href="https://www.google.com/search?q=science+defined&rlz=1C1CHBF_enUS794US794&oq=science+defined&aqs=chrome..69i57j0i433i457j0l6.1554j0j1&sourceid=chrome&ie=UTF-8">
      <q>the intellectual and practical activity encompassing the systematic study of the structure and behaviour of the physical and natural world through observation and experiment.</q>
     </a>
     </i>
     <br></br>
     <i><b className="sci">Computer Science: </b>
     <a
     className="hrefs"
     href="https://www.google.com/search?safe=active&rlz=1C1CHBF_enUS794US794&sxsrf=ALeKk01V2c4t7ShNft9lWy-zjCzF7fVhvw%3A1605279976165&ei=6KCuX9aqCaip5wKXxrbQBg&q=computer+science+defined&oq=computer+science+defined&gs_lcp=CgZwc3ktYWIQAzIFCAAQyQMyAggAMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoECAAQRzoMCAAQsQMQQxBGEPkBOgQIABBDOgcIABCxAxBDOgoIABCxAxBGEPkBOgUIABCxAzoICC4QxwEQrwE6DAgAEBQQhwIQRhD5AToHCAAQFBCHAjoHCAAQsQMQCjoNCAAQsQMQyQMQRhD5AVCvqgFY-K8BYM2wAWgAcAJ4AIABnAGIAZ0HkgEDMC43mAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwjWvvn15f_sAhWo1FkKHRejDWoQ4dUDCA0&uact=5">
      <q>the study of the principles and use of computers.</q>
     </a>
     </i>

     </Parallax>
     <Parallax className="break"
     data-rellax-xs-speed="0"
     data-rellax-mobile-speed="0"
     data-rellax-tablet-speed="1"
     data-rellax-desktop-speed="1"
     >
     <hr></hr>
     <div className="text-justify">
     In college I created text based games, calculator after calculator, and even a traffic light in my electrical class.
     One of my favorite projects was a team project senior year. We built out Virtual Scenes for our Architecture College.
     The <i><b className="sci">USE CASE</b></i> was that many buildings are created without the thought of those visually impaired. We needed a system that shows what
     is necessary in the architect's design for those with different eye conditions.
     <br></br>
     <div className="indent">
     <i>You just created a new hotel in CAD and you now have to think about if someone that has Glaucoma or Cataracts will come into your building.
     Maybe they will need brighter contrasted colors for the stairs, chairs, floor elevations etc.</i>
     </div>
     <br></br>
     We used Oculus and Unity to create different scenes and filters so the user could see what someone with (i.e.) Glaucoma
     can see in the space they are in. We would import the architect's designs into our scene and use our filters to show them how someone with different eye impairments
     would see.
     The next step in this project would be to see how someone in a wheelchair would be able to get around the Architect's designs.
     <br></br>
     <br></br>
     Below is a little blurb for those who might need a push to get into the programming realm.
     <br></br>

     <div className="indent">
     <em className="text-justify">
     The time I spent in college was the first time I truly learned programming. When I was in middle schoool I went to a camp for coding held by my own Primary School. We made a 2D (platform)
     adventure game that would teach us the basics of collision and if else statements. When it was time for college I hadn't done much programming after middle school. I thought I would be a Civil or Mechanical Engineer.
     College was life changing, extremely hard and almost terrifying. <i><q>Java?</q></i> Like the coffee? No. <i><q>C++</q></i> So a passing grade but not quite good enough to be a B-? No.
     I was mind boggled, what was this new world?
     Then my First class began, my professor walked to the front of the class turned around and asked <i><q>Has amyone Googled something before?</q></i>.
     </em>
     </div>
     <br></br>
     I struggled like any other person would and the only thing that you need to know is that you can practice. You can continue to learn and get better as time goes on. <i>You got this!</i>
     <hr></hr>
     <p className="artBody">Favorite Language?</p>
     Right now I'm interested in Web Developement and am really liking JavaScript.
     In School I really enjoyed Java and C.
     <br></br>
     The hardest language for my brain to wrap around to this day is C++.
     </div>
     <span className="art">Merge</span>
     <hr></hr>
     <div className="text-justify">
     Since I have a background in both Computers and Art I would really like to combine the two in my future.
     I feel that these two can compliment each other very well <i>i.e. video games, social media, websites </i>
     In senior year of college I decided to take Intro to Computer Graphics.
     It brings in the elements of physics and math which might excite you because you thought you'd never use these subjects again.
     This class to me was one of the ideas of how Art and Computers can go hand in hand. I would like my next project to be something
     similar to <em>MERGE</em> these subjects together.
     </div>
     </Parallax>
     </Col>
     <Col xs={12} md={4}>
     <Carousel className="imgShift" controls={false} indicators={false} pause='hover'>
       <Carousel.Item interval={50}>
         <img src={mermay5} alt="mermay" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={100}>
         <img src={mermay7} alt="mermay" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={50}>
           <img src={mermay10} alt="mermay" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={100}>
         <img src={mermay14} alt="mermay" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={100}>
         <img src={mermay16} alt="mermay" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={50}>
         <img src={mermay19} alt="mermay" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={100}>
         <img src={mermay21} alt="mermay" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={50}>
         <img src={mermay23} alt="mermay" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={100}>
         <img src={mermay30} alt="mermay" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
     <Carousel className="imgShift" controls={false} indicators={false} pause='hover' fade={true}>
       <Carousel.Item interval={50}>
         <img src={salmonbadge1} alt="salmon" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={100}>
         <img src={sush} alt="sush" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={50}>
           <img src={tunabadge} alt="tuna" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
     </Col>
     <Col xs={12} md={4}>
     <Carousel className="imgShift" controls={false} indicators={false} pause='hover' fade={true}>
       <Carousel.Item interval={50}>
         <img src={bobaGirl} alt="bobaGirl" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={100}>
         <img src={rage} alt="rageQuit" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={50}>
           <img src={hype} alt="hypeBoba" className="projectImg" />
         <Carousel.Caption>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
     <img src={dragon} alt="profile" className="still" />
     </Col>
    </Row>
    </Container>
    </motion.div>
  )
}

export default Projects;
