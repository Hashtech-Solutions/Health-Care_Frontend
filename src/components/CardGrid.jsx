import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../shared/API";

// Components
import { Alert, Grid } from "@mui/material";
import { ProfileCard } from "./ProfileCard";
import { BackdropLoader } from "./BackdropLoader";
import { TestingDoctors } from "../shared/data/Testing";

export const CardGrid = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/doctor/all`)
      .then((res) => {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Grid container spacing={2} sx={{ paddingTop: "50px" }}>
      {loading ? (
        <BackdropLoader />
      ) : error ? (
        <Alert severity="error" variant="filled">
          Something went wrong, please try again later!
        </Alert>
      ) : (
        TestingDoctors.map((doctor) => (
          <ProfileCard isClickable={true} doctor={doctor} key={doctor.id} />
        ))
      )}
    </Grid>
  );
};
