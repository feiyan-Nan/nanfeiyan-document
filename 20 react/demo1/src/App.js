import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataProvider from './components/DataProvider';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <DataProvider
          render={(data) => {
            return <div>{data.target}</div>;
          }}
        />
      </Router>
    </div>
  );
}

export default App;
