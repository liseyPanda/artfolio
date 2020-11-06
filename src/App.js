import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Navigation from './Components/Navbar.js';
import Home from './Components/Home.js';
import Projects from './Components/Projects.js';
import About from './Components/About.js';
import {AnimatePresence, motion} from 'framer-motion';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <Navigation></Navigation>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
      </AnimatePresence>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
