import React from 'react';
import { Grid, TextField } from '@material-ui/core';

const FormOne = props => {
  const { formData, handleChange } = props;
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="lastName"
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
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
            value={formData.username}
            onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default FormOne;
