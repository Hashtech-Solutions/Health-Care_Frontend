import React, { useState, useEffect } from "react";
import { MainContainer } from "../../../components/MainContainer";
import { ProfileCard } from "../../../components/ProfileCard";
import { Grid } from "@mui/material";
import { ProfileDetailsCard } from "../../../components/ProfileDetailsCard";
import { Booking } from "./Booking";
import { Box } from "@mui/system";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";
import { useParams } from "react-router-dom";

export const DoctorView = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [patient, setPatient] = useState({
        id: 1,
        name: "John",
        email: "john.doe@example.com",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Make a request to fetch doctor details from the server
        axios
            .get(`${BASE_URL}/doctor/one/${id}`)
            .then((response) => {
                console.log(response.data);
                setDoctor(response.data); // Assuming the server returns doctor details in the response.data
            })
            .catch((error) => {
                console.error("Error fetching doctor details:", error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false regardless of success or failure
            });
    }, [id]);

    // If loading is true, you can show a loading spinner or a message
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <MainContainer
            title={`Book now with Doctor ${doctor.user.firstName} ${doctor.user.lastName}`}
        >
            <Grid container spacing={2}>
                <Grid item direction={"column"} spacing={2}>
                    <ProfileCard doctor={doctor} isClickable={false} />
                    <Box mt={2} />
                    <ProfileDetailsCard description={doctor.about} />
                </Grid>
                <Booking doctor={doctor} patient={patient} />
            </Grid>
        </MainContainer>
    );
};
