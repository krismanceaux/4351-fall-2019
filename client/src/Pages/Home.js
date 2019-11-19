import React, { Component } from 'react';
import DisplayLinks from '../components/DisplayLinks';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roleLinks: [],
      globalLinks: [],
      role: localStorage.getItem('role')
    };
  }

  componentDidMount() {
    this.getGlobalLinks();
    this.getRoleLinks();
  }

  getRoleLinks() {
    fetch(`http://localhost:5000/roleLinks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ role: this.state.role })
    })
      .then(res => res.json())
      .then(result => this.setState({ roleLinks: result.roleLinks }))
      .catch(err => console.log(err));
  }

  getGlobalLinks() {
    fetch(`http://localhost:5000/globalLinks`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(result => this.setState({ globalLinks: result.globalLinks }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <Paper style={{ marginBottom: '100px' }}>
          <Typography
            align="center"
            style={{
              backgroundColor: '#3f51b5',
              color: '#FFFFFF',
              fontWeight: '700'
            }}
          >
            Global Links
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {this.state.globalLinks.map(link => (
                  <DisplayLinks global={{ ...link }} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper>
          <Typography
            align="center"
            style={{
              backgroundColor: '#3f51b5',
              color: '#FFFFFF',
              fontWeight: '700'
            }}
          >
            Role Links
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {this.state.roleLinks.map(link => (
                  <DisplayLinks global={{ ...link }} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default Home;
