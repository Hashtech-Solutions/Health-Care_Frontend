import { Grid } from "@mui/material";
import { ImageButtonContainer } from "../components/ImageButton";
import doctorBackground from "../shared/images/signup-doctor.jpg";
import patientBackground from "../shared/images/signup-patient.jpg";

const images = [
  {
    id: 1,
    url: doctorBackground,
    title: "Sign up as a Doctor",
    link: "/signup/doctor",
  },
  {
    id: 2,
    url: patientBackground,
    title: "Sign up as a Patient",
    link: "/signup/patient",
  },
];

export const Signup = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {images.map((image) => (
        <Grid
          item
          key={image.id}
          sx={{
            textAlign: "center",
            height: "100%",
            width: "50%",
          }}
        >
          <ImageButtonContainer image={image} />
        </Grid>
      ))}
    </Grid>
  );
};
