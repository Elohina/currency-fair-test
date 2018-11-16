import React, { Component } from 'react';
import './App.css';
import Navbar from './components/common/Navbar/Navbar';
import Transaction from './components/transaction/Transaction';
import TransactionDetail from "./components/transaction-detail/TransactionDetail";


import logo from'./assets/logo.svg';
import EUR_IMG from "./assets/EUR.png";
import GBP_IMG from "./assets/GBP.png";

const TRANSACTION_DATA = {
  send: {
      amount: 2000.00,
      currency: {
          name: 'EUR', img: EUR_IMG, symbol: '$'
      }
  },
  receive: {
      amount: 1717.94,
      currency: {
          name: 'GBP', img: GBP_IMG, symbol: '€'
      }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
            <div className="wrapper">
              <img src={logo} alt="" className="nav-logo"></img>
            </div>
        </Navbar>
        <div className="transactions-wrapper wrapper-flex">
              <Transaction transaction_data={TRANSACTION_DATA} />
              <TransactionDetail transaction_data={TRANSACTION_DATA} />
        </div>
      </div>
    );
  }
}

export default App;
