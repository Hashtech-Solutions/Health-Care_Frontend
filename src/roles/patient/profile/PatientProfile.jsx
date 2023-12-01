import { Box, Typography } from "@mui/material";
import backgroundImage from "../../../shared/images/background.jpg";

export const PatientProfile = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "calc(100vh - 64px)",
        width: "100%",
      }}
    >
      <Typography variant="h4">Profile Settings</Typography>
    </Box>
  );
};
