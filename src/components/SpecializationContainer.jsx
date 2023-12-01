import { Box, Typography, Container, Divider } from "@mui/material";

export const SpecializationContainer = ({ children, item }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${item.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "calc(100vh - 64px)",
        width: "100%",
      }}
    >
      <Container
        fixed
        sx={{
          pt: "30px",
          minHeight: "calc(100vh - 64px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {item.name}
        </Typography>
        <Divider />
        <Typography variant="h5" gutterBottom>
          Description:
        </Typography>
        <Typography variant="h6" gutterBottom>
          {item.description}
        </Typography>
        {children}
      </Container>
    </Box>
  );
};
