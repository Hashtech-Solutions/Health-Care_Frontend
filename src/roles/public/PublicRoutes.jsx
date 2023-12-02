import { Routes, Route } from "react-router-dom";
import { PublicNavbar } from "./PublicNavbar";
import { PublicDoctors } from "./PublicDoctors";
import { AllSpecializations } from "../../pages/AllSpecializations";
import { SingleSpecialization } from "../../pages/SingleSpecialization";
import { LandingPage } from "./LandingPage";
import { Footer } from "../../components/Footer";
import { NotFound } from "../../pages/NotFound";

export function PublicRoutes() {
  return (
    <>
      <PublicNavbar />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="specializations" element={<AllSpecializations />} />
        <Route path="specializations/:id" element={<SingleSpecialization />} />

        <Route path="doctors" element={<PublicDoctors />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
