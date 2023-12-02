import { Grid } from "@mui/material";
import * as React from "react";
import { CardItem } from "./CardItem";

const names = [
  {
    name: "Steven",
    specialization: "Cardiology",
    fees: "100",
    address: "123 Main Street, Anytown, USA",
    phone: "1234567890",
  },
  {
    name: "John",
    specialization: "Dentistry",
    fees: "200",
    address: "123 Main Street, Anytown, USA",
    phone: "1234567890",
  },
  {
    name: "Mary",
    specialization: "Dermatology",
    fees: "300",
    address: "123 Main Street, Anytown, USA",
    phone: "1234567890",
  },
];

export const CardGrid = () => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: "50px" }}>
      {names.map((name) => (
        <CardItem
          name={name.name}
          specialization={name.specialization}
          fees={name.fees}
          address={name.address}
          phone={name.phone}
          key={name.name}
        />
      ))}
    </Grid>
  );
};
