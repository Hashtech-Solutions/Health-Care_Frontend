import { BackdropLoader } from "./BackdropLoader";
import { Alert } from "@mui/material";

export const StatusContainer = ({ status, children, emptyMessage }) => {
  return (
    <>
      {status === "loading" ? (
        <BackdropLoader />
      ) : status === "error" ? (
        <Alert severity="error">
          Something went wrong, please try again later!
        </Alert>
      ) : status === "empty" ? (
        <Alert severity="info">{emptyMessage || "No data found!"}</Alert>
      ) : (
        children
      )}
    </>
  );
};
