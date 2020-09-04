import React, { Component } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Dashboard from './components/Dashboard/Dashboard';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    axios.get('/api/inventory').then(res => this.setState({ inventory: res.data }))
      .catch(err => console.log(err.message))
  }

  render() {

    return (
      <div className="App" >
        <Header />
        <Form />
        <Dashboard inventory={this.state.inventory} />
      </div>
    )
  };
}

export default App;
