import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

class Header extends Component {
  state = {
    isLoggedIn: localStorage.getItem('isLoggedIn'),
    role: localStorage.getItem('role'),
    id: localStorage.getItem('id')
  };

  logOut() {
    localStorage.clear();
    this.setState({ isLoggedIn: null, role: null, id: null });
    window.location.replace('/');
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div style={{ flexGrow: '1', marginBottom: '40px' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              style={{ marginRight: '30px' }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: '1' }}>
              Admin Portal
            </Typography>
            {isLoggedIn ? (
              <Button
                style={{ color: 'white', border: '2px solid red' }}
                onClick={() => this.logOut()}
              >
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button style={{ color: 'white', border: '2px solid white' }}>
                  Login
                </Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
