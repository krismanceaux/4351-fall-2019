import React, { useState, Component } from 'react';
import AdminCard from '../components/AdminCard';
import { Grid, TextField, Button } from '@material-ui/core';

class AdminRoles extends Component {
  state = {
    roleName: '',
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

  handleroleName = text => {
    this.setState({ roleName: text.target.value });
  };

  Submit = () => {
    const adtype = this.state.roleName;
    console.log('type: ' + adtype);
    //console.log(this.state.roleName);
    fetch(`http://localhost:5000/addToAdminList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        roleName: this.state.roleName
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err));

    window.location.replace('/adminroles');
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ width: '80%', margin: 'auto auto 10px auto' }}>
          <Grid container spacing={2}>
            <Grid item xs={8} style={{ verticalAlign: 'middle' }}>
              <TextField
                name="roleName"
                variant="outlined"
                fullWidth
                id="roleName"
                label="Add an Admin Role Here"
                value={this.state.roleName}
                onChange={this.handleroleName}
              />
            </Grid>

            <Grid item xs={4}>
              <Button
                //fullWidth
                variant="contained"
                color="primary"
                style={{
                  height: 55
                }}
                onClick={this.Submit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
        {this.state.adminList.map(admin => (
          <AdminCard admin={{ ...admin }} />
        ))}
      </React.Fragment>
    );
  }
}

export default AdminRoles;
