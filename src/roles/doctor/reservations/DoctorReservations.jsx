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
  Alert,
} from "@mui/material";
import { MainContainer } from "../../../components/MainContainer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Testing
import { TestingData } from "./Data";
import { BackdropLoader } from "../../../components/BackdropLoader";

export const DoctorReservations = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/appointment/all`)
      .then((res) => {
        setAppointments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <MainContainer title="Appointments">
      {loading ? (
        <BackdropLoader />
      ) : error ? (
        <Alert severity="error" variant="filled">
          Something went wrong, please try again later!
        </Alert>
      ) : TestingData.length === 0 ? (
        <Alert severity="info" variant="filled">
          No appointments yet!
        </Alert>
      ) : (
        TestingData.map((data) => {
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
                <Typography>
                  Appointment #{data.id} {data.startTime} - {data.endTime}
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
        })
      )}
    </MainContainer>
  );
};
