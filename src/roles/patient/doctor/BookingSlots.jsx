import { Grid, Typography } from "@mui/material";
import { BookingSlot } from "./BookingSlot";

export const BookingSlots = (props) => {
  const formatDate = (inputDate) => {
    const parsedDate = new Date(inputDate);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[parsedDate.getDay()];
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const formattedDate = `${dayOfWeek} ${month}/${day}`;

    return formattedDate;
  };

  return (
    <Grid
      sx={{
        margin: "10px 20px 0 0",
        height: "auto",
        backgroundColor: "white",
        borderRadius: "5px",
        width: "100px",
        minWidth: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid
        item
        sx={{
          backgroundColor: "var(--primary)",
          borderRadius: "5px 5px 0 0",
          textAlign: "center",
          verticalAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "white", padding: "5px" }}>
          {formatDate(props.date)}
        </Typography>
      </Grid>
      {props.timeSlots.map((slot, index) => (
        <BookingSlot
          key={index}
          doctor={props.doctor}
          patient={props.patient}
          slot={slot}
          date={props.date}
          formattedDate={formatDate(props.date)}
        />
      ))}
    </Grid>
  );
};
