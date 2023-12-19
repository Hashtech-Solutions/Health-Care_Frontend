import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";

// Components
import { MainContainer } from "../../../components/MainContainer";
import { StatusContainer } from "../../../components/StatusContainer";

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
        setStatus("error");
      });
  }, []);

  return (
    <MainContainer title="Appointments">
      <StatusContainer
        status={status}
        emptyMessage="No appointments were found, book a doctor from the doctors page..."
      >
        <p>Appointments</p>
      </StatusContainer>
    </MainContainer>
  );
};
