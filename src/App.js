import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header headerMsg="Header Content"/>
        <Body bodyMsg="Body Content"/>
        <Footer footerMsg="Footer Content"/>
      </div>
    );
  }
}

export default App;
