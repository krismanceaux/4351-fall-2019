import React, { useState, Component } from 'react';
import UserCard from '../components/UserCard';

class ModifyRoles extends Component {
  state = {
    personList: []
  };

  componentDidMount() {
    fetch(`http://localhost:5000/userInfo`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(result => this.setState({ personList: result.personList }))
      .catch(err => console.log(err));
  }

  render() {
    return this.state.personList.map(person => (
      <UserCard list={{ ...person }} />
    ));
  }
}

export default ModifyRoles;
