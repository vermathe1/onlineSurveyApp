import React, { Component } from 'react';
import './App.css';
import { Home } from './containers/home';
import  QuestionsPanel  from './containers/questionsPanel'
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
            <Route exact path = "/" component = { Home }/>
            <Route path = "/survey/:pagenumber" render = {(props)=> <QuestionsPanel {...props}/> }/>
          </Switch> 
        </Router>
      </div>
    );
  }
}

export default App;
