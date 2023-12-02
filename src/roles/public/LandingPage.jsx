import { Box } from "@mui/material";
import { ValuesPortal } from "../../components/ValuesPortal";
import { CarouselPortal } from "../../components/CarouselPortal";
import { CategoriesPortal } from "../patient/portal/CategoriesPortal";

export const LandingPage = () => {
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
        title="Welcome to Health Care!"
        buttonText="BOOK A DOCTOR"
        buttonLink="/portal/doctors"
      />
      <ValuesPortal />
      <CategoriesPortal />
    </Box>
  );
};
