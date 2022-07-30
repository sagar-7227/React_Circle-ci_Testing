import React, { Component } from 'react';
import logo from './moon_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Let's Explore this world of Changing Nature.
          </p>
          <p className="App-link"
          >Life is All About Taking The Next Step.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
