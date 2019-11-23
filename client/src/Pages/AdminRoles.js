import React, { useState, Component } from 'react';
import RoleCard from '../components/RoleCard';

class AdminRoles extends Component {
  state = {
      roleList: []
  };

  componentDidMount() {
    fetch(`http://localhost:5000/getRoleName`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(result => this.setState({ roleList: result.roleList }))
      .catch(err => console.log(err));
  }

  render() {
    return this.state.roleList.map(role => (
        <RoleCard role={{ ...role}}/>
    ))
  }
}

export default AdminRoles;