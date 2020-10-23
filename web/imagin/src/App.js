import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageResize from './components/ImageResize';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ImageResize></ImageResize>
      </header>
    </div>
  );
}

export default App;
