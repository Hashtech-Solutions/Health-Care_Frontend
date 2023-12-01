import { Box, Grid, Container, Typography } from "@mui/material";
import aid from "../../../shared/images/aid.png";
import calender from "../../../shared/images/calender.png";
import booking from "../../../shared/images/booking.png";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

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
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={booking}
                alt="Booking"
                sx={{ height: 55 }}
              />
              <Typography variant="h5" sx={{ my: 5, fontWeight: "bold" }}>
                Effortless Booking
              </Typography>
              <Typography variant="h6">
                Simplify your clinic visits with our easy-to-use reservation
                system. Book appointments seamlessly, check in online, and
                minimize wait times for a hassle-free experience.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={calender}
                alt="Calender"
                sx={{ height: 55 }}
              />
              <Typography variant="h5" sx={{ my: 5, fontWeight: "bold" }}>
                Flexible Scheduling
              </Typography>
              <Typography variant="h6">
                Take control of your health journey. Our website offers
                convenient and patient-friendly scheduling options, allowing you
                to book appointments.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={aid}
                alt="First Aid Kit"
                sx={{ height: 55 }}
              />
              <Typography variant="h5" sx={{ my: 5, fontWeight: "bold" }}>
                On-the-Go Healthcare
              </Typography>
              <Typography variant="h6">
                Access healthcare anytime, anywhere. Our reservation platform
                enables quick and secure online bookings, providing you with the
                flexibility.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
