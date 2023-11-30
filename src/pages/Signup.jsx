import { Grid, Paper, Box, Typography } from "@mui/material";
import { ImageButtonContainer } from "../components/ImageButton";
import doctorBackground from "../shared/images/doctor3.png";
import patientBackground from "../shared/images/patient3.png";
import mainBackground from "../shared/images/background.jpg";

const images = [
  {
    id: 1,
    url: doctorBackground,
    title: "Doctor",
    width: "100%",
    link: "/signup/doctor",
  },
  {
    id: 2,
    url: patientBackground,
    title: "Patient",
    width: "100%",
    link: "/signup/patient",
  },
];

export const Signup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundImage: `url(${mainBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography component="h1" variant="h1">
        Sign up as a
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((image) => (
          <Grid
            item
            key={image.id}
            sx={{
              height: "500px",
            }}
          >
            <Paper
              sx={{
                textAlign: "center",
                padding: 0,
                borderRadius: "20px",
              }}
            >
              <ImageButtonContainer image={image} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
