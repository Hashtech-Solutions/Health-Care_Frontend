import { Grid, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProfileCard = (props) => {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <CardActionArea
        disabled={!props.isClickable}
        onClick={() => navigate(`/patient/doctors/${props.doctor.id}`)}
        sx={{
          borderRadius: "20px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: props.isClickable ? "pointer" : "default",
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            height: "350px",
          }}
        >
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={4}
            sx={{ padding: "40px 0 0 40px" }}
          >
            <img
              alt="Profile"
              src="https://picsum.photos/200/300"
              style={{ width: "120px", borderRadius: "50%", height: "120px" }}
            />
          </Grid>
          <Grid
            item
            xs={8}
            sm={8}
            md={8}
            lg={8}
            sx={{ padding: "40px 0 0 40px" }}
          >
            {/* Column: Text Widgets */}
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h4">Doctor {props.doctor.name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{props.doctor.specialization}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">{props.doctor.address}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">+2{props.doctor.phone}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">Fees: {props.doctor.fees} EGP</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Add more Grid items for other columns if needed */}
        </Grid>
      </CardActionArea>
    </Grid >
  );
};
