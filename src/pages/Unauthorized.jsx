import { ErrorPage } from "../components/ErrorPage";

export const Unauthorized = () => {
  return (
    <ErrorPage
      type="warning"
      title="Unauthorized Access"
      text="You are not authorized to view this page sign in to continue."
    />
  );
};
