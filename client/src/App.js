import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import AssignRoles from './Pages/AssignRoles';
import ModifyRole from './Pages/ModifyRole';
import Login from './Pages/Login';
import Header from './components/Header';
import Home from './Pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="AppHeader"></div>
        <div className="AppBody">
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route path="/assign" component={AssignRoles} />
            <Route path="/modifyRole" component={ModifyRole} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
