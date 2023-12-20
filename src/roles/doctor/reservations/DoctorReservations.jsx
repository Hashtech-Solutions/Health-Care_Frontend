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
import { TestingData } from "./Data";

export const DoctorReservations = () => {
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
        setStatus("error");
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
                <Typography sx={{ width: "20%", flexShrink: 0 }}>
                  {data.startTime} - {data.endTime}
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
                      primary="Name"
                      secondary={
                        data.patientData.firstName +
                        " " +
                        data.patientData.lastName
                      }
                      sx={{
                        width: "50%",
                      }}
                    />
                    <ListItemText
                      primary="Email"
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
                      primary="Phone Number"
                      secondary={data.patientData.phoneNumber}
                      sx={{
                        width: "50%",
                      }}
                    />
                    <ListItemText
                      primary="Age"
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
                    <Button variant="contained" color="primary" fullWidth>
                      CONFIRM
                    </Button>
                    <Button variant="contained" color="error" fullWidth>
                      CANCEL
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
