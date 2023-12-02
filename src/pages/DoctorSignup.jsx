import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../shared/API";
import { Categories } from "../shared/data/Categories";

// Components
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  MenuItem,
  Box,
  Alert,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
import { LoginContainer } from "../components/LoginContainer";
import { BackdropLoader } from "../components/BackdropLoader";

export const DoctorSignup = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    setError(false);
    const data = new FormData(event.currentTarget);

    axios
      .post(`${BASE_URL}/doctor/register`, {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        clinicPhoneNumber: data.get("clinicPhoneNumber"),
        clinicEmail: data.get("clinicEmail"),
        dateOfBirth: data.get("dateOfBirth"),
        specialization: data.get("specialization"),
        clinicAddress: data.get("clinicAddress"),
        workplace: data.get("workplace"),
        fees: data.get("fees"),
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
              marginBottom: "2rem",
            }}
          >
            Create an Account as a Doctor
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
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Clinic Phone Number"
                  name="clinicPhoneNumber"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Clinic Email"
                  name="clinicEmail"
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
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Specialization"
                  name="specialization"
                  select
                  required
                  value={""}
                >
                  {Categories.map((category) => (
                    <MenuItem key={category} value={category.value}>
                      {category.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Clinic Address"
                  name="clinicAddress"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Workplace"
                  name="workplace"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Fees"
                  name="fees"
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12}>
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
