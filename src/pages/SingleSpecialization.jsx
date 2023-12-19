import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { BASE_URL } from "../shared/API";
import { Categories } from "../shared/data/Categories";

// Components
import { SpecializationContainer } from "../components/SpecializationContainer";
import { StatusContainer } from "../components/StatusContainer";
import { SpecializationGrid } from "../components/SpecializationGrid";
import { Typography } from "@mui/material";

export const SingleSpecialization = () => {
  const [doctors, setDoctors] = useState([]);
  const [status, setStatus] = useState("loading");
  const { id } = useParams();
  const item = Categories.find((item) => item.value === id);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/doctor/all`)
      .then((res) => {
        console.log(res);
        setDoctors(res.data);
        setStatus(res.data.length > 0 ? "success" : "empty");
      })
      .catch((err) => {
        console.log(err);
        setStatus("error");
      });
  }, [id]);

  return (
    <SpecializationContainer item={item}>
      <Typography variant="h5" gutterBottom sx={{ mt: "40px" }}>
        Specialization Doctors:
      </Typography>
      <StatusContainer
        status={status}
        emptyMessage="No doctors were found in this specialization..."
      >
        <SpecializationGrid specializationDoctors={doctors} />
      </StatusContainer>
    </SpecializationContainer>
  );
};
