import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--primary)",
        p: 6,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="white">
              We are Health Care, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="white">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="white">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="white">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="#" color="inherit">
              <Facebook sx={{ color: "white" }} />
            </Link>
            <Link href="#" color="inherit" sx={{ pl: 1, pr: 1 }}>
              <Instagram sx={{ color: "white" }} />
            </Link>
            <Link href="#" color="inherit">
              <Twitter sx={{ color: "white" }} />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="#">
              Health Care
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
