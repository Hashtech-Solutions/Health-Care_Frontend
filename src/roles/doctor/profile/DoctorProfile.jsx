import { TextField, Grid, Button, MenuItem } from "@mui/material";
import { MainContainer } from "../../../components/MainContainer";
import { Categories } from "../../../shared/data/Categories";

export const DoctorProfile = () => {
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
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Clinic Phone Number"
              name="clinicPhoneNumber"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Clinic Email"
              name="clinicEmail"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Specialization"
              name="specialization"
              select
              required
              value={""}
            >
              {Categories.map((category) => (
                <MenuItem key={category} value={category.value}>
                  {category.name}
                </MenuItem>
              ))}

              {/* Add more specialization options as needed */}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Clinic Address"
              name="clinicAddress"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Workplace" name="workplace" required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Fees"
              name="fees"
              type="number"
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
