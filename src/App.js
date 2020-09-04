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
      inventory: [{ name: 'hoodie', price: 20, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkNm-oeOFnBp4bL17qQXuTwelXpKDSmT0Hz2eaY3PVfZI5LCaQcrmTLEmPgCEKySPakV-DiuM&usqp=CAc' }, { name: 'hoodie', price: 20, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkNm-oeOFnBp4bL17qQXuTwelXpKDSmT0Hz2eaY3PVfZI5LCaQcrmTLEmPgCEKySPakV-DiuM&usqp=CAc' }, { name: 'hoodie', price: 20, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkNm-oeOFnBp4bL17qQXuTwelXpKDSmT0Hz2eaY3PVfZI5LCaQcrmTLEmPgCEKySPakV-DiuM&usqp=CAc' }]
    }
  }

  componentDidMount() {

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
