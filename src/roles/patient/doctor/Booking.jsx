import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";

// Components
import { Grid, Typography, Divider } from "@mui/material";
import { BookingSlots } from "./BookingSlots";
import { StatusContainer } from "../../../components/StatusContainer";

export const Booking = (props) => {
  const [dates, setDates] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/book/availble_slots/${props.doctor.id}`)
      .then((res) => {
        setDates(res.data);
        setStatus("success");
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      });
  }, [props.doctor.id]);

  return (
    <Grid>
      <StatusContainer status={status}>
        <Grid
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            flexDirection: "column",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Grid
            item
            sx={{
              backgroundColor: "var(--primary)",
              borderRadius: "20px 20px 0 0",
              textAlign: "center",
              verticalAlign: "center",
              padding: "10px",
            }}
          >
            <Typography variant="body1" sx={{ color: "white" }}>
              Booking information
            </Typography>
          </Grid>
          <Grid item sx={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="body2">Book</Typography>
            <Typography variant="body1" sx={{ color: "var(--primary)" }}>
              Examination
            </Typography>
          </Grid>
          <Divider className="BookingDivider" />
          <Typography
            variant="h6"
            sx={{ textAlign: "center", padding: "20px" }}
          >
            Choose your appointment
          </Typography>
          <Grid
            sx={{
              padding: "40px",
              backgroundColor: "#f5f4f0",
              overflowX: "scroll",
              display: "flex",
            }}
          >
            {dates.map((dateObject, index) => {
              const [date, timeSlots] = Object.entries(dateObject)[0];
              return (
                <BookingSlots
                  key={index}
                  date={date}
                  timeSlots={timeSlots}
                  doctor={props.doctor}
                  patient={props.patient}
                />
              );
            })}
          </Grid>
          <Divider className="BookingDivider" />
          <Grid item sx={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="body1">
              Reservation required, first-come, first-served
            </Typography>
          </Grid>
          <Divider className="BookingDivider" />
          <Grid item sx={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="body1">
              Book online, Pay at the clinic! Doctor requires reservation!
            </Typography>
          </Grid>
        </Grid>
      </StatusContainer>
    </Grid>
  );
};
