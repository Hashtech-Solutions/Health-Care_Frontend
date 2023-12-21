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
      {specializationDoctors.map((doctor) => (
        <ImageListItem
          key={doctor.id}
          sx={{
            width: "200px",
            margin: "10px",
          }}
        >
          <img
            src={`${BASE_URL}/uploads/${doctor.image}`}
            alt={doctor.firstName + " " + doctor.lastName}
            loading="lazy"
            style={{
              height: "300px",
            }}
          />
          <ImageListItemBar
            title={doctor.firstName + " " + doctor.lastName}
            subtitle={`Starts from ${doctor.fees}LE`}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${
                  doctor.firstName + " " + doctor.lastName
                }`}
                onClick={() => {
                  currLocation === "portal"
                    ? navigate(`/login`)
                    : navigate(`/${currLocation}/doctors/${doctor.id}`);
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
