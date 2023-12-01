import { Grid, Box } from "@mui/material";
import { CardItem } from "../../../components/CardItem";
import { CategoriesPortal } from "./CategoriesPortal";
import { ValuesPortal } from "../../../components/ValuesPortal";
import { CarouselPortal } from "../../../components/CarouselPortal";

export const PatientPortal = () => {
  const cardItems = ["1", "2", "3", "4"];
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
      <Grid container spacing={4} sx={{ padding: "50px" }}>
        {cardItems.map((item, index) => (
          <CardItem key={index} text={item} />
        ))}
      </Grid>
    </Box>
  );
};
