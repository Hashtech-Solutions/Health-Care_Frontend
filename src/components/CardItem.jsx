import { Grid, Paper } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(() => ({
  backgroundColor: '#1A2027',
  padding: '15px',
  textAlign: 'center',
  color: 'white',
}));

export const CardItem = (props) => {
  return (
    <Grid item xs={6}>
      <Item>{props.text}</Item>
    </Grid>
  );
};