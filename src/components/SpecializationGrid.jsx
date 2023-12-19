import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { BASE_URL } from "../shared/API";

// Components
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

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
      {specializationDoctors.map((item) => (
        <ImageListItem
          key={item.id}
          sx={{
            width: "200px",
          }}
        >
          <img
            src={`${BASE_URL}/uploads/${item.user.image}`}
            alt={item.user.firstName + " " + item.user.lastName}
            loading="lazy"
            style={{
              height: "300px",
            }}
          />
          <ImageListItemBar
            title={item.user.firstName + " " + item.user.lastName}
            subtitle={`Starts from ${item.fees}LE`}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${
                  item.user.firstName + " " + item.user.lastName
                }`}
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
