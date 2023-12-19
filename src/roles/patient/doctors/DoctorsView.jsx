import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";

// Components
import { MainContainer } from "../../../components/MainContainer";
import { StatusContainer } from "../../../components/StatusContainer";
import { CardGrid } from "../../../components/CardGrid";

export const DoctorsView = () => {
  const [doctors, setDoctors] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/doctor/all`)
      .then((res) => {
        console.log(res);
        setDoctors(res.data);
        setStatus(res.data.length > 0 ? "success" : "empty");
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  }, []);

  return (
    <MainContainer title="Doctors">
      <StatusContainer
        status={status}
        emptyMessage="There are no doctors found..."
      >
        <CardGrid doctors={doctors} />
      </StatusContainer>
    </MainContainer>
  );
};
