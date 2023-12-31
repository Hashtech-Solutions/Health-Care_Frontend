import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";
import { useAuth } from "../../../hooks/useAuth";

// Components
import { Grid, Button, Box, Alert, Typography, TextField } from "@mui/material";
import { MainContainer } from "../../../components/MainContainer";
import { BackdropLoader } from "../../../components/BackdropLoader";
import { TimeSlotPicker } from "../../../pages/TimeSlotPicker";

export const Clinic = () => {
  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());
  const [period, setPeriod] = useState(0);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const authContext = useAuth();

  const timeFormatter = (timestamp) => {
    const date = new Date(timestamp);
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    return formattedTime;
  };

  function convertTimeStringToDate(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    const dateObject = new Date();
    dateObject.setHours(hours, minutes, 0, 0);
    return dateObject;
  }

  useEffect(() => {
    setOpeningTime(
      convertTimeStringToDate(authContext.userData.workingHoursStart)
    );
    setClosingTime(
      convertTimeStringToDate(authContext.userData.workingHoursEnd)
    );
    setPeriod(authContext.userData.bookingDuration * 60);
  }, [
    authContext.userData.workingHoursStart,
    authContext.userData.workingHoursEnd,
    authContext.userData.bookingDuration,
  ]);

  const handleSave = (event) => {
    event.preventDefault();
    setLoader(true);
    setError(false);
    const clinicData = {
      workingHoursStart: timeFormatter(openingTime),
      workingHoursEnd: timeFormatter(closingTime),
      bookingDuration: (period === 0 ? 15 : period) / 60,
    };
    axios
      .put(`${BASE_URL}/doctor/${authContext.id}`, clinicData)
      .then((res) => {
        authContext.userDataHandler(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
        if (err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("Something went wrong, please try again later!");
        }
      });
  };

  return (
    <>
      {loader && <BackdropLoader />}
      <MainContainer title="Clinic Settings">
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
                Open Hours
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  gap: "30px",
                }}
              >
                <TimeSlotPicker
                  label="Opening Time"
                  time={openingTime}
                  timeSetter={setOpeningTime}
                />
                <TimeSlotPicker
                  label="Closing Time"
                  time={closingTime}
                  timeSetter={setClosingTime}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
                Period per Patient (in minutes)
              </Typography>
              <TextField
                fullWidth
                type="number"
                name="period"
                value={period || ""}
                onChange={(e) => setPeriod(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSave}
              >
                Save Data
              </Button>
            </Grid>
          </Grid>
          {error && (
            <Alert severity="error" sx={{ mt: "20px" }}>
              {error}
            </Alert>
          )}
        </Box>
      </MainContainer>
    </>
  );
};
