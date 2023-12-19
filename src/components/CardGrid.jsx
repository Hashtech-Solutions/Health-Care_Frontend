import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../shared/API";
import { Categories } from "../shared/data/Categories";
import { TestingDoctors } from "../shared/data/Testing";

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
        setDoctors(res.data);
        setFilteredDoctors(res.data);
        setStatus(res.data.length > 0 ? "success" : "empty");
      })
      .catch((err) => {
        console.error(err);
        setStatus("success");
        setFilteredDoctors(TestingDoctors);
      });
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredDoctors(TestingDoctors);
    } else {
      const filtered = TestingDoctors.filter((doctor) => {
        return (
          doctor.firstName.toLowerCase().includes(search.toLowerCase()) ||
          doctor.lastName.toLowerCase().includes(search.toLowerCase())
        );
      });
      setFilteredDoctors(filtered);
    }
  }, [search, doctors]);

  useEffect(() => {
    if (category === "all") {
      setSearch("");
      setFilteredDoctors(TestingDoctors);
    } else {
      setSearch("");
      const filtered = TestingDoctors.filter((doctor) => {
        return doctor.specialization === category;
      });
      setFilteredDoctors(filtered);
    }
  }, [category, doctors]);

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
            onChange={(e) => setSearch(e.target.value)}
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
              onChange={(e) => setCategory(e.target.value)}
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
