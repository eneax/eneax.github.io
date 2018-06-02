import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';
import 'tachyons';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from '../libs/particlesConfig';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import BookList from '../components/Books/BookList';
import ProjectList from '../components/Projects/ProjectList';
import NoMatch from '../components/NoMatch/NoMatch';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="landing-page">
          <Particles
            className="particles"
            params={particlesConfig}
          />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={ProjectList} />
            <Route path='/books' component={BookList} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;