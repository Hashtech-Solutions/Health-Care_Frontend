import React, { useState } from 'react'
import { Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import axios from 'axios'
import { BASE_URL } from '../../../shared/API';

export const BookingSlot = (props) => {
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);
  const [openThankYou, setOpenThankYou] = useState(false);

  const handleClick = () => {
    if (!props.reserved) {
      setSelected(!selected);
      setOpen(true);
    }
  }

  const handleClose = () => {
    setOpen(false);
    setSelected(false);
  }

  const handleConfirm = async () => {
    setOpen(false);
    setSelected(false);

    const data = {
      doctorId: props.doctor.id,
      patientId: props.patient.id,
      day: "2023-12-11",
      start: props.slot.startTime.replace(/(AM|PM)/g, '').trim(),
      end: props.slot.endTime.replace(/(AM|PM)/g, '').trim()
    };
    console.log(data);

    try {
      const response = await axios.post(`${BASE_URL}/book`, data);
      console.log(response.data);
      setOpenThankYou(true);
    } catch (error) {
      console.error(error);
    }
  }

  const handleCloseThankYou = () => {
    setOpenThankYou(false);
  }

  return (
    <Grid item sx={{ padding: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {props.slot.reserved ? (
        <Typography variant="h6" sx={{ color: 'gray', textDecoration: 'line-through', fontSize: "14px" }}>
          {props.slot.startTime}
        </Typography>
      ) : (
        <Button variant="text" onClick={handleClick} sx={{
          color: selected ? 'white' : 'var(--primary)',
          fontSize: "14px",
          backgroundColor: selected ? 'var(--primary)' : 'transparent',
          '&:hover': {
            backgroundColor: 'var(--primary)',
            color: 'white'
          }
        }}>
          {props.slot.startTime}
        </Button>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Confirm Appointment"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Doctor Name: {props.doctor.name} <br />
            Patient Name: {props.patient.name} <br />
            Appointment Date: {props.date} <br />
            Appointment Time: {props.slot.startTime}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openThankYou} onClose={handleCloseThankYou}>
        <DialogTitle>{"Thank You"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for using Veezeta to book your appointment.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseThankYou}>Close</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}