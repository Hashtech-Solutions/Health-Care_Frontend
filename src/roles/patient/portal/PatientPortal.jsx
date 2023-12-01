import { Grid, Box } from "@mui/material";
import { CardItem } from "../../../components/CardItem";
import { CategoriesPortal } from "./CategoriesPortal";
import { ValuesPortal } from "./ValuesPortal";
import { CarouselPortal } from "./CarouselPortal";
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
      <CarouselPortal />
      <ValuesPortal />
      <CategoriesPortal />
      <Footer />
    </Box>
  );
};
