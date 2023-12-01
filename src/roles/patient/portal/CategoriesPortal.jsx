import { Container, Typography } from "@mui/material";
import { CategoriesLayout } from "../../../components/CategoriesLayout";

export const CategoriesPortal = () => {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Browse all Medical Specilizations
      </Typography>
      <CategoriesLayout />
    </Container>
  );
};
