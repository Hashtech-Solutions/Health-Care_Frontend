import { Box } from "@mui/material";
import { ValuesPortal } from "../../../components/ValuesPortal";
import { CarouselPortal } from "../../../components/CarouselPortal";

export const DoctorPortal = () => {
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
        title="Welcome Back to Health Care!"
        buttonText="VIEW YOUR APPOINTMENTS"
        buttonLink="/doctor/appointments"
      />
      <ValuesPortal />
    </Box>
  );
};
