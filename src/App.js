import React, { Component } from 'react';
import './App.css';
import { Survey } from './containers/survey';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="">
     <Router>
      <Switch>
        <Route path = "/" component = { Survey }/>
      </Switch> 
    </Router>
    </div>
    );
  }
}

export default App;
