import React from "react";
import { Grid, Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./PatientPortal.scss"
import carousel1 from "../../../shared/images/carousel1.jpg";
import carousel2 from "../../../shared/images/carousel2.jpg";
import carousel3 from "../../../shared/images/carousel3.jpg";
import carousel4 from "../../../shared/images/carousel4.jpg";
import carousel5 from "../../../shared/images/carousel5.jpg";
import { CardItem } from "../../../components/CardItem";

export const PatientPortal = () => {
  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
  const cardItems = ["1", "2", "3", "4"];
  return (
    <Box sx={({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    })}>
      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        infiniteLoop={true}
        stopOnHover={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
      <Grid container spacing={4} sx={{ padding: "50px" }}>
        {cardItems.map((item, index) => (
          <CardItem key={index} text={item} />
        ))}
      </Grid>
    </Box>
  );
};
