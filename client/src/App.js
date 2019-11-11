import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Pages/Form';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="AppHeader"></div>
      <div className="AppBody">
        <Switch>
          <Route path="/form" component={Form} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
