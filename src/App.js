import { Routes, Route } from "react-router-dom";
import { LoginRoute } from "./routes/PrivateRoutes";
import axios from "axios";
////////// Styles //////////
import "./main.scss";
////////// Shared Components //////////
import { Login } from "./pages/Login";
import { Unauthorized } from "./pages/Unauthorized";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/header/Header";
////////// Private Routes //////////
import { AdminRoutes } from "./roles/admin/AdminRoutes";
import { StaffRoutes } from "./roles/staff/StaffRoutes";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="" element={<Login />} exact />
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* Patient Routes (Private) */}
        <Route element={<LoginRoute allowedRoles={"PATIENT"} />}>
          <Route path="patient/*" element={<StaffRoutes />} />
        </Route>

        {/* Doctor Routes (Private) */}
        <Route element={<LoginRoute allowedRoles={"DOCTOR"} />}>
          <Route path="doctor/*" element={<AdminRoutes />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
