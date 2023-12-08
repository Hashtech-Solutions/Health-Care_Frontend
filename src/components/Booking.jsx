import React from 'react'
import { Grid, Typography, Divider } from '@mui/material'
import { BookingSlots } from './BookingSlots'
const dates = [
  {
    date: "Sun 12/10",
    slots: [
      {
        startTime: "9:00 AM",
        reserved: true
      },
      {
        startTime: "10:00 AM",
        reserved: true
      },
      {
        startTime: "11:00 AM",
        reserved: false
      },
      {
        startTime: "12:00 PM",
        reserved: true
      },
      {
        startTime: "1:00 PM",
        reserved: false
      },
      {
        startTime: "2:00 PM",
        reserved: false
      },
    ]
  },
  {
    date: "Mon 13/10",
    slots: [
      {
        startTime: "9:00 AM",
        reserved: false
      },
      {
        startTime: "10:00 AM",
        reserved: true
      },
      {
        startTime: "11:00 AM",
        reserved: false
      },
      {
        startTime: "12:00 PM",
        reserved: true
      },
      {
        startTime: "1:00 PM",
        reserved: false
      },
      {
        startTime: "2:00 PM",
        reserved: false
      },
    ]
  },
  {
    date: "Tue 14/10",
    slots: [
      {
        startTime: "9:00 AM",
        reserved: false
      },
      {
        startTime: "10:00 AM",
        reserved: true
      },
      {
        startTime: "11:00 AM",
        reserved: false
      },
      {
        startTime: "12:00 PM",
        reserved: true
      },
      {
        startTime: "1:00 PM",
        reserved: false
      },
      {
        startTime: "2:00 PM",
        reserved: false
      },
    ]
  },
  {
    date: "Tue 14/10",
    slots: [
      {
        startTime: "9:00 AM",
        reserved: false
      },
      {
        startTime: "10:00 AM",
        reserved: true
      },
      {
        startTime: "11:00 AM",
        reserved: false
      },
      {
        startTime: "12:00 PM",
        reserved: true
      },
      {
        startTime: "1:00 PM",
        reserved: false
      },
      {
        startTime: "2:00 PM",
        reserved: false
      },
    ]
  },
  {
    date: "Tue 14/10",
    slots: [
      {
        startTime: "9:00 AM",
        reserved: false
      },
      {
        startTime: "10:00 AM",
        reserved: true
      },
      {
        startTime: "11:00 AM",
        reserved: false
      },
      {
        startTime: "12:00 PM",
        reserved: true
      },
      {
        startTime: "1:00 PM",
        reserved: false
      },
      {
        startTime: "2:00 PM",
        reserved: false
      },
    ]
  },
  {
    date: "Tue 14/10",
    slots: [
      {
        startTime: "9:00 AM",
        reserved: false
      },
      {
        startTime: "10:00 AM",
        reserved: true
      },
      {
        startTime: "11:00 AM",
        reserved: false
      },
      {
        startTime: "12:00 PM",
        reserved: true
      },
      {
        startTime: "1:00 PM",
        reserved: false
      },
      {
        startTime: "2:00 PM",
        reserved: false
      },
    ]
  }
]
export const Booking = () => {
  return (
    <Grid item>
      <Grid direction="column" spacing={2} sx={{ width: "450px", backgroundColor: "white", borderRadius: "20px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", }}>
        <Grid item sx={{ backgroundColor: "var(--primary)", borderRadius: "20px 20px 0 0", textAlign: "center", verticalAlign: "center", padding: "10px" }}>
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
            <BookingSlots key={date.date} date={date} />
          ))}
        </Grid>
        <Divider className='BookingDivider' />
        <Grid item sx={{ padding: "20px", textAlign: "center" }}> <Typography variant="body1">Reservation required, first-come, first-served</Typography></Grid>
        <Divider className='BookingDivider' />
        <Grid item sx={{ padding: "20px", textAlign: "center" }}> <Typography variant="body1">
          Book online, Pay at the clinic!
          Doctor requires reservation!</Typography></Grid>
      </Grid>
    </Grid >
  )
}
