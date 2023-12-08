import React from 'react'
import { Grid, Typography } from '@mui/material'
import { BookingSlot } from './BookingSlot'
export const BookingSlots = (props) => {
  return (
    <Grid direction="column" spacing={2} sx={{
      margin: "10px 20px 0 0",
      height: "300px",
      backgroundColor: "white",
      borderRadius: "5px",
      minWidth: "100px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <Grid item sx={{ backgroundColor: "var(--primary)", borderRadius: "5px 5px 0 0", textAlign: "center", verticalAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "white", padding: "5px" }}>{props.date.date}</Typography>
      </Grid>
      {props.date.slots.map((slot, index) => (
        <BookingSlot key={index} startTime={slot.startTime} reserved={slot.reserved} />
      ))}
    </Grid>
  )
}
