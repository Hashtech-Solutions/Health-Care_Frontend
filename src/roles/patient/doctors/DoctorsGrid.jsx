import { Grid } from "@mui/material";
import * as React from "react";
import { ProfileCard } from "../../../components/ProfileCard";

const doctors = [
  {
    id: 1,
    name: "Steven",
    specialization: "Cardiology",
    fees: "100",
    address: "123 Main Street, Anytown, USA",
    phone: "1234567890",
  },
  {
    id: 2,
    name: "John",
    specialization: "Dentistry",
    fees: "200",
    address: "123 Main Street, Anytown, USA",
    phone: "1234567890",
  },
  {
    id: 3,
    name: "Mary",
    specialization: "Dermatology",
    fees: "300",
    address: "123 Main Street, Anytown, USA",
    phone: "1234567890",
  },
];

export const DoctorsGrid = () => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: "50px" }}>
      {doctors.map((doctor) => (
        <ProfileCard
          doctor={doctor}
          isClickable={true}
        />
      ))}
    </Grid>
  );
};
