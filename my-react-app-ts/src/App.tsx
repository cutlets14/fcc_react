import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
