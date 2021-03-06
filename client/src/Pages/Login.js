import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

class Login extends Component {
  state = {
    id: '',
    role: '',
    userName: '',
    password: '',
    output: ''
  };

  handleUserName = text => {
    this.setState({ userName: text.target.value });
  };

  handlePassword = text => {
    this.setState({ password: text.target.value });
  };

  Login() {
    fetch(`http://localhost:5000/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.userName,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(result => {
        if (
          result.result != undefined &&
          result.result.id !== null &&
          result.result.id !== undefined &&
          result.result.id.length !== 0
        ) {
          this.setState({ output: 1 });
          localStorage.setItem('id', result.result.id);
          localStorage.setItem('role', result.result.roleName);
          localStorage.setItem('roleID', result.result.roleID);
          localStorage.setItem('isLoggedIn', true);
          this.setState({ id: result.result.id, role: result.result.role });
          localStorage.setItem('jwt', result.token);
        } else {
          this.setState({ output: 0 });
        }
      })
      .catch(err => console.log(err));
  }

  output() {
    if (this.state.output === 0) {
      return (
        <center>
          <text>
            <font color="red">Username or Password are incorrect</font>
          </text>
        </center>
      );
    }
  }

  render() {
    if (this.state.output === 1 && this.state.role !== undefined) {
      window.location.replace('/home');
    }
    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div
            style={{
              display: 'flex',
              marginTop: '64px',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Avatar style={{ margin: '8px', backgroundColor: '#f50057' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form style={{ width: '100%', marginTop: '24px' }} noValidate>
              <Grid container spacing={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      style={{ marginBottom: '20px' }}
                      variant="outlined"
                      required
                      fullWidth
                      name="username"
                      label="Username"
                      type="username"
                      id="username"
                      value={this.state.username}
                      onChange={this.handleUserName}
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
                        value={this.state.password}
                        onChange={this.handlePassword}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: '24px 0px 16px' }}
                onClick={() => this.Login()}
              >
                Login
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/signUp">Don't have an account? Sign up</Link>
                </Grid>
              </Grid>
            </form>
            {this.output()}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;
