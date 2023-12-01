import * as React from 'react';
import { Grid, Typography, Avatar, CardActionArea } from '@mui/material';

export const CardItem = (props) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <CardActionArea onClick={() => console.log('Card clicked!')} sx={{
        borderRadius: "20px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", cursor: "pointer"
      }}>
        <Grid container
          sx={{
            backgroundColor: "white", borderRadius: "20px", height: "350px"
          }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: "40px 0 0 40px" }}>
            <Avatar
              alt="Profile Picture"
              src="https://picsum.photos/200/300"
              sx={{
                width: { xs: '30vw', sm: '20vw', md: '20vw', lg: '10vw' },
                height: { xs: '30vw', sm: '20vw', md: '20vw', lg: '10vw' },
              }}
            />
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8} sx={{ padding: "40px 0 0 40px" }}>
            {/* Column: Text Widgets */}
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h4">Doctor {props.name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{props.specialization}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">{props.address}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">+2{props.phone}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">Fees: {props.fees} EGP</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Add more Grid items for other columns if needed */}
        </Grid>
      </CardActionArea>
    </Grid>
  );
};