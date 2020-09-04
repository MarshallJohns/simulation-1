import React, { Component } from 'react';
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Form />
        <Dashboard />
      </div>
    )
  };
}

export default App;
