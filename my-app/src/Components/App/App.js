import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from '../Contact/Contact';
import Chat from '../Chat/Chat';
import SplitPane from '../SplitPane/SplitPane';
import SignUpDialog from '../Dialog/SignUpDialog';
import Calculator from '../Lifting State Up/Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Test Split Pane">
          <SplitPane left={<Contact />} right={<Chat />} />
        </div>


        <div className="Dialog">
          <SignUpDialog />
        </div>

        {/* Life State up */}
        <Calculator />
      </div>

    );
  }
}

export default App;
