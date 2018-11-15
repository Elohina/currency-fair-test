import React, { Component } from 'react';
import './App.css';
import logo from'./assets/logo.svg';
import Navbar from './components/common/Navbar/Navbar';
import Transaction from './components/transaction/Transaction';
import TransactionDetail from "./components/transaction-detail/TransactionDetail";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
            <div className="wrapper">
              <img src={logo} alt="" className="nav-logo"></img>
            </div>
        </Navbar>
        <div className="wrapper wrapper-flex">
              <Transaction />
              <TransactionDetail />
        </div>
      </div>
    );
  }
}

export default App;
