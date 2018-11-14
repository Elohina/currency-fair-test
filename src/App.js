import React, { Component } from 'react';
import './App.css';
import logo from'./assets/logo.svg';
import Navbar from './components/common/Navbar/Navbar';
import Transaction from './components/transaction/Transaction';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
            <div className="wrapper">
              <img src={logo} alt="" className="nav-logo"></img>
            </div>
        </Navbar>
        <Transaction />
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
