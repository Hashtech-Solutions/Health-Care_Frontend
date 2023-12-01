import { Box, Grid, Container, Typography } from "@mui/material";
import aid from "../shared/images/aid.png";
import calender from "../shared/images/calender.png";
import booking from "../shared/images/booking.png";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const valuesData = [
  {
    title: "Effortless Booking",
    description:
      "Simplify your clinic visits with our easy-to-use reservation system. Book appointments seamlessly, check in online, and minimize wait times for a hassle-free experience.",
    image: booking,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Take control of your health journey. Our website offers convenient and patient-friendly scheduling options, allowing you to book appointments.",
    image: calender,
  },
  {
    title: "On-the-Go Healthcare",
    description:
      "Access healthcare anytime, anywhere. Our reservation platform enables quick and secure online bookings, providing you with the flexibility.",
    image: aid,
  },
];

export const ValuesPortal = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        bgcolor: "lightblue",
        width: "100%",
        height: "auto",
      }}
    >
      <Container sx={{ mt: 15, mb: 15, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          {valuesData.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={value.image}
                  alt={value.title}
                  sx={{ height: 55 }}
                />
                <Typography
                  variant="h5"
                  sx={{ my: 5, fontWeight: "bold", color: "black" }}
                >
                  {value.title}
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  {value.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
