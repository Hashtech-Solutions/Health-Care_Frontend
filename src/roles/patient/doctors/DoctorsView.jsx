import { CardGrid } from "../../../components/CardGrid";
import { MainContainer } from "../../../components/MainContainer";
import { Footer } from "../../../components/Footer";
import { Box } from "@mui/material";
export const DoctorsView = () => {
  return (
    <Box>
      <MainContainer title="Doctors">
        <CardGrid />
      </MainContainer>
      <Footer />
    </Box>
  );
};
