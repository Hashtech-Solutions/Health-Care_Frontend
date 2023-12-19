import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";

// Components
import { MainContainer } from "../../../components/MainContainer";
import { CardGrid } from "../../../components/CardGrid";
import { Alert } from "@mui/material";
import { BackdropLoader } from "../../../components/BackdropLoader";

export const DoctorsView = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/doctor/all`)
      .then((response) => {
        console.log(response.data);
        setDoctors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <MainContainer title="Doctors">
      {loading ? (
        <BackdropLoader />
      ) : error ? (
        <Alert severity="error">
          Something went wrong, please try again later!
        </Alert>
      ) : doctors.length === 0 ? (
        <Alert severity="info">No doctors found!</Alert>
      ) : (
        <CardGrid doctors={doctors} />
      )}
    </MainContainer>
  );
};
