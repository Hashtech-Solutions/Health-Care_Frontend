import React, { useState, useEffect } from "react";
import { MainContainer } from "../../../components/MainContainer";
import { CardGrid } from "../../../components/CardGrid";
import axios from "axios";
import { BASE_URL } from "../../../shared/API";

export const DoctorsView = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        // Fetch doctors from the server
        axios
            .get(`${BASE_URL}/doctor/all`)
            .then((response) => {
                console.log(response.data);
                setDoctors(response.data);
            })
            .catch((error) => {
                console.error("Error fetching doctors:", error);
            });
    }, []); // The empty dependency array ensures the effect runs once when the component mounts

    return (
        <MainContainer title="Doctors">
            <CardGrid doctors={doctors} />
        </MainContainer>
    );
};
