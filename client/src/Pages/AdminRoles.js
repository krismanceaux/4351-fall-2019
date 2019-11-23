import React, { useState, Component } from 'react';
import AdminCard from '../components/AdminCard';

class AdminRoles extends Component {
  state = {
    adminList: []
  };

  componentDidMount() {
    fetch(`http://localhost:5000/getAdminName`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(result => this.setState({ adminList: result.adminList }))
      .catch(err => console.log(err));
  }

  render() {
    return this.state.adminList.map(admin => (
      <AdminCard admin={{ ...admin }} />
    ));
  }
}

export default AdminRoles;
