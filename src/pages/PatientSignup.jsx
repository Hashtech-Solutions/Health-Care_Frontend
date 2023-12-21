import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../shared/API";

// Components
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Alert,
  Box,
} from "@mui/material";
import { LoginContainer } from "../components/LoginContainer";
import { BackdropLoader } from "../components/BackdropLoader";
import { Link } from "react-router-dom";

export const PatientSignup = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    setError(false);
    const data = new FormData(event.currentTarget);
    axios
      .post(`${BASE_URL}/user/register`, {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        phoneNumber: data.get("mobileNumber"),
        nationalId: data.get("nationalId"),
        dateOfBirth: new Date(data.get("dateOfBirth")).toISOString(),
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        console.log(res);
        setLoader(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
        setError(true);
      });
  };

  return (
    <>
      {loader && <BackdropLoader />}
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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  required
                />
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
                  disabled={loader}
                >
                  {loader ? "Signing up..." : " Sign Up"}
                </Button>
              </Grid>
              <Grid item>
                <Link to="/login">{"Already have an account? Sign In"}</Link>
              </Grid>
            </Grid>
            {error && (
              <Alert severity="error" sx={{ mt: "20px" }}>
                Something went wrong please try again later!
              </Alert>
            )}
          </Box>
        </Container>
      </LoginContainer>
    </>
  );
};
