import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './router';

function App() {
  const [count, setCount] = useState(5);

  return (
    <Router>
      <Switch>
        {routes.map((item) => (
          <Route exact key={item.path} path={item.path} component={item.component} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
