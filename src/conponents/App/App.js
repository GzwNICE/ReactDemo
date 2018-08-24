import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Click from '../ClickCounter/ClickCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          第一个组件实现了加减
        </p>
        <Click />
      </div>
    );
  }
}

export default App;
