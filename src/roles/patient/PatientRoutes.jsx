import { Routes, Route } from "react-router-dom";
import { PatientPortal } from "./portal/PatientPortal";
import { PatientNavbar } from "./PatientNavbar";
import { PatientProfile } from "./profile/PatientProfile";
import { PatientReservations } from "./reservations/PatientReservations";
import { DoctorView } from "./doctor/DoctorView";
import { DoctorsView } from "./doctors/DoctorsView";
import { Footer } from "../../components/Footer";
import { AllSpecializations } from "../../pages/AllSpecializations";
import { SingleSpecialization } from "../../pages/SingleSpecialization";
import { NotFound } from "../../pages/NotFound";

export function PatientRoutes() {
  return (
    <>
      <PatientNavbar />
      <Routes>
        <Route path="" element={<PatientPortal />} />
        <Route path="profile" element={<PatientProfile />} />
        <Route path="appointments" element={<PatientReservations />} />
        <Route path="doctors" element={<DoctorsView />} />
        <Route path="doctors/:id" element={<DoctorView />} />
        <Route path="specializations" element={<AllSpecializations />} />
        <Route path="specializations/:id" element={<SingleSpecialization />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
