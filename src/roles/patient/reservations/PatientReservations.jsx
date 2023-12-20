import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";

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

// Testing
import { TestingData } from "../../doctor/reservations/Data";

export const PatientReservations = () => {
  const [appointments, setAppointments] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/appointment/all`)
      .then((res) => {
        setAppointments(res.data);
        setStatus(res.data.length > 0 ? "success" : "empty");
      })
      .catch((err) => {
        console.log(err);
        setStatus("success");
      });
  }, []);

  return (
    <MainContainer title="Appointments">
      <StatusContainer status={status} emptyMessage="No appointments yet!">
        {TestingData.map((data) => {
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
                  28 Jun 2017
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Appointment with Dr. {data.patientData.firstName}{" "}
                  {data.patientData.lastName}
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
                      primary="Appointment Date"
                      secondary={`${data.startTime} - ${data.endTime}`}
                      sx={{
                        width: "50%",
                      }}
                    />
                    <ListItemText
                      primary="Clinic Address"
                      secondary={data.patientData.phoneNumber}
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
                      secondary={data.patientData.phoneNumber}
                      sx={{
                        width: "50%",
                      }}
                    />
                    <ListItemText
                      primary="Clinic Email"
                      secondary={data.patientData.email}
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
                      secondary={data.patientData.age}
                      sx={{
                        width: "50%",
                      }}
                    />
                    <ListItemText
                      primary="Period Time (m)"
                      secondary={data.patientData.age}
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
                    <Button variant="contained" color="error" fullWidth>
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
