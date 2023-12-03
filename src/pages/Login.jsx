import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import { BASE_URL } from "../shared/API";

// Components
import {
  Avatar,
  Button,
  TextField,
  Box,
  Grid,
  Typography,
  Alert,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { LoginContainer } from "../components/LoginContainer";
import { BackdropLoader } from "../components/BackdropLoader";

export const Login = () => {
  const authContext = useAuth();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    setError(false);
    const data = new FormData(event.currentTarget);
    axios
      .post(`${BASE_URL}/login`, {
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        console.log(res);
        authContext.login(res.data.id, res.data.id, res.data.role, res.data);
        setLoader(false);
        if (res.data.role === "PATIENT") {
          navigate("/patient");
        } else if (res.data.role === "DOCTOR") {
          navigate("/doctor");
        }
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
        <Avatar sx={{ m: 1, bgcolor: "#1976d2" }}>
          <LoginIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
          {error && (
            <Alert severity="error" sx={{ mt: "20px" }}>
              Something went wrong please try again later!
            </Alert>
          )}
        </Box>
      </LoginContainer>
    </>
  );
};
