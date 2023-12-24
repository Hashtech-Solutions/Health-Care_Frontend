import { Grid, Typography, Icon } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export const ProfileDetailsCard = (props) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      sx={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        borderRadius: "20px",
        height: "auto",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          lg={2}
          sx={{
            padding: "40px 0 40px 40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon>
            <InfoIcon sx={{ fontSize: 24 }} />
          </Icon>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          sx={{ padding: "40px 0 40px 40px" }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h6">About The Doctor</Typography>
              <Typography variant="body1">
                {props.description ||
                  "This doctor has not provided a description yet."}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
