import { Routes, Route } from "react-router-dom";
import { LoginRoute } from "./routes/PrivateRoutes";
////////// Styles //////////
import "./main.scss";
////////// Shared Components //////////
import { Login } from "./pages/Login";
import { Unauthorized } from "./pages/Unauthorized";
import { NotFound } from "./pages/NotFound";
////////// Private Routes //////////
import { DoctorRoutes } from "./roles/doctor/DoctorRoutes";
import { PatientRoutes } from "./roles/patient/PatientRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route path="" element={<Login />} exact />
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* Patient Routes (Private) */}
        <Route element={<LoginRoute allowedRoles={"PATIENT"} />}>
          <Route path="patient/*" element={<PatientRoutes />} />
        </Route>

        {/* Doctor Routes (Private) */}
        <Route element={<LoginRoute allowedRoles={"DOCTOR"} />}>
          <Route path="doctor/*" element={<DoctorRoutes />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
