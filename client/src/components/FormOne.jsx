import React from 'react';
import {
  Grid,
  Select,
  MenuItem,
  TextField,
  InputLabel
} from '@material-ui/core';

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
            label="Last Name"
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
        <Grid item xs={12} sm={6}>
          <InputLabel id="selectRole">Role</InputLabel>
          <Select
            labelId="selectRole"
            id="demo-simple-select"
            id="selectRole"
            label="Select role"
            value={formData.role}
            onChange={e =>
              handleChange({
                target: { id: 'role', value: e.target.value }
              })
            }
          >
            <MenuItem value={'FINANCE_ADMIN'}>Finance Admin</MenuItem>
            <MenuItem value={'ENGG_ADMIN'}>Engineering Admin</MenuItem>
            <MenuItem value={'SALES_ADMIN'}>Sales Admin</MenuItem>
            <MenuItem value={'HR_ADMIN'}>HR Admin</MenuItem>
          </Select>
        </Grid>

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

export default FormOne;
