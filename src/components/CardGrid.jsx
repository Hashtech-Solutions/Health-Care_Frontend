import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../shared/API";
import { Categories } from "../shared/data/Categories";

// Components
import {
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  Alert,
} from "@mui/material";
import { ProfileCard } from "./ProfileCard";
import { StatusContainer } from "./StatusContainer";

export const CardGrid = () => {
  const [doctors, setDoctors] = useState([]);
  const [status, setStatus] = useState("loading");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/doctor/all`)
      .then((res) => {
        console.log(res);
        setDoctors(res.data);
        setFilteredDoctors(res.data);
        setStatus(res.data.length > 0 ? "success" : "empty");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    const filteredDoctors = doctors.filter(
      (doctor) =>
        doctor.firstName
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        doctor.lastName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredDoctors(filteredDoctors);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    if (event.target.value === "all") {
      setFilteredDoctors(doctors);
    } else {
      const filteredDoctors = doctors.filter(
        (doctor) => doctor.spec === event.target.value.toLowerCase()
      );
      setFilteredDoctors(filteredDoctors);
    }
  };

  return (
    <>
      <StatusContainer
        status={status}
        emptyMessage="There are no doctors found..."
      >
        <Grid
          sx={{
            display: "flex",
            gap: "1%",
          }}
        >
          <TextField
            sx={{ width: "79%" }}
            label="Search Doctors"
            placeholder="Write a doctor name here..."
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
          />
          <FormControl
            sx={{
              width: "20%",
            }}
          >
            <InputLabel>Specialization</InputLabel>
            <Select
              label="Specialization"
              value={category}
              onChange={handleCategoryChange}
            >
              <MenuItem value="all">All Specializations</MenuItem>
              {Categories.map((category) => (
                <MenuItem value={category.name} key={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid container spacing={2} sx={{ paddingTop: "30px" }}>
          {filteredDoctors.length === 0 && (
            <Alert
              severity="info"
              sx={{
                width: "100%",
                ml: 2,
              }}
            >
              No doctors with that name or specialization were found!
            </Alert>
          )}
          {filteredDoctors.map((doctor) => (
            <ProfileCard isClickable={true} doctor={doctor} key={doctor.id} />
          ))}
        </Grid>
      </StatusContainer>
    </>
  );
};
