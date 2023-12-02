import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import { BASE_URL } from "../shared/API";

// Components
import {
  Avatar,
  Button,
  TextField,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { LoginContainer } from "../components/LoginContainer";

export const Login = () => {
  const authContext = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post(`${BASE_URL}/login`, {
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        console.log(res);
        // authContext.login(res.id, res.token, res.role, res.userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LoginContainer>
      <Avatar sx={{ m: 1, bgcolor: "#1976d2" }}>
        <LoginIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
      </Box>
    </LoginContainer>
  );
};
