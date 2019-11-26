import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class ModifyRole extends Component {
  state = {
    roleList: [],
    pickedRole: '',
    pickedRoleID: '',
    pickedRoleLinks: []
  };

  getRoles() {
    fetch(`http://localhost:5000/getRoles`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(result => this.setState({ roleList: result.roleList }))
      .catch(err => console.log(err));
  }

  getLinksForRole() {
    fetch(`http://localhost:5000/getRoleLinks`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(result => this.setState({ pickedRoleLinks: result }));
  }

  componentDidMount() {
    this.getRoles();
  }

  handlePickedRole = event => {
    this.setState({
      pickedRole: event.target.value.roleName,
      pickedRoleID: event.target.value.id
    });
  };

  handlePickedRole = event => {
    this.setState({
      pickedRoleLinks: [...this.state.pickedRoleLinks, event.target.value]
    });
  };

  render() {
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Admin Dash - Modify Roles
        </Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl variant="outlined" style={{ minWidth: '100%' }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.pickedRole.roleName}
                onChange={this.handlePickedRole}
              >
                {this.state.roleList.map(role => (
                  <MenuItem value={role}>{role.roleName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            Change Role Name To:
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="newRoleName"
              variant="outlined"
              required
              fullWidth
              id="newRoleName"
              label="New Role Name"
              onChange={this.handlePickedRole}
            />
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              name="lastName"
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <ArrowForwardIosIcon />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              style={{ marginBottom: '20px' }}
              variant="outlined"
              required
              fullWidth
              name="username"
              label="Username"
              type="username"
              id="username"
            />
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ModifyRole;
