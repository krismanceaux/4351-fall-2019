import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Pages/Form';
import Login from './Pages/Login';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="AppHeader"></div>
      <div className="AppBody">
        <Header />
        <Switch>
          <Route path="/form" component={Form} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
