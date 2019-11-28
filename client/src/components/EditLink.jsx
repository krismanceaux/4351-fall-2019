import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class EditLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: props.linkArray.role,
      roleID: props.linkArray.roleID,
      roleLink: props.linkArray.roleLink,
      newRoleLink: ''
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.role !== this.state.role &&
      nextProps.roleID !== this.state.roleID &&
      nextProps.roleLink !== this.state.roleLink
    ) {
      this.setState({
        role: nextProps.role,
        roleID: nextProps.roleID,
        roleLink: nextProps.roleLink
      });
    }
  }

  render() {
    return (
      <Grid container justify="center" spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            textAlign: 'center',
            height: '72px',
            lineHeight: '50px',
            whiteSpace: 'nowrap'
          }}
        >
          {this.state.roleLink}
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField variant="outlined" required fullWidth></TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="primary">
            Change Link
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default EditLink;
