import React, { Component } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Dashboard from './components/Dashboard/Dashboard';
import axios from 'axios';
import './App.css';
import { HashRouter, Link } from 'react-router-dom'
import routes from './routes'

class App extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <HashRouter>
        <div className="App" >
          <Header />
          {routes}
        </div>
      </HashRouter>
    )
  };
}

export default App;
