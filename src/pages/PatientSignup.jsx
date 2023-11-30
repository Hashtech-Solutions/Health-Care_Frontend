import React from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export const PatientSignup = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Patient Signup
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Last Name" name="lastName" required />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                startIcon={<CloudUploadIcon />}
              >
                Upload Photo
                <input type="file" hidden />
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" name="email" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="National ID"
              name="nationalId"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
