import React, { Component } from 'react';
import './App.css';
import logo from'./assets/logo.svg';
import Navbar from './components/common/Navbar/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
            <img src={logo} alt="" className="nav-logo"></img>
        </Navbar>
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
