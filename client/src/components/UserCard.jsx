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

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.list.id,
      firstName: props.list.firstName,
      lastName: props.list.lastName,
      roleName: props.list.roleName,
      roleID: props.list.roleID,
      isOpen: false,
      isSuccess: false,
      roleList: []
    };
  }

  handleChange = event => {
    this.setState({
      roleName: event.target.value
    });
  };

  componentDidMount() {
    this.getRoles();
  }

  getRoles() {
    fetch(`http://localhost:5000/getRoles`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(result => this.setState({ roleList: result.roleList }))
      .catch(err => console.log(err));
  }

  handleSubmit = () => {
    const { id, roleName } = this.state;
    fetch(`http://localhost:5000/assignRole`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, roleName })
    })
      .then(res => res.json())
      .then(this.setState({ isOpen: true }));
  };

  render() {
    return (
      <div style={{ width: '90%', margin: 'auto', marginBottom: '20px' }}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography>
                  {this.state.firstName + ' ' + this.state.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}>
                <Typography>
                  {this.state.roleName ? (
                    this.state.roleName
                  ) : (
                    <Typography style={{ fontWeight: 700 }}>
                      Role not assigned
                    </Typography>
                  )}
                </Typography>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container direction="row">
              <Grid item xs={12} sm={2}>
                <Typography>Select {this.state.firstName}'s role:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="position"
                    name="position"
                    onChange={this.handleChange}
                    row
                    value={this.state.roleName}
                  >
                    {this.state.roleList.map(obj => (
                      <FormControlLabel
                        value={obj.roleName}
                        control={<Radio color="primary" />}
                        label={obj.roleName}
                        labelPlacement="top"
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
                {this.state.isOpen && (
                  <Typography style={{ fontSize: '20px', color: '#28A745' }}>
                    Role has been changed successfully.
                  </Typography>
                )}
              </Grid>
            </Grid>

            <Button onClick={this.handleSubmit}>Submit Change</Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default UserCard;
