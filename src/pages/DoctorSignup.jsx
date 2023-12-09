import { useState, useRef } from "react";
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
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";
import { LoginContainer } from "../components/LoginContainer";
import { BackdropLoader } from "../components/BackdropLoader";

export const DoctorSignup = () => {
  const imageRef = useRef(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      setImageUploaded(true);
    } else {
      setImageUploaded(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    setError(false);
    const data = new FormData(event.currentTarget);
    const imageFile = imageRef.current.files[0];

    if (imageFile) {
      data.append("image", imageFile, imageFile.name);
    }

    axios
      .post(`${BASE_URL}/doctor/register`, data)
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
                  startIcon={
                    imageUploaded ? <CheckIcon /> : <CloudUploadIcon />
                  }
                >
                  {imageUploaded ? "Image Uploaded" : "Upload Photo"}
                  <input
                    type="file"
                    hidden
                    ref={imageRef}
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Clinic Phone Number"
                  name="phoneNumber"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Clinic Email"
                  name="email"
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
                  name="specializationId"
                  select
                  required
                  defaultValue={""}
                >
                  {Categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Clinic Address"
                  name="address"
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
