import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../shared/API";

// Components
import { Alert, Grid } from "@mui/material";
import { ProfileCard } from "./ProfileCard";
import { BackdropLoader } from "./BackdropLoader";

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
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Grid container spacing={2} sx={{ paddingTop: "50px" }}>
      {loading ? (
        <BackdropLoader />
      ) : error ? (
        <Alert severity="danger">
          Something went wrong, please try again later!
        </Alert>
      ) : (
        doctors.map((doctor) => (
          <ProfileCard
            isClickable={true}
            doctor={{
              id: doctor.id,
              name: doctor.user.firstName + " " + doctor.user.lastName,
              phoneNumber: doctor.user.phoneNumber,
              specialization: doctor.specialization,
              fees: doctor.fees,
              address: doctor.address,
            }}
            key={doctor.id}
          />
        ))
      )}
    </Grid>
  );
};
