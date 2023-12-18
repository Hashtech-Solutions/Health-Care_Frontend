import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Categories } from "../shared/data/Categories";
import axios from "axios";
import { BASE_URL } from "../shared/API";

// Components
import { SpecializationContainer } from "../components/SpecializationContainer";
import { SpecializationGrid } from "../components/SpecializationGrid";
import { Alert, Typography } from "@mui/material";
import { BackdropLoader } from "../components/BackdropLoader";

export const SingleSpecialization = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const item = Categories.find((item) => item.value === id);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/doctor/all`)
      .then((response) => {
        console.log(response);
        setDoctors(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  return (
    <SpecializationContainer item={item}>
      <Typography variant="h5" gutterBottom sx={{ mt: "40px" }}>
        Specialization Doctors:
      </Typography>
      {loading ? (
        <BackdropLoader open={loading} />
      ) : error ? (
        <Alert severity="danger">Something went wrong</Alert>
      ) : (
        <SpecializationGrid specializationDoctors={doctors} />
      )}
    </SpecializationContainer>
  );
};
