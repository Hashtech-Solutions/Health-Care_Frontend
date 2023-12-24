import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";
import { useAuth } from "../../../hooks/useAuth";

// Components
import { TextField, Grid, Button, Box, Alert } from "@mui/material";
import { MainContainer } from "../../../components/MainContainer";
import { BackdropLoader } from "../../../components/BackdropLoader";

export const PatientProfile = () => {
  const authContext = useAuth();
  const [userData, setUserData] = useState(authContext.userData);
  const [updatedData, setUpdatedData] = useState({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  };

  const handleFieldChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setUpdatedData({
      ...updatedData,
      [event.target.name]:
        event.target.name === "dateOfBirth"
          ? new Date(event.target.value).toISOString()
          : event.target.value,
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    setLoader(true);
    setError(false);
    axios
      .put(`${BASE_URL}/user/${authContext.id}`, updatedData)
      .then((res) => {
        authContext.userDataHandler(res.data);
        setLoader(false);
      })
      .catch((err) => {
        setError(true);
        setLoader(false);
      });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setLoader(true);
    setError(false);
    axios
      .delete(`${BASE_URL}/user/${authContext.id}`)
      .then((res) => {
        authContext.logout();
        setLoader(false);
      })
      .catch((err) => {
        setError(true);
        setLoader(false);
      });
  };

  return (
    <>
      {loader && <BackdropLoader />}
      <MainContainer title="Profile Settings">
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                required
                value={userData.firstName || ""}
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                required
                value={userData.lastName || ""}
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="phoneNumber"
                type="number"
                value={userData.phoneNumber || ""}
                onChange={handleFieldChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="National ID"
                name="nationalId"
                type="number"
                value={userData.nationalId || ""}
                onChange={handleFieldChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dateOfBirth"
                value={formatDate(userData.dateOfBirth) || ""}
                onChange={handleFieldChange}
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
                value={userData.email || ""}
                onChange={handleFieldChange}
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                mt: "20px",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSave}
                disabled={Object.keys(updatedData).length === 0}
              >
                Save Data
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="error"
                fullWidth
                onClick={handleDelete}
              >
                Delete Account
              </Button>
            </Grid>
          </Grid>
          {error && (
            <Alert severity="error" sx={{ mt: "20px" }}>
              Something went wrong please try again later!
            </Alert>
          )}
        </Box>
      </MainContainer>
    </>
  );
};
