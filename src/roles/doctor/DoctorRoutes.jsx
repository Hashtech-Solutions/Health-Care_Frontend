import { Routes, Route } from "react-router-dom";
import { DoctorPortal } from "./portal/DoctorPortal";
import { DoctorNavbar } from "./DoctorNavbar";
import { DoctorProfile } from "./profile/DoctorProfile";
import { DoctorReservations } from "./reservations/DoctorReservations";
import { AllSpecializations } from "../../pages/AllSpecializations";
import { SingleSpecialization } from "../../pages/SingleSpecialization";
import { Footer } from "../../components/Footer";
import { NotFound } from "../../pages/NotFound";

export function DoctorRoutes() {
  return (
    <>
      <DoctorNavbar />
      <Routes>
        <Route path="" element={<DoctorPortal />} />
        <Route path="profile" element={<DoctorProfile />} />
        <Route path="appointments" element={<DoctorReservations />} />
        <Route path="specializations" element={<AllSpecializations />} />
        <Route path="specializations/:id" element={<SingleSpecialization />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
