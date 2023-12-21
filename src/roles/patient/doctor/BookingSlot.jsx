import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";

// Components
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Alert,
} from "@mui/material";

export const BookingSlot = (props) => {
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);
  const [openThankYou, setOpenThankYou] = useState(false);
  const [status, setStatus] = useState("");

  const handleClick = () => {
    if (!props.reserved) {
      setSelected(!selected);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(false);
  };

  const handleConfirm = () => {
    setStatus("loading");

    const data = {
      doctorId: props.doctor.id,
      patientId: props.patient.id,
      day: props.date,
      start: props.slot.startTime.replace(/(AM|PM)/g, "").trim(),
      end: props.slot.endTime.replace(/(AM|PM)/g, "").trim(),
    };

    axios
      .post(`${BASE_URL}/book`, data)
      .then((res) => {
        console.log(res);
        setStatus("success");
        handleClose();
        setOpenThankYou(true);
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  };

  const handleCloseThankYou = () => {
    setOpenThankYou(false);
  };

  return (
    <Grid
      item
      sx={{
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.slot.isReserved ? (
        <Typography
          variant="h6"
          sx={{
            color: "gray",
            textDecoration: "line-through",
            fontSize: "14px",
          }}
        >
          {props.slot.startTime}
        </Typography>
      ) : (
        <Button
          variant="text"
          onClick={handleClick}
          sx={{
            color: selected ? "white" : "var(--primary)",
            fontSize: "14px",
            backgroundColor: selected ? "var(--primary)" : "transparent",
            "&:hover": {
              backgroundColor: "var(--primary)",
              color: "white",
            },
          }}
        >
          {props.slot.startTime}
        </Button>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Confirm Appointment"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Doctor Name: {props.doctor.firstName + "" + props.doctor.lastName}
            <br />
            Patient Name:{" "}
            {props.patient.firstName + " " + props.patient.lastName}
            <br />
            Appointment Date: {props.formattedDate} <br />
            Appointment Time: {props.slot.startTime}
            {status === "error" && (
              <>
                <br />
                <Alert severity="error" sx={{ marginTop: "20px" }}>
                  Something went wrong. Please try again later.
                </Alert>
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={status === "loading"}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} disabled={status === "loading"}>
            {status === "loading" ? "Loading..." : "Confirm"}
          </Button>
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
  );
};
