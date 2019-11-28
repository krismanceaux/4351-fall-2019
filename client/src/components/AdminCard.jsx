import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class AdminCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: props.admin.roleName
    };
  }

  Delete = () => {
    fetch(`http://localhost:5000/deleteRole`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ role: this.state.admin })
    })
      .then(res => res.json())
      .catch(err => console.log(err));
    window.location.replace('/adminroles');
  };

  render() {
    return (
      <div style={{ width: '90%', margin: 'auto' }}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Grid container>
              <Grid item xs={12}></Grid>
              <Typography>{this.state.admin}</Typography>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                {/* button goes here */}
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{
                    height: 35
                  }}
                  href="/modifyRole"
                >
                  Modify
                </Button>
              </Grid>
              <Grid item xs={2}>
                {/* button goes here */}
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  style={{
                    height: 35
                  }}
                  onClick={this.Delete}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default AdminCard;
