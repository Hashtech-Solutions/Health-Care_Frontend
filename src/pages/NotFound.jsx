import { ErrorPage } from "../components/ErrorPage";

export const NotFound = () => {
  return (
    <ErrorPage
      type="info"
      title="404 Page Not Found"
      text="The page you are looking for does not exist."
      navbar={false}
    />
  );
};
