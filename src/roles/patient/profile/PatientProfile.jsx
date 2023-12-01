import { TextField, Grid, Button } from "@mui/material";
import { MainContainer } from "../../../components/MainContainer";

export const PatientProfile = () => {
  return (
    <MainContainer title="Profile Settings">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="First Name" name="firstName" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Last Name" name="lastName" required />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="National ID"
              name="nationalId"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              required
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              mt: "20px",
            }}
          >
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save Data
            </Button>
            <Button type="submit" variant="contained" color="error" fullWidth>
              Delete Account
            </Button>
          </Grid>
        </Grid>
      </form>
    </MainContainer>
  );
};
