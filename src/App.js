import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Navigation from './Components/Navbar.js';
import Home from './Components/Home.js';
import Projects from './Components/Projects.js';
import Programs from './Components/Programs.js';
import Images from './Components/Gallery.js';
import About from './Components/About.js';
import Footer from './Components/Footer.js';
import {AnimatePresence, motion} from 'framer-motion';
import ScrollUp from "./Components/ScrollUp.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab} from '@fortawesome/free-brands-svg-icons'
import './App.css';

function App() {
  library.add(fab);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">

      <Navigation></Navigation>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="" component={Projects} />
          <Route path="/projects#compsci" component={Programs} />
          <Route path="/projects#gallery" component={Images} />
          <Route path="/about" component={About} />
        </Switch>
      </AnimatePresence>
      <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
