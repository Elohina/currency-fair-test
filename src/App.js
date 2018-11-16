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
			name: 'EUR', img: EUR_IMG, symbol: '€'
		}
  	},
	receive: {
		amount: 1717.94,
		currency: {
			name: 'GBP', img: GBP_IMG, symbol: '£'
		}
	},
	rate: 0.86022,
	fee: 2.50,
	delivery_date: "2018-11-25"
}
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			transaction_data: TRANSACTION_DATA
		};
		this.onChangeSendInput = this.onChangeSendInput.bind(this);
        this.onChangeReceiveInput = this.onChangeReceiveInput.bind(this);
	}

	onChangeSendInput(value) {
		const { send, receive, fee, rate } = this.state.transaction_data;
		send.amount = value;
		receive.amount = send.amount * rate + fee;
		this.setState({send, receive});
    }

    onChangeReceiveInput(value) {
        const { send, receive, fee, rate } = this.state.transaction_data;
		receive.amount = value;
		send.amount = receive.amount / rate - fee;
		this.setState({send, receive});
    }

	render() {
		return (
		<div className="App">
			<Navbar>
				<div className="wrapper">
				<img src={logo} alt="" className="nav-logo"></img>
				</div>
			</Navbar>
			<div className="transactions-wrapper wrapper-flex">
				<Transaction transaction_data={this.state.transaction_data} onChangeSendInput={this.onChangeSendInput} onChangeReceiveInput={this.onChangeReceiveInput} />
				<TransactionDetail transaction_data={this.state.transaction_data} />
			</div>
		</div>
		);
	}
}

export default App;
