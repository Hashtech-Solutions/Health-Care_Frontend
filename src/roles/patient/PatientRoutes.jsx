import { Routes, Route } from "react-router-dom";
import { PatientPortal } from "./PatientPortal";
import { PatientNavbar } from "./PatientNavbar";
import { PatientProfile } from "./profile/PatientProfile";
import { PatientReservations } from "./reservations/PatientReservations";
import { NotFound } from "../../pages/NotFound";
import { DoctorView } from "./doctor/DoctorView";

export function PatientRoutes() {
  return (
    <>
      <PatientNavbar />
      <Routes>
        <Route path="" element={<PatientPortal />} />
        <Route path="profile" element={<PatientProfile />} />
        <Route path="reservations" element={<PatientReservations />} />
        <Route path="doctor/:doctorId" element={<DoctorView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
