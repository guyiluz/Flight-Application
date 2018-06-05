import React, { Component } from 'react';
import Loggin from "./Loggin"
import FlightTable from "./FlightTable"

import logo from './logo.svg';
import './App.css';

import {Switch, Route, Redirect, HashRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
         <HashRouter>
<Switch>
                <Route path='/' component={Loggin}/>
                <Route path="/table" component={FlightTable}/>
                
              </Switch>
              </HashRouter>

      </div>
    );
  }
}

export default App;
