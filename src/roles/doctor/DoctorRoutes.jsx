import { Routes, Route } from "react-router-dom";
import { DoctorPortal } from "./DoctorPortal";
import { DoctorNavbar } from "./DoctorNavbar";
import { DoctorProfile } from "./profile/DoctorProfile";
import { DoctorReservations } from "./reservations/DoctorReservations";
import { NotFound } from "../../pages/NotFound";

export function DoctorRoutes() {
  return (
    <>
      <DoctorNavbar />
      <Routes>
        <Route path="" element={<DoctorPortal />} />
        <Route path="profile" element={<DoctorProfile />} />
        <Route path="reservations" element={<DoctorReservations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
