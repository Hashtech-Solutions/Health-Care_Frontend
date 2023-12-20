import { Box } from "@mui/material";
import { CategoriesPortal } from "./CategoriesPortal";
import { ValuesPortal } from "../../../components/ValuesPortal";
import { CarouselPortal } from "../../../components/CarouselPortal";

export const PatientPortal = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CarouselPortal
        title="Make Your Appointment Now!"
        buttonText="BOOK NOW!"
        buttonLink="/patient/doctors"
      />
      <ValuesPortal />
      <CategoriesPortal />
    </Box>
  );
};
