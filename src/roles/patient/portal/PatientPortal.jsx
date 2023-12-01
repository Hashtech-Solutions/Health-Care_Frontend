import { Grid, Box } from "@mui/material";
import { CardItem } from "../../../components/CardItem";
import { CategoriesPortal } from "./CategoriesPortal";
import { ValuesPortal } from "./ValuesPortal";
import { CarouselPortal } from "./CarouselPortal";

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
      <CarouselPortal />
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
