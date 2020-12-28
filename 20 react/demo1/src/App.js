import React from 'react';
import './App.css';
import DataProvider from './components/DataProvider';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <DataProvider
          render={(data) => {
            return <div>{data.target}</div>;
          }}
        >
          nanfeiyan
        </DataProvider>
      </Router>
    </div>
  );
}

export default App;
