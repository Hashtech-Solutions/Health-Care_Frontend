import React from 'react'
import { Grid, Typography, Divider } from '@mui/material'
import { BookingSlots } from './BookingSlots'
const dates = [
  {
    date: "Sun 12/10",
    slots: [
      {
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        reserved: true
      },
      {
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        reserved: true
      },
      {
        startTime: "11:00 AM",
        endTime: "12:00 PM",
        reserved: false
      },
      {
        startTime: "12:00 PM",
        endTime: "01:00 PM",
        reserved: true
      },
      {
        startTime: "01:00 PM",
        endTime: "02:00 PM",
        reserved: false
      },
      {
        startTime: "02:00 PM",
        endTime: "03:00 PM",
        reserved: false
      },
    ]
  },
  {
    date: "Tue 14/10",
    slots: [
      {
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        reserved: false
      },
      {
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        reserved: true
      },
      {
        startTime: "11:00 AM",
        endTime: "12:00 PM",
        reserved: false
      },
      {
        startTime: "12:00 PM",
        endTime: "01:00 PM",
        reserved: true
      },
      {
        startTime: "01:00 PM",
        endTime: "02:00 PM",
        reserved: false
      },
      {
        startTime: "02:00 PM",
        endTime: "03:00 PM",
        reserved: false
      },
    ]
  },
  {
    date: "Wed 15/10",
    slots: [
      {
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        reserved: false
      },
      {
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        reserved: true
      },
      {
        startTime: "11:00 AM",
        endTime: "12:00 PM",
        reserved: false
      },
      {
        startTime: "12:00 PM",
        endTime: "01:00 PM",
        reserved: true
      },
      {
        startTime: "01:00 PM",
        endTime: "02:00 PM",
        reserved: false
      },
      {
        startTime: "02:00 PM",
        endTime: "03:00 PM",
        reserved: false
      },
    ]
  }, {
    date: "Thu 16/10",
    slots: [
      {
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        reserved: false
      },
      {
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        reserved: true
      },
      {
        startTime: "11:00 AM",
        endTime: "12:00 PM",
        reserved: false
      },
      {
        startTime: "12:00 PM",
        endTime: "01:00 PM",
        reserved: true
      },
      {
        startTime: "01:00 PM",
        endTime: "02:00 PM",
        reserved: false
      },
      {
        startTime: "02:00 PM",
        endTime: "03:00 PM",
        reserved: false
      },
    ]
  }
]
export const Booking = (props) => {
  return (
    <Grid item xs={12} sm={12} md={9.5} lg={4}>
      <Grid spacing={2} sx={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "20px",
        flexDirection: "column",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}>
        <Grid item sx={{
          backgroundColor: "var(--primary)",
          borderRadius: "20px 20px 0 0",
          textAlign: "center",
          verticalAlign: "center",
          padding: "10px"
        }}>
          <Typography variant="body1" sx={{ color: "white" }}>Booking information</Typography>
        </Grid>
        <Grid item sx={{ padding: "20px", textAlign: "center" }}>
          <Typography variant="body2">Book</Typography>
          <Typography variant="body1" sx={{ color: "var(--primary)" }}>Examination</Typography>
        </Grid>
        <Divider className='BookingDivider' />
        <Typography variant="h6" sx={{ textAlign: "center", padding: "20px" }}>Choose your appointment</Typography>
        <Grid sx={{ padding: "40px", backgroundColor: '#f5f4f0', overflowX: 'scroll', display: "flex" }} >
          {dates.map((date) => (
            <BookingSlots key={date.date} date={date} doctor={props.doctor} patient={props.patient} />
          ))}
        </Grid>
        <Divider className='BookingDivider' />
        <Grid item sx={{ padding: "20px", textAlign: "center" }}>
          <Typography variant="body1">Reservation required, first-come, first-served</Typography>
        </Grid>
        <Divider className='BookingDivider' />
        <Grid item sx={{ padding: "20px", textAlign: "center" }}> <Typography variant="body1">
          Book online, Pay at the clinic!
          Doctor requires reservation!</Typography></Grid>
      </Grid>
    </Grid >
  )
}
