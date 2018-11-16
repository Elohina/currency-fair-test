import React, { Component } from 'react';
import './App.css';
import Navbar from './components/common/Navbar/Navbar';
import Transaction from './components/transaction/Transaction';
import TransactionDetail from "./components/transaction/TransactionDetail";


import logo from'./assets/images/logo.svg';
import TRANSACTION_DATA from "./mock_data";

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
