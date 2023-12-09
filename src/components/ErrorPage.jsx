import { Navbar } from "./Navbar";
import { Box, Container, Alert, AlertTitle } from "@mui/material";
import backgroundImage from "../shared/images/background.jpg";

const NavItems = [
  {
    title: "Sign In",
    path: "/login",
  },
  {
    title: "Sign Up",
    path: "/signup",
  },
];

export const ErrorPage = ({ type, text, title, navbar }) => {
  return (
    <>
      {navbar && <Navbar NavItems={NavItems} HeaderLink="/portal" />}
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: navbar ? "calc(100vh - 64px)" : "calc(100vh - 319px)",
          width: "100%",
        }}
      >
        <Container fixed sx={{ pt: "30px", paddingBottom: "20px" }}>
          <Alert
            variant="filled"
            severity={type}
            sx={{
              mt: "80px",
              fontSize: "20px",
              "& .MuiAlert-icon": {
                fontSize: "45px",
                alignItems: "center",
                mr: "25px",
              },
            }}
          >
            <AlertTitle
              sx={{
                fontSize: "30px",
              }}
            >
              {title}
            </AlertTitle>
            {text}
          </Alert>
        </Container>
      </Box>
    </>
  );
};
