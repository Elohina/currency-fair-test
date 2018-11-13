import React, { Component } from 'react';
import './App.css';
import logo from'./assets/logo.svg';
import Navbar from './components/common/Navbar/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
            <div className="wrapper">
              <img src={logo} alt="" className="nav-logo"></img>
            </div>
        </Navbar>
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
