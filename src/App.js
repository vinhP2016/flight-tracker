import React, { Component } from 'react';
import logo from './Images/myLogo.PNG';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Welcome to the best Flight Tracker app
          </p>

        </header>
      </div>
    );
  }
}

export default App;
