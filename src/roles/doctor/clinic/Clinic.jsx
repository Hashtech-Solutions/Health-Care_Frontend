import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";
import { Days } from "../../../shared/data/Days";

// Components
import {
  Grid,
  Button,
  Box,
  Alert,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  TextField,
} from "@mui/material";
import { MainContainer } from "../../../components/MainContainer";
import { BackdropLoader } from "../../../components/BackdropLoader";
import { TimeSlotPicker } from "../../../pages/TimeSlotPicker";

export const Clinic = () => {
  const [availableDays, setAvailableDays] = useState([]);
  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());
  const [period, setPeriod] = useState(0);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleSave = (event) => {
    event.preventDefault();
    setLoader(true);
    setError(false);
    const clinicData = {
      availableDays,
      openingTime,
      closingTime,
      period,
    };
    console.log(clinicData);

    // axios
    //   .put(`${BASE_URL}/doctor/edit/${userData.id}`, updatedData)
    //   .then((res) => {
    //     console.log(res);
    //     authContext.userDataHandler(userData);
    //     setLoader(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError(true);
    //     setLoader(false);
    //   });
  };

  return (
    <>
      {loader && <BackdropLoader />}
      <MainContainer title="Clinic Settings">
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ mt: 1, mb: 2 }} variant="h6" component="div">
                Open Days
              </Typography>
              <ToggleButtonGroup
                value={availableDays}
                onChange={(event, newDays) => {
                  setAvailableDays(newDays);
                }}
                aria-label="available days"
                color="primary"
                fullWidth
                sx={{
                  "@media (max-width:900px)": {
                    display: "flex",
                    flexWrap: "wrap",
                  },
                }}
              >
                {Days.map((day) => (
                  <ToggleButton value={day.value} key={day.id}>
                    {day.name}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Grid>
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
                  value={openingTime}
                  timeSetter={setOpeningTime}
                />
                <TimeSlotPicker
                  label="Closing Time"
                  value={closingTime}
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
                value={period}
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
              Something went wrong please try again later!
            </Alert>
          )}
        </Box>
      </MainContainer>
    </>
  );
};
