import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <div>
        <header>Counter</header>
        <Container></Container>
      </div>
    );
  }
}

export default App;
