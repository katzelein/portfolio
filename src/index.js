import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bio from './Bio';
import Projects from './Projects';
// import Experience from './Experience';
import Contact from './Contact';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

ReactDOM.render(
  <div id="app">
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Bio}/>
        <Route path="/bio" component={Bio}/>
        <Route path="/projects" component={Projects}/>
        {/*<Route path="/experience" component={Experience}/>*/}
        <Route path="/contact" component={Contact}/>
      </Route>
    </Router>
  </div>,
  document.getElementById('root')
);


// Create a description of the things I do well --
// emotional intelligence
// communication
// enthusiasm
// code
// UX/UI? 

// Portfolio:
//   The Agency
//   $elleb
//   RainyDays
//   Tech Talk