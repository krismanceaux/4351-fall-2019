import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import ModifyRoles from './Pages/ModifyRoles';
import Login from './Pages/Login';
import Header from './components/Header';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <div className="AppHeader"></div>
      <div className="AppBody">
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/modify" component={ModifyRoles} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
