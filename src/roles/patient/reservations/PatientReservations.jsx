import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";
import { useAuth } from "../../../hooks/useAuth";

// Components
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { MainContainer } from "../../../components/MainContainer";
import { StatusContainer } from "../../../components/StatusContainer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const PatientReservations = () => {
  const [appointments, setAppointments] = useState([]);
  const [status, setStatus] = useState("loading");
  const authContext = useAuth();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/book/patient/${authContext.id}`)
      .then((res) => {
        console.log(res);
        setAppointments(res.data);
        setStatus(res.data.length > 0 ? "success" : "empty");
      })
      .catch((err) => {
        console.log(err);
        setStatus("error");
      });
  }, [authContext.id]);

  function formatDate(inputDateString) {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Date(inputDateString).toLocaleDateString(
      "en-GB",
      options
    );
    return formattedDate;
  }

  function formatTime(inputTimeString) {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    const formattedTime = new Date(inputTimeString).toLocaleTimeString(
      "en-US",
      options
    );
    return formattedTime;
  }

  const handleDelete = (id) => {
    setStatus("loading");
    axios
      .delete(`${BASE_URL}/book/${id}`)
      .then((res) => {
        console.log(res);
        setAppointments(appointments.filter((data) => data.id !== id));
        setStatus("success");
      })
      .catch((err) => {
        console.log(err);
        setStatus("error");
      });
  };

  return (
    <MainContainer title="Appointments">
      <StatusContainer status={status} emptyMessage="No appointments yet!">
        {appointments.map((data) => {
          return (
            <Accordion key={data.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={data.id}
                sx={{
                  backgroundColor: "#F3F3F3",
                }}
              >
                <Typography sx={{ width: "15%", flexShrink: 0 }}>
                  {formatDate(data.day)}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Appointment with Dr. {data.doctor.firstName}{" "}
                  {data.doctor.lastName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    width: "100%",
                  }}
                >
                  <ListItem
                    sx={{
                      gap: "1.5rem",
                    }}
                  >
                    <ListItemText
                      primary="Appointment Time"
                      secondary={`${formatTime(data.startTime)} - ${formatTime(
                        data.endTime
                      )}`}
                      sx={{
                        width: "50%",
                      }}
                    />
                    <ListItemText
                      primary="Clinic Address"
                      secondary={data.doctor.address}
                      sx={{
                        width: "50%",
                      }}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      gap: "1.5rem",
                    }}
                  >
                    <ListItemText
                      primary="Clinic Phone Number"
                      secondary={data.doctor.phoneNumber}
                      sx={{
                        width: "50%",
                      }}
                    />
                    <ListItemText
                      primary="Clinic Email"
                      secondary={data.doctor.email}
                      sx={{
                        width: "50%",
                      }}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      gap: "1.5rem",
                    }}
                  >
                    <ListItemText
                      primary="Doctor Specialization"
                      secondary={
                        data.doctor.spec.charAt(0).toUpperCase() +
                        data.doctor.spec.slice(1)
                      }
                      sx={{
                        width: "50%",
                      }}
                    />
                    <ListItemText
                      primary="Period Time (m)"
                      secondary={data.doctor.bookingDuration * 60}
                      sx={{
                        width: "50%",
                      }}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      gap: "1rem",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                      onClick={() => handleDelete(data.id)}
                    >
                      CANCEL APPOINTMENT
                    </Button>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </StatusContainer>
    </MainContainer>
  );
};
