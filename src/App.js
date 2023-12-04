import { Routes, Route } from "react-router-dom";
import { LoginRoute } from "./routes/PrivateRoutes";
////////// Styles //////////
import "./main.scss";
////////// Public Routes //////////
import { PublicRoutes } from "./roles/public/PublicRoutes";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { PatientSignup } from "./pages/PatientSignup";
import { DoctorSignup } from "./pages/DoctorSignup";
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
        <Route path="" element={<PublicRoutes />} />
        <Route path="portal/*" element={<PublicRoutes />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup/patient" element={<PatientSignup />} />
        <Route path="signup/doctor" element={<DoctorSignup />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* Doctor Routes (Private) */}
        <Route element={<LoginRoute allowedRoles={"DOCTOR"} />}>
          <Route path="doctor/*" element={<DoctorRoutes />} />
        </Route>

        {/* Patient Routes (Private) */}
        <Route element={<LoginRoute allowedRoles={"PATIENT"} />}>
          <Route path="patient/*" element={<PatientRoutes />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
