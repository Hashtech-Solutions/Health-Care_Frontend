import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Categories } from "../shared/data/Categories";
import axios from "axios";
import { BASE_URL } from "../shared/API";

// Components
import { SpecializationContainer } from "../components/SpecializationContainer";
import { SpecializationGrid } from "../components/SpecializationGrid";
import { Typography } from "@mui/material";

export const SingleSpecialization = () => {
  const [doctors, setDoctors] = useState([]);
  const { id } = useParams();
  const item = Categories.find((item) => item.value === id);

  useEffect(() => {
    axios.get(`${BASE_URL}/doctors?specialization=${id}`).then((response) => {
      setDoctors(response.data);
    });
  }, [id]);

  return (
    <SpecializationContainer item={item}>
      <Typography variant="h5" gutterBottom sx={{ mt: "40px" }}>
        Specialization Doctors:
      </Typography>
      <SpecializationGrid specializationDoctors={doctors} />
    </SpecializationContainer>
  );
};
