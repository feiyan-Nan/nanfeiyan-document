import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * asdf
 * @constructor
 */
function App() {
  const [state, setState] = useState({ name: '南飞雁' });
  fetch('http://localhost:3004/posts')
    .then(async (res) => {
      return await res.json();
    })
    .then((res) => console.log(res));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
