import React from "react";
import { MainContainer } from "../../../components/MainContainer";
import { ProfileCard } from "../../../components/ProfileCard";
import { Grid } from "@mui/material";
import { ProfileDetailsCard } from "../../../components/ProfileDetailsCard";
import { Booking } from "../../../components/Booking";
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
export const DoctorView = (props) => {
  return <MainContainer title={`Book now with Doctor ${doctor.name}`}>

    <Grid container spacing={2}>
      <Grid item direction={"column"} spacing={2}>
        <ProfileCard
          name={doctor.name}
          specialization={doctor.specialization}
          fees={doctor.fees}
          address={doctor.address}
          phone={doctor.phone}
          key={doctor.name}
          id={doctor.id}
          isClickable={false}
        />
        <Box mt={2} />
        <ProfileDetailsCard
          description={doctor.description}
        />
      </Grid>
      <Booking />
    </Grid>
  </MainContainer >;
};
