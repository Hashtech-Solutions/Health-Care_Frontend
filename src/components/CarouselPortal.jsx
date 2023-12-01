import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Typography, Button } from "@mui/material";
import carousel1 from "../shared/images/carousel1.jpg";
import carousel2 from "../shared/images/carousel2.jpg";
import carousel3 from "../shared/images/carousel3.jpg";
import carousel4 from "../shared/images/carousel4.jpg";
import carousel5 from "../shared/images/carousel5.jpg";
import { useNavigate } from "react-router";

export const CarouselPortal = ({ title, buttonText, buttonLink }) => {
  const navigate = useNavigate();
  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            textShadow: "3px 3px 3px black",
            fontWeight: "bold",
            fontSize: "3rem",
            pointerEvents: "auto",
          }}
        >
          {title}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "1.2rem",
            pointerEvents: "auto",
          }}
          onClick={() => {
            navigate(buttonLink);
          }}
        >
          {buttonText}
        </Button>
      </Box>

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
            <img
              src={image}
              alt={`carousel-${index}`}
              style={{
                height: "80vh",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};
