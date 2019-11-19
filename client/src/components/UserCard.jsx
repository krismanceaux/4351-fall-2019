import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.list.id,
      firstName: props.list.firstName,
      lastName: props.list.lastName,
      role: props.list.role,
      formattedRole: '',
      isOpen: false,
      isSuccess: false
    };
  }

  fixRole() {
    switch (this.state.role) {
      case 'FINANCE_ADMIN':
        this.setState({ formattedRole: 'Finance Admin' });
        break;
      case 'HR_ADMIN':
        this.setState({ formattedRole: 'HR Admin' });
        break;
      case 'SALES_ADMIN':
        this.setState({ formattedRole: 'Sales Admin' });
        break;
      case 'ENGG_ADMIN':
        this.setState({ formattedRole: 'Engineering Admin' });
        break;

      default:
        break;
    }
  }

  handleChange = event => {
    this.setState({ role: event.target.value });
  };

  componentDidMount() {
    this.fixRole();
  }

  handleSubmit = () => {
    const { id, role } = this.state;
    fetch(`http://localhost:5000/modifyRole`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, role })
    })
      .then(res => res.json())
      .then(this.setState({ isOpen: true }));
  };

  render() {
    return (
      <div style={{ width: '90%', margin: 'auto' }}>
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
              <Grid item xs={12} sm={6}>
                <Typography>{this.state.formattedRole}</Typography>
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
                    value={this.state.role}
                  >
                    <FormControlLabel
                      value="FINANCE_ADMIN"
                      control={<Radio color="primary" />}
                      label="Finance"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="ENGG_ADMIN"
                      control={<Radio color="primary" />}
                      label="Engineering"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="HR_ADMIN"
                      control={<Radio color="primary" />}
                      label="Human Resources"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="SALES_ADMIN"
                      control={<Radio color="primary" />}
                      label="Sales"
                      labelPlacement="top"
                    />
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
