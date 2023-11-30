import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { LoginContainer } from "../components/LoginContainer";
import { Link } from "react-router-dom";

export const PatientSignup = () => {
  return (
    <LoginContainer>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            marginBottom: "3rem",
          }}
        >
          Create an Account as a Patient
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
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNumber"
                type="number"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="National ID"
                name="nationalId"
                type="number"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                required
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
            <Grid item>
              <Link to="/login">{"Already have an account? Sign In"}</Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </LoginContainer>
  );
};
