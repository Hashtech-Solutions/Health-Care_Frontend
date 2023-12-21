import { useState, useEffect } from "react";
import { BASE_URL } from "../../../shared/API";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";

// Components
import { MainContainer } from "../../../components/MainContainer";
import { StatusContainer } from "../../../components/StatusContainer";
import { ProfileCard } from "../../../components/ProfileCard";
import { Grid, Box } from "@mui/material";
import { ProfileDetailsCard } from "../../../components/ProfileDetailsCard";
import { Booking } from "./Booking";

export const DoctorView = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const [status, setStatus] = useState("loading");
  const authContext = useAuth();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/doctor/one/${id}`)
      .then((response) => {
        setDoctor(response.data);
        setStatus("success");
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error);
        setStatus("error");
      });
  }, [id]);

  return (
    <MainContainer
      title={`Book now with Doctor ${doctor.firstName} ${doctor.lastName}`}
    >
      <StatusContainer status={status}>
        <Grid
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
          }}
        >
          <Grid>
            <ProfileCard doctor={doctor} isClickable={false} />
            <Box mt={2} />
            <ProfileDetailsCard description={doctor.about} />
          </Grid>
          <Booking doctor={doctor} patient={authContext.userData} />
        </Grid>
      </StatusContainer>
    </MainContainer>
  );
};
