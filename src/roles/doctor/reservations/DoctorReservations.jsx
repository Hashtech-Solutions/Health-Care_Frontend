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

export const DoctorReservations = () => {
  const [appointments, setAppointments] = useState([]);
  const [status, setStatus] = useState("loading");
  const authContext = useAuth();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/book/doctor/${authContext.id}`)
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
                  Appointment #{data.id}
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
                      primary="Time"
                      secondary={`${data.startTime
                        .split("T")[1]
                        .substring(0, 5)} - ${data.endTime
                        .split("T")[1]
                        .substring(0, 5)}`}
                      sx={{
                        width: "50%",
                      }}
                    />
                    <ListItemText
                      primary="Name"
                      secondary={
                        data.patient.firstName + " " + data.patient.lastName
                      }
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
                      primary="Phone Number"
                      secondary={data.patient.phoneNumber}
                      sx={{
                        width: "50%",
                      }}
                    />
                    <ListItemText
                      primary="Email"
                      secondary={data.patient.email}
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
