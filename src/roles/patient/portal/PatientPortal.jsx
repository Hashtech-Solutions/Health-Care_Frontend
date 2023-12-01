import { Grid, Box } from "@mui/material";
import { CardItem } from "../../../components/CardItem";
import { CategoriesPortal } from "./CategoriesPortal";
import { ValuesPortal } from "../../../components/ValuesPortal";
import { CarouselPortal } from "../../../components/CarouselPortal";
import { Footer } from "./Footer";

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
        title="MAKE YOUR APPOINTMENT"
        buttonText="BOOK NOW!"
        buttonLink="/patient/docotrs"
      />
      <ValuesPortal />
      <CategoriesPortal />
      <Footer />
    </Box>
  );
};
