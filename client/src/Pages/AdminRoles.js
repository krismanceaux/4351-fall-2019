import React, { useState, Component } from 'react';
import AdminCard from '../components/AdminCard';
import { Grid, TextField, Button } from '@material-ui/core';

class AdminRoles extends Component {
  state = {
    adminType: '',
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

  handleAdminType = text => {
    this.setState({ adminType: text.target.value });
  };

  Submit = () => {
    const adtype = this.state.adminType;
    console.log('type: ' + adtype);
    //console.log(this.state.adminType);
    fetch(`http://localhost:5000/addToAdminList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        adminType: this.state.adminType
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              name="adminType"
              variant="outlined"
              fullWidth
              id="adminType"
              label="Admin Type"
              value={this.state.adminType}
              onChange={this.handleAdminType}
            />
          </Grid>

          <Grid item xs={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '24px 0px 16px' }}
              onClick={this.Submit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        {this.state.adminList.map(admin => (
          <AdminCard admin={{ ...admin }} />
        ))}
      </React.Fragment>
    );
  }
}

export default AdminRoles;
