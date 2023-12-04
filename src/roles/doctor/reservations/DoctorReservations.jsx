import { useState } from "react";

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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Testing
import { TestingData } from "./Data";

export const DoctorReservations = () => {
  return (
    <MainContainer title="Appointments">
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
      })}
    </MainContainer>
  );
};
