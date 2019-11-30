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

  handleSubmit = () => {
    const { roleID, role, roleLink, newRoleLink } = this.state;
    fetch(`http://localhost:5000/modifyLink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ roleID, role, roleLink, newRoleLink })
    })
      .then(res => res.json())
      .then(this.setState({ isOpen: true }));
  };

  handleChange = event => {
    this.setState({ newRoleLink: event.target.value });
  };

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
          <TextField
            onChange={this.handleChange}
            variant="outlined"
            required
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Change Link
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default EditLink;
