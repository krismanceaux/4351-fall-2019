import React from 'react';
import {
  Grid,
  Select,
  MenuItem,
  TextField,
  FormHelperText,
  InputLabel
} from '@material-ui/core';

const LoginForm = props => {
  const { formData, handleChange } = props;
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
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

export default LoginForm;
