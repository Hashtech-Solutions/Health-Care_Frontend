import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

// Components
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const itemData = [
  {
    id: 1,
    img: "https://usercontent.one/wp/www.africanstudies.co.uk/wp-content/uploads/2018/08/black-doctor.jpg?media=1655360714",
    name: "Ahmed Ahmed",
    fees: "300",
  },
  {
    id: 2,
    img: "https://usercontent.one/wp/www.africanstudies.co.uk/wp-content/uploads/2018/08/black-doctor.jpg?media=1655360714",
    name: "Mahmoud Mahmoud",
    fees: "200",
  },
  {
    id: 3,
    img: "https://usercontent.one/wp/www.africanstudies.co.uk/wp-content/uploads/2018/08/black-doctor.jpg?media=1655360714",
    name: "Mohamed Mohamed",
    fees: "100",
  },
  {
    id: 4,
    img: "https://usercontent.one/wp/www.africanstudies.co.uk/wp-content/uploads/2018/08/black-doctor.jpg?media=1655360714",
    name: "Ali Ali",
    fees: "400",
  },
  {
    id: 5,
    img: "https://usercontent.one/wp/www.africanstudies.co.uk/wp-content/uploads/2018/08/black-doctor.jpg?media=1655360714",
    name: "Omar Omar",
    fees: "500",
  },
  {
    id: 6,
    img: "https://usercontent.one/wp/www.africanstudies.co.uk/wp-content/uploads/2018/08/black-doctor.jpg?media=1655360714",
    name: "Khaled Khaled",
    fees: "600",
  },
  {
    id: 7,
    img: "https://usercontent.one/wp/www.africanstudies.co.uk/wp-content/uploads/2018/08/black-doctor.jpg?media=1655360714",
    name: "Hassan Hassan",
    fees: "700",
  },
];

export const SpecializationGrid = ({ specializationDoctors }) => {
  const authContext = useAuth();
  const navigate = useNavigate();
  const currLocation =
    authContext.role === "PATIENT"
      ? "patient"
      : authContext.role === "DOCTOR"
      ? "doctor"
      : "portal";

  return (
    <ImageList
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        mb: "0",
        paddingBottom: "20px",
      }}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.id}
          sx={{
            width: "200px",
          }}
        >
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.name}
            loading="lazy"
            style={{
              height: "300px",
            }}
          />
          <ImageListItemBar
            title={item.name}
            subtitle={`Starts from ${item.fees}LE`}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.name}`}
                onClick={() => {
                  currLocation === "portal"
                    ? navigate(`/login`)
                    : navigate(`/${currLocation}/doctors/${item.id}`);
                }}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
