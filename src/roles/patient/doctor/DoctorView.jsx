import React from "react";
import { MainContainer } from "../../../components/MainContainer";
import { ProfileCard } from "../../../components/ProfileCard";
import { Grid } from "@mui/material";
import { ProfileDetailsCard } from "../../../components/ProfileDetailsCard";
import { Booking } from "./Booking";
import { Box } from "@mui/system";

const doctor = {
  id: 1,
  name: "Steven",
  specialization: "Cardiology",
  fees: "100",
  address: "123 Main Street, Anytown, USA",
  phone: "1234567890",
  description: "Specialized in Cardiology, Dr. Steven has been working in the field for 10 years."

};
const patient = {
  id: 1,
  name: "John",
  email: "john.doe@example.com"
};
export const DoctorView = (props) => {
  return <MainContainer title={`Book now with Doctor ${doctor.name}`}>

    <Grid container spacing={2}>
      <Grid item direction={"column"} spacing={2}>
        <ProfileCard
          doctor={doctor}
          isClickable={false}
        />
        <Box mt={2} />
        <ProfileDetailsCard
          description={doctor.description}
        />
      </Grid>
      <Booking doctor={doctor} patient={patient} />
    </Grid>
  </MainContainer >;
};
