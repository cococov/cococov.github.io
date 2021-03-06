import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (): JSX.Element => {

  useEffect(() => {
    let url = 'https://cococov.github.io/portfolio/';
    window.location.replace(url);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
