import React, { useState } from 'react'
import { Grid, Typography, Button } from '@mui/material'

export const BookingSlot = (props) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (!props.reserved) {
      setSelected(!selected);
    }
  }

  return (
    <Grid item sx={{ padding: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {props.reserved ? (
        <Typography variant="h6" sx={{ color: 'gray', textDecoration: 'line-through', fontSize: "14px" }}>
          {props.startTime}
        </Typography>
      ) : (
        <Button variant="text" onClick={handleClick} sx={{ color: selected ? 'white' : 'var(--primary)', fontSize: "14px", backgroundColor: selected ? 'var(--primary)' : 'transparent', '&:hover': { backgroundColor: 'var(--primary)', color: 'white' } }}>
          {props.startTime}
        </Button>
      )}
    </Grid>
  )
}