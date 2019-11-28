import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EditLink from '../components/EditLink';

class ModifyRole extends Component {
  state = {
    roleList: [],
    pickedRole: '',
    pickedRoleNewName: '',
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
    const roleID = this.state.pickedRoleID;
    fetch(`http://localhost:5000/getRoleLinks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ roleID })
    })
      .then(res => res.json())
      .then(result =>
        this.setState({ pickedRoleLinks: result.pickedRoleLinks })
      );
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pickedRole !== this.state.pickedRole) {
      this.getLinksForRole();
    }
  }

  handleSubmit = () => {
    const { pickedRole, pickedRoleNewName, pickedRoleID } = this.state;
    fetch(`http://localhost:5000/modifyRoleName`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pickedRole, pickedRoleNewName, pickedRoleID })
    })
      .then(res => res.json())
      .then(this.setState({ isOpen: true }));
  };

  handlePickedRoleNewName = event => {
    this.setState({
      pickedRoleNewName: event.target.value
    });
  };

  render() {
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Admin Dashboard - Modify Roles
        </Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid container justify="center" spacing={2} direction="column">
              <Grid item xs={12} sm={12}>
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
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justify="center" spacing={2} direction="column">
              <Grid item xs={12} sm={12}>
                <TextField
                  name="newRoleName"
                  variant="outlined"
                  required
                  fullWidth
                  id="newRoleName"
                  label="New Role Name"
                  value={this.state.pickedRoleNewName}
                  onChange={this.handlePickedRoleNewName}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Button
          onClick={this.handleSubmit}
          fullWidth
          variant="contained"
          color="primary"
          style={{ margin: '24px 0px 16px' }}
        >
          Submit Name Change
        </Button>
        {this.state.pickedRoleLinks.map(obj => (
          <EditLink linkArray={{ ...obj }} />
        ))}
      </div>
    );
  }
}

export default ModifyRole;
