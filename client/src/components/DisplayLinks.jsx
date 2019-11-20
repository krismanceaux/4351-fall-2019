import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class DisplayLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roleLink: props.global.roleLink,
      globalLink: props.global.roleLink,
      actualLink: props.global.actualLink
    };
  }

  render() {
    return (
      <Grid item>
        <a href={this.state.actualLink}>
          <Paper style={{ height: '100%', width: '100%' }}>
            {this.state.globalLink}
          </Paper>
        </a>
      </Grid>
    );
  }
}

export default DisplayLinks;
